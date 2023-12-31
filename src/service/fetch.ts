type pokeInfo = {
  name: string,
  id: string,
  type: string,
  img: string
}

export const fetchPoke = async (): Promise<Array<pokeInfo>> => {
    let data = []
    const limit = 151
    for (let i = 1; i <= limit; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const response = await res.json()
        const pokemon = {
          name: response?.name,
          id: response?.id,
          type: response?.types[0]?.type?.name,
          img: response?.sprites?.front_default,
        }
        data.push(pokemon)
    }
    return data
}