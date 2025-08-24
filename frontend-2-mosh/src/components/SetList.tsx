import { useState } from "react"



const SetList = () => {
    const [fruits,setFruits]=useState<string[]>([]);
    const [str,setStr]=useState<string>("")
    const [ind,setInd] =useState<number | null> (null);
    const [val,setVal] = useState<string>("");

    const addItem = () =>{
        if(str.trim()==="") return;
        setFruits([...fruits,str]);
        setStr('')
    }

    const handleDelete =(idx:number)=>{
        console.log("Delete Clicked...")
        setFruits(fruits.filter((_,i)=> i!==idx))

    }

    const upadateItem=(idx:number)=>{
        setInd(idx);
        setVal(fruits[idx]);
    }

    const handleSave=()=>{
        if(ind=== null) return;

        const updated=[...fruits];
        updated[ind]=val.trim();
        setFruits(updated);
        setInd(null);
        setVal('')
    }
    const handleCancel=()=>{
        setInd(null);
        setVal("")
    }
  return (
    <>
    <h3>Fruits list</h3>

    <ul>
        {fruits.map((fruit,idx)=>(
            <li key={idx}>

            {ind === idx ? (
                <>
                <input type="text" value={val} onChange={(e)=>(setVal(e.target.value))}/>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
                </>
            ):(
                <>
                {fruit}
                <button onClick={()=>{upadateItem(idx)}}>Edit</button>
                </>
            )
            }
            <button onClick={()=>{handleDelete(idx)}}>Delete</button>
            </li>)
        
        )}
    </ul>
     <input value={str} onChange={(e)=>(setStr(e.target.value))}/>
     <button onClick={addItem}>Add item</button>
     
    </>
  )
}

export default SetList