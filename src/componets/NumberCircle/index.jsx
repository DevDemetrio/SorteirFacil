import { NumberContainer, NumberSort } from "./styled"
import React from 'react'

const NumberCircle = ({drawNumber}) =>{


  return(
    <NumberContainer>
      <NumberSort>
          {drawNumber}
      </NumberSort>

    </NumberContainer>
  )
}


export default NumberCircle