import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

type Props = {
  children: React.ReactNode
  title?: string
  description?: string
}

export const Layout: FC<Props> = ({ children, title, description}) => {
  return (
    <>
      <Head>
        <title>{ title || "Pokemon App" }</title>
        <meta name="author" content="InyerM" />
        <meta name="description" content={ description || "Pokemon description"} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
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