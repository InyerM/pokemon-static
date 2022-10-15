import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { FC } from "react"
import { Pokemon, Sprites } from "../../interfaces"

interface Props {
  pokemon: Pokemon
  isInFavorites: boolean
  toggleFavorite: () => void
}

const sprites = [
  'front_default',
  'front_shiny',
  'back_default',
  'back_shiny',
]

export const PokemonSingleCard: FC<Props> = ({ pokemon, isInFavorites, toggleFavorite }) => {
  return (
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
            <Button color='gradient' ghost={!isInFavorites} onPress={toggleFavorite}>
              { isInFavorites ? 'Remove from favorites' : 'Add to favorites' }
            </Button>
          </Card.Header>
          <Card.Body css={{
            padding: '30px',
          }}>
            <div>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex" gap={ 0 }>
                { 
                  sprites.map((sprite, index) => (
                    <Image
                      key={ index }
                      src={ pokemon.sprites[ sprite as keyof Sprites ] as string || '/no-image.png' }
                      width={ 100 }
                      height={ 100 }
                      alt={ pokemon.name }
                    />
                  ))
                }
              </Container>
            </div>
            <div>
              <Text size={30}>Abilities</Text>
              <Container direction="row" display="flex" gap={ 0 }>
                {
                  pokemon.abilities.map((ability, index) => (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                    }} key={ index }>
                      <Text transform="capitalize">{ ability.ability.name }</Text>
                    </div>
                  ))
                }
              </Container>
            </div>
            <div>
              <Text size={30}>Stats</Text>
              <Container direction="row" display="flex" gap={ 0 }>
                {
                  pokemon.stats.map((stat, index) => (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '10px',
                    }} key={ index }>
                      <Text transform="capitalize">{ stat.stat.name }</Text>
                      <Text>{ stat.base_stat }</Text>
                    </div>
                  ))
                }
              </Container>
            </div>
          </Card.Body>
        </Card>
      </Grid>

    </Grid.Container>
  )
}
