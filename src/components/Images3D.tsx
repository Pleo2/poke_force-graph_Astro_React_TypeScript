import { ForceGraph3D } from 'react-force-graph'
import * as THREE from 'three'
import BubbleTitle from './BubbleTitle'
import useGetData from '../hooks/useGetData'

export default function Images3D({ data }): JSX.Element {
	const { loadDate, loading } = useGetData({ data })
	return (
		<>
			<section className="">
				<BubbleTitle>3D Images</BubbleTitle>
				<div>
					{loading && <h1>Loading...</h1>}
					{loadDate && (
						<ForceGraph3D
							graphData={loadDate}
							backgroundColor="rgb(209 213 219)"
							width={window.innerWidth * 0.495}
							height={window.innerHeight * 0.95}
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
