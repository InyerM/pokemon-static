import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
}

const origin = (typeof window !== 'undefined') ? window.location.origin : ''

export const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{ title || "Pokemon App" }</title>
        <meta name="author" content="InyerM" />
        <meta name="description" content={ description || "Pokemon description"} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${ title }`} />
        <meta property="og:description" content={`This is the page about ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{
        padding: "0 20px",
      }}>
        { children }
      </main>
    </>
  )
}