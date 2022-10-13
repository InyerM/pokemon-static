import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'

import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'
import { PokemonList, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Home" description="This is the home page">
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151') 
  const pokemons: SmallPokemon[] = data.results.map(pokemon => {
    const id = parseInt(pokemon.url.split('/')[6])
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return {
      ...pokemon,
      id,
      img
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default Home