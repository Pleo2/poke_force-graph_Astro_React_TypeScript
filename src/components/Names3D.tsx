import { ForceGraph3D } from 'react-force-graph'
import SpriteText from 'three-spritetext'

import BubbleTitle from './BubbleTitle'

export default function Names3D({ data }): JSX.Element {
	return (
		<>
			<section className="ml-0 mr-4 grid">
				<BubbleTitle> 3D Names </BubbleTitle>
				<div>
					<ForceGraph3D
						graphData={data}
						width={window.innerWidth * 0.4855}
						height={window.innerHeight * 0.458}
						backgroundColor='rgb(209 213 219)'
						linkCurvature={1}
						linkWidth={5}
						nodeThreeObject={(node) => {
							const sprite = new SpriteText(node.name)
							sprite.backgroundColor = node.typeColor
							sprite.color = 'white'
							sprite.textHeight = 10
							return sprite
						}}
						
					/>
				</div>
			</section>
		</>
	)
}
