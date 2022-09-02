import { ISession } from "interfaces/user";
import { getIronSession, IronSessionOptions } from "iron-session";
import { withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "user",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: ISession;
  }
}


export const adminCheckAuth = (
  { redirectTo = "/", }:
    { redirectTo?: string; }) =>
  withIronSessionSsr(async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    try {
      const session = await getIronSession(context.req, context.res, sessionOptions);
      console.log('admin', session.user?.admin)
      if (session.user === undefined || session.user.admin === false) {
        return {
          redirect: {
            permanent: false,
            destination: redirectTo,
          },
        };
      }
      return {
        props: {
          user: session.user,
        },
      };
    } catch (err) {
      if (redirectTo) {
        return {
          redirect: {
            permanent: false,
            destination: redirectTo,
          },
        };
      } else {
        return {
          props: {},
        };
      }
    }
  }, sessionOptions
  );