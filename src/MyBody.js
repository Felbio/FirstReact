import React from "react";

const MyBody = (props) => {
  return(
    <div>
    <h2>Meu componente {props.conteudo}</h2>
    <p>{props.conteudo2}</p>
    </div>
  )
}

export default MyBody;