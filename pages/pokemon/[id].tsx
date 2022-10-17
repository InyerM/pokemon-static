import { useState } from "react"

import { GetStaticProps, NextPage } from "next"
import { GetStaticPaths } from 'next'

import confetti from "canvas-confetti"

import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces"
import { capitalize } from '../../libs';
import { getPokemonInfo, localFavorites } from "../../utils"
import { PokemonSingleCard } from "../../components/pokemon"

interface Props {
  pokemon: Pokemon
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
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
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await getPokemonInfo(id)

  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400
  }
}


export default Pokemon