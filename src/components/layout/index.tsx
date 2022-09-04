import Head from "next/head"
import Header from "@sections/header"
import Footer from "@sections/footer"

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Önder Şahin</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="min-h-screen flex flex-col  max-w-3xl mx-auto px-4;">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout