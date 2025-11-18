import { useState } from "react"

const Cloth = ({clo, i, goDetail}) => {
    
    return(
        <div className="cloth-card">
            {/* <img src={`"../public/img/cloth${i}.png"`}></img> */}
            <img src={`${process.env.PUBLIC_URL}/img/cloth${clo.id}.jpg`} className="cloth-img" onClick={()=>{
                goDetail(clo.id)
            }}></img>
            <h4>{clo.title}</h4>
            <p>{clo.price}</p>
        </div>
    )
}

export default Cloth