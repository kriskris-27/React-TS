interface ChildProps{
    Incre:()=> void
}

const Child = ({Incre}:ChildProps) => {
  return (
    <>
    <button onClick={Incre}>Increment</button>
    </>
  )
}

export default Child