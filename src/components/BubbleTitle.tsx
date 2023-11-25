type ChildrenBubbleTitle = {
	children: string
}

export default function BubbleTitle({ children }: ChildrenBubbleTitle): JSX.Element {
	return (
		<>
			<div
				className="bg-black text-gray-300 font-bold font-sans text-3xl w-1/2 p-2 h-max rounded-l-md rounded-tl-none justify-self-end"
			>
				{children}
			</div>
		</>
	)
}
