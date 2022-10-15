import { FC } from "react"

import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
  id: number
}

export const FavoritePokemonCard: FC<Props> = ({ id }) => {
  const router = useRouter()
  return (
    <Grid key={id} xs={6} sm={3} md={2} lg={1} onClick={() => router.push(`/pokemon/${id}`)}>
      <Card isHoverable isPressable css={{
        padding: '1rem',
      }}>
        <Card.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
          alt='pokemon' 
          width='100%'
          height='140px'
          />
      </Card>
    </Grid>
  )
}
