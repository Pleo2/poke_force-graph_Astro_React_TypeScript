import { ForceGraph2D } from 'react-force-graph'
import BubbleTitle from './BubbleTitle'

export default function Names2D({data}): JSX.Element {
		return (
		<>
			<section className="mr-4 mb-4 ml-0 flex flex-col bg-blue-400 Names3D relative">
					<div className='w-full h-max flex justify-end absolute top-0 right-0 z-10'>
						<BubbleTitle>2D Name</BubbleTitle>
					</div>
					<div className='w-full max-h-full flex items-center justify-center'>
						<ForceGraph2D
						graphData={data}
						nodeAutoColorBy="type"
						backgroundColor='rgb(209 213 219)'
						width={window.innerWidth * 0.465}
						minZoom={0.1}
						height={610}
						nodeCanvasObject={(node, ctx, globalScale) => {
							const label = node.name
							const fontSize = 10 / globalScale
							ctx.font = `${fontSize}px Sans-Serif`
							const textWidth = ctx.measureText(label).width
							const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.8) // some padding
							ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
							ctx.fillRect(
								node.x - bckgDimensions[0] / 2,
								node.y - bckgDimensions[1] / 2,
								...bckgDimensions
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
									...bckgDimensions
								)
						}}
					/>
				</div>
			</section>
		</>
	)
}
