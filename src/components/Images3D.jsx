import { ForceGraph3D } from 'react-force-graph'
import { TextureLoader, SRGBColorSpace, SpriteMaterial, Sprite } from 'three'
import BubbleTitle from './BubbleTitle'

export default function Images3D({ data }) {
	return (
		<>
			<section className="row-span-2 grid">
				<BubbleTitle>3D Images</BubbleTitle>
				<div>
						<ForceGraph3D
							backgroundColor="rgb(209 213 219)"
							linkWidth={2}
							nodeAutoColorBy="type"
							linkOpacity={1}
							linkCurvature={0.2}
							nodeOpacity={1}
							width={parent.innerWidth * 0.49}
							height={parent.innerHeight * 0.95}
							graphData={data}
							nodeThreeObject={(node) => {
								const imgTexture = new TextureLoader().load(`${node.img}`)
								imgTexture.colorSpace = SRGBColorSpace
								const material = new SpriteMaterial({ map: imgTexture })
								const sprite = new Sprite(material)
								sprite.scale.set(60, 60, 60)
								return sprite
							}}
						/>
				</div>
			</section>
		</>
	)
}
