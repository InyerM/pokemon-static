/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = (id: number): number[] => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(favorite => favorite !== id)
  }
  else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))

  return favorites
}

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)
}

const pokemons = (): number[] => {
  if (typeof window === 'undefined') return []
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites
}

export default {
  toggleFavorite,
  existInFavorites,
  pokemons
}