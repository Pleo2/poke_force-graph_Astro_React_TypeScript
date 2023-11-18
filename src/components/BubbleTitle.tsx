type ChildrenBubbleTitle = {
	children: string
}

export default function BubbleTitle({ children }: ChildrenBubbleTitle): JSX.Element {
	return (
		<>
			<a
				href={children}
				className="bg-gray-500 w-1/2 p-2 h-max rounded-l-md rounded-tl-none justify-self-end hover:w-full hover:cursor-pointer transition-all hover:rounded-none "
			>
				{children}
			</a>
		</>
	)
}
