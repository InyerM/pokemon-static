import { useState } from "react"

import { GetStaticProps, NextPage } from "next"
import { GetStaticPaths } from 'next'

import confetti from "canvas-confetti"

import { pokeApi } from "../../api"
import { Layout } from "../../components/layouts"
import { Pokemon, PokemonList } from "../../interfaces"
import { capitalize } from '../../libs';
import { localFavorites } from "../../utils"
import { PokemonSingleCard } from "../../components/pokemon"
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(localFavorites.existInFavorites(pokemon.id))

  const toggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (!isInFavorites) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 }
      })
    }
  }

  return (
    <Layout title={ capitalize(pokemon.name) } description={ pokemon.name }>
      <PokemonSingleCard pokemon={ pokemon } isInFavorites={ isInFavorites } toggleFavorite={ toggleFavorite } />
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const { results } = data

  const pokemon151 = results.map((pokemon) => {
    return {
      params: {
        name: pokemon.name
      }
    }
  })

  return {
    paths: pokemon151,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const pokemon = await getPokemonInfo(name)
  return {
    props: {
      pokemon,
    }
  }
}


export default PokemonByName