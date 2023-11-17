export type RandomTreeType = {
	nodes: {
		id: number
		name: string
		type: string
		typeColor: string
		img: string
		group: string
	}[]
	links: {
		[key: string]: number
	}[]
}
