import { useRef, type FormEvent } from "react"

const FormsL = () => {

    const nameRef=useRef<HTMLInputElement>(null)
    const ageRef=useRef<HTMLInputElement>(null)

    const handleSubmit =(event:FormEvent)=>{
        event.preventDefault()
        if(nameRef.current && nameRef.current.value !== null ){
        console.log(nameRef.current.value);
        }
        if(ageRef.current && ageRef.current.value !== null ){
        console.log(ageRef.current.value);
        }


        
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age:</label>
                <input ref={ageRef} id="age" type="number" className="form-control" />
            </div>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    
    </>
  )
}

export default FormsL