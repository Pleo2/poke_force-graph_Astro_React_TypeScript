// components and hooks
import Names2D from './Names2D'
import Images3D from './Images3D'
import ProgressCount from './ProgressCount'
import useGetPoke from '../hooks/useGetpoke'
// -- utils
import { genRandomTree } from '../utils/GenRandomTree'
// -- styles
import '../styles/pokeLoading.css'

export default function MainSection(): JSX.Element {
	const { poke, loading, error } = useGetPoke()
	const data = genRandomTree({ reverse: false, poke })
	return (
		<>
			{loading && (
				<>
					<div className="ball"></div>
					<div className='absolute bottom-96'>
						<ProgressCount />
					</div>
				</>
			)}
			{data && !loading && (
				<main
					id="main-section"
					className=" bg-black w-full h-[95%] rounded-md flex p-4						[&>section]:rounded-md"
				>
					{/* ! No Change The order of the components --> */}

					<>
						<Names2D data={data} key={'Names-2D'} />
						<Images3D data={data} key={'Images-3D'} />
					</>
				</main>
			)}
			{error && <h1>Error...</h1>}
		</>
	)
}
