import Hero from "@sections/hero";
import Head from "next/head";

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Önder Şahin - Anasayfa</title>
        <meta charSet="utf-8" />
         <title>Önder Şahin</title>
         <meta name="title" content='Önder Şahin' />
         <meta name="description" content='Önder Şahin - Portfolyo & Blog' />
         <meta name="keywords" content='reactjs, önder, önder şahin, js,'/>
         <meta property="og:title" content='Önder Şahin' />
         <meta property="og:description" content='Önder Şahin - Portfolyo & Blog'/>
         <meta property="og:url" content='ondersahin.com.tr' />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  )
}