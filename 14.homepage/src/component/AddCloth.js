import { useState } from "react"

const AddCloth = ({addCloth}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    
    return(
        <>
            <input onChange={(e)=>{
                setTitle(e.target.value);
            }}></input>

            <input onChange={(e)=>{
                setPrice(e.target.value);
            }}></input>

            <button onClick={()=>{
                addCloth(title, price)
            }}>추가</button>    

        </>
    )
}

export default AddCloth