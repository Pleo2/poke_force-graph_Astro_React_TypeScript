import Names2D from './Names2D'
import Images3D from './Images3D'
import useGetPoke from '../hooks/useGetpoke'
import { genRandomTree } from '../utils/GenRandomTree'

export default function MainSection(): JSX.Element {
	const { poke, loading, error } = useGetPoke()
	const data = genRandomTree({ reverse: false, poke })
	return (
		<>
			<main
				id="main-section"
				className="bg-gray-500 w-full h-full rounded-md flex  p-4 [&>section]:bg-gray-300
			[&>section]:rounded-md"
			>
				{/* ! No Change The order of the components --> */}
				{loading && <h2>loading...</h2>}
				{error && <h2>error</h2>}
				{data && (
					<>
						<Names2D data={data} key={'Names-2D'} />
						<Images3D data={data} key={'Images-3D'}/>
					</>
				)}
			</main>
		</>
	)
}
