
import DrawButton from "./componets/DrawButton";
import { Main } from "./componets/MainContainer/styled"
import NumberCircle from "./componets/NumberCircle"
import { Title } from "./componets/Title/styled"
import React from 'react'


function App() {
  const [numberRandom, setNumberRandom] = React.useState(0);
  const [drawNumber, setDrawNumber] = React.useState(false);
  
  
    React.useEffect(() =>{
      if(drawNumber){
        {setNumberRandom(Math.floor(Math.random() * 100))}
        setDrawNumber(false);
      }
    },[drawNumber])

  return (
    <>
      <Main>
        <Title>
          Sorteio fácil
        </Title>
        <NumberCircle drawNumber={numberRandom}/>
        <DrawButton onclick={() => setDrawNumber(true)}/>      
      </Main>
    </>
  )
}

export default App
