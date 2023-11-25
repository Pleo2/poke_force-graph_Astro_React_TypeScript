import { ForceGraph2D } from 'react-force-graph'
import BubbleTitle from './BubbleTitle'
import type { GraphProps } from '../types/GraphProps'

export default function Names2D({data}:GraphProps): JSX.Element {
		return (
		<>
			<section className="mr-4 ml-0 flex flex-col bg-white Names3D relative">
					<div className='w-full h-max flex justify-end absolute top-0 right-0 z-10'>
						<BubbleTitle>2D Name</BubbleTitle>
					</div>
					<div className='w-full max-h-full flex items-center justify-center mt-1'>
						<ForceGraph2D
						graphData={data}
						nodeAutoColorBy="type"
						backgroundColor='rgb(255 255 255)'
						width={parent.innerWidth * 0.456}
						height={parent.innerHeight * 0.925 * 0.98}
						nodeCanvasObject={(node, ctx, globalScale) => {
							const label = node.name
							const fontSize = 12/ globalScale
							ctx.font = `${fontSize}px Sans-Serif`
							const textWidth = ctx.measureText(label).width
							const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.4) // some padding
							ctx.fillStyle = '#fff'
							ctx.fillRect(
								node.x - bckgDimensions[0] / 2,
								node.y - bckgDimensions[1] / 2,
								bckgDimensions[0],
								bckgDimensions[1]
							)

							ctx.textAlign = 'center'
							ctx.textBaseline = 'middle'
							ctx.fillStyle = node.typeColor
							ctx.fillText(label, node.x, node.y)

							node.__bckgDimensions = bckgDimensions // to re-use in nodePointerAreaPaint
						}}
						nodePointerAreaPaint={(node, color, ctx) => {
							ctx.fillStyle = color
							const bckgDimensions = node.__bckgDimensions
							bckgDimensions &&
								ctx.fillRect(
									node.x - bckgDimensions[0] / 2,
									node.y - bckgDimensions[1] / 2,
									bckgDimensions[0],
									bckgDimensions[1]
								)
						}}
					/>
				</div>
			</section>
		</>
	)
}
