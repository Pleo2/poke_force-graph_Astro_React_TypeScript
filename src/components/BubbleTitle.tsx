type ChildrenBubbleTitle = {
    children: string | JSX.Element | JSX.Element[]
}


export default function BubbleTitle ({children}: ChildrenBubbleTitle):JSX.Element {
    return <>
        <div className="bg-gray-500 w-1/2 p-2 h-max rounded-l-md rounded-tl-none justify-self-end">
            {children}
        </div>
    </>
}