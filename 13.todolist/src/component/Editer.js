import { useRef, useState } from 'react';
import './Editer.css';

const Editer = ({onCreate}) =>{
    const [title, setTitle] = useState('');
    const contentRef= useRef();
    return(
        <>
            <br></br>
            <div className="add-bar"> 
            <input value={title} ref={contentRef} className="add" onChange={(e)=>{
                let copy = e.target.value;
                
                setTitle(copy);
            }} placeholder="새로운 Todo..."></input>&emsp;<button onClick={()=>{
                if(title===''|| title==null){
                    contentRef.current.focus();
                    return;
                }
                onCreate(title);
                setTitle('');
            }}>추가</button>
            </div>
            <br></br>
            <hr></hr>
        </>
    )
}
export default Editer;