import Names2D from "./Names2D"
import Names3D from "./Names3D"
import Images3D from './Images3D'
import useGetPoke from "../hooks/useGetpoke"
import { genRandomTree } from "../utils/GenRandomTree"


export default function MainSection ():JSX.Element {
    const { poke, loading, error} = useGetPoke()
    const data = loading ? undefined : genRandomTree({reverse: false, poke})
    return <>
        <main
			id="main-section"
			className="bg-gray-500 w-full h-full rounded-md grid grid-cols-2 grid-row-2 p-4 [&>section]:bg-gray-300
			[&>section]:rounded-md"
		>
			{/* ! No Change The order of the components --> */}
            {loading && <h2>loading...</h2>}
            {error && <h2>error</h2>}
            {data?.nodes.length > 1 && (<>
			    <Names2D data={data}/>
			    <Images3D data={data} />
                <Names3D data={data}/>
            </>)}
		</main>
    
    </>
}