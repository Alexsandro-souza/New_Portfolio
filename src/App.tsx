import React from "react";
import styled from 'styled-components';
import Header from './components/Header';
import Call from './components/Call';
import Background from "./components/ImgBackground";
import Skill from './components/Skills';

// type Props={
//   children: ReactNode,
// }
const ContainerMain = styled.div`
  width: auto;
  
`
const Centralizer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;


  @media(max-width: 980px){
      min-height: 80vh;
    }
`

const CentralizerBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`



const App : React.FC = ()=>{


  return(
    <>
    <ContainerMain>    
      <header>
        <Centralizer>        
          <Header/>
          <Call/>    
        </Centralizer>
      </header>   
      <Background/>
      <main>
        <CentralizerBody>
          <Skill/>
        </CentralizerBody>
      </main>

      



    </ContainerMain>
    </>
  )
}
export default App;