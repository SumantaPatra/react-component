import React from "react";


const Input = React.forwardRef((props,ref)=>{
       const {className} = props;
       console.log("props",props)
        return (
        <>
          <label>Enter value</label>
          <input className={`${className}`} ref={ref} type="text" {...props} />
        </>
    )
})
export {Input}