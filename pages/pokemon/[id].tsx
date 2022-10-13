import { Button, Card, Container, Grid, Text } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import { GetStaticProps, NextPage } from "next"
import { GetStaticPaths } from 'next'
import { pokeApi } from "../../api"

import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces"
import { capitalize } from '../../libs';

interface Props {
  pokemon: Pokemon
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={ capitalize(pokemon.name) } description={ pokemon.name }>
      <Grid.Container css={{
        marginTop: '5px'
      }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable>
            <Card.Body css={{
              p: 1,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
                width="100%" 
                height={200} 
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card isHoverable isPressable>
            <Card.Header css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Text h1 transform="capitalize">{ pokemon.name }</Text>
              <Button color='gradient' ghost>
                Save to favorites
              </Button>
            </Card.Header>
            <Card.Body css={{
              padding: '30px',
            }}>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex" gap={ 0 }>
                <Image 
                  src={ pokemon.sprites.front_default } 
                  width={150} 
                  height={150} 
                  alt={pokemon.name} 
                />
                <Image 
                  src={ pokemon.sprites.back_default } 
                  width={150} 
                  height={150} 
                  alt={pokemon.name} 
                />
                <Image 
                  src={ pokemon.sprites.front_shiny } 
                  width={150} 
                  height={150} 
                  alt={pokemon.name} 
                />
                <Image 
                  src={ pokemon.sprites.back_shiny } 
                  width={150} 
                  height={150} 
                  alt={pokemon.name} 
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [
    ...Array(151)].map((_, index) => {
      return {
        params: {
          id: (index + 1).toString()
        }
      }
    })
  
  return {
    paths: pokemon151,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)
  return {
    props: {
      pokemon: data
    }
  }
}


export default Pokemon