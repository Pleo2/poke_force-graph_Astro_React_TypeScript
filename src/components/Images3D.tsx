import '../styles/pokeLoading.css'
import { ForceGraph3D } from 'react-force-graph'
import * as THREE from 'three'
import BubbleTitle from './BubbleTitle'
import useGetData from '../hooks/useGetData'

export default function Images3D({data}): JSX.Element {
	const { loadDate, loading } = useGetData({ data })
	return (
		<>
			<section className="flex rounded-lg flex-col relative bg-[#e83e35] w-1/2 h-full">
				<div className="w-full h-max flex justify-end absolute top-0 right-0 z-10">
					<BubbleTitle>3D Images</BubbleTitle>
				</div>
				<div className='bg-[#e83e35] w-full max-h-full flex items-center justify-center mt-1'>
					{loading && <h1>Loading...</h1>}
					{loadDate && (
						<ForceGraph3D
							graphData={loadDate}
							backgroundColor="#e83e35"
							linkWidth={4}
							width={parent.innerWidth * 0.456}
							height={parent.innerHeight * 0.925}
							nodeThreeObject={({ img }) => {
								const imgTexture = new THREE.TextureLoader().load(`${img}`)
								imgTexture.colorSpace = THREE.SRGBColorSpace
								const material = new THREE.SpriteMaterial({ map: imgTexture })
								const sprite = new THREE.Sprite(material)
								sprite.scale.set(50, 50, 50)
								return sprite
							}}
						/>
					)}
				</div>
			</section>
		</>
	)
}
