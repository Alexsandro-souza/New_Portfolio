import React from "react";
import styled from 'styled-components';
import Header from './components/Header';
import Call from './components/Call';
import Background from "./components/ImgBackground";

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



const App : React.FC = ()=>{


  return(
    <>
    <ContainerMain>    
      <Centralizer>        
        <Header/>
        <Call/>       
      </Centralizer>
      <Background/>
      <main>
      
      </main>

      



    </ContainerMain>
    </>
  )
}
export default App;