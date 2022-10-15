import { FC } from "react"

import { Grid } from "@nextui-org/react"
import { FavoritePokemonCard } from "./"

interface Props {
  pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <>
      <Grid.Container gap={2} justify='flex-start' direction='row'>
        {
          pokemons.map((id) => (
            <FavoritePokemonCard key={id} id={id} />
          ))
        }
      </Grid.Container>
    </>
  )
}
