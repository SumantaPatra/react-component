import { useRef, useState } from "react";
import { Input } from "./Input";

export default function Form(){
    // const [formState,setFormState] = useState("");
    // const [value] = useState();
     
    const ref = useRef(null);

    const handleClick=()=>{
        ref.current.focus()
    }
    
    return (
        <>
         <h1>Ex:How a child component can be conterolled by passig ref from parent using ForwardRef hook</h1>
         <Input ref={ref}/>
         <button type="button" onClick={handleClick}>
          focus
      </button>
        </>
    )


}