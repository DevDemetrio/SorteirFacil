import { NumberContainer, NumberSort } from "./styled"
import React from 'react'

const NumberCircle = () =>{

  const [NumberRandom, setNumberRandom] = React.useState(0);
  const [drawNumber, setDrawNumber] = React.useState(false);


  React.useEffect(() =>{
    if(drawNumber){
      {setNumberRandom(Math.floor(Math.random() * 100))}
      setDrawNumber(false);
    }
  },[drawNumber])
  



  return(
    <NumberContainer>
      <NumberSort>
          {NumberRandom}
      </NumberSort>

      <button onClick={() => setDrawNumber(true)}>Teste</button>
    </NumberContainer>
  )
}


export default NumberCircle