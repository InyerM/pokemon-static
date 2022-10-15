
import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text h1 css={{
        textAlign: 'center',
      }}>There&apos;s no favorites
      </Text>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg' 
        width={200} 
        height={200} 
        alt='no favorites'
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  )
}
