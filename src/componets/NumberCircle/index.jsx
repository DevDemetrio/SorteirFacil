import { NumberContainer, NumberSort } from "./styled"
import React from 'react'

const NumberCircle = () =>{

  const [NumberRandom, setNumberRandom] = React.useState(0);

const teste= () =>{
 
    {setNumberRandom(Math.floor(Math.random() * 100))}

}

  return(
    <NumberContainer>
      <NumberSort>
          {NumberRandom}
      </NumberSort>

      <button onClick={teste}>Teste</button>
    </NumberContainer>
  )
}


export default NumberCircle