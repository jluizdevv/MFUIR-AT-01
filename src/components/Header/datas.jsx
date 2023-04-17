import React from "react"
import './index.css'

let Datas = (props) => {
    return(
    <div className="divData">
        <h2>{props.data}</h2>
        <p>{props.evento}</p>
      </div>
    )
}

export default Datas