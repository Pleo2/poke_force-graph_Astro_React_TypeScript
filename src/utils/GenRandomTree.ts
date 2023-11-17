import { typesPokemonWithColor } from './mocks/typesPokemonWithColor'
import { type RandomTreeType } from '../types/RamdomTreeType'
export function genRandomTree({
	reverse = false,
	poke
}: {
	reverse: boolean
	poke: {
		name: string
		id: string
		type: string
		img: string
	}[]
}): RandomTreeType {
	const N = poke?.length
	return {
		nodes: poke?.slice(0, N).map(({ name, type, img }, index) => ({
			id: index,
			name,
			type,
			typeColor: typesPokemonWithColor?.[type],
			img,
			group: type
		})),
		links: [...Array(N).keys()]
			.filter((id) => id)
			.map((id) => ({
				[reverse ? 'target' : 'source']: id,
				[reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1))
			}))
	}
}
