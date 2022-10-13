import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {

  const { theme } = useTheme()
  const router = useRouter()

  return (
    <nav style={{
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      padding: "0 20px",
      backgroundColor: theme?.colors.gray50.value,
    }}>
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" width={ 50 } height={ 50 } alt="icon app"/>
      <Link href='/'>
        <a style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          marginLeft: 10,
          cursor: "pointer",
        }}>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </a>
      </Link>
      <Spacer css={{
        flex: 1,
      }}/>
      <Link href='/favorites'>
        <Text color="white" css={{
          cursor: "pointer",
        }}>Favorites</Text>
      </Link>
    </nav>
  )
}
