import React from "react";
import styled from 'styled-components';
import Header from './components/Header/Header';
import Call from './components/Call';
import Background from "./components/ImgBackground";
import Skill from './components/Skills';
import Projects from './components/Project';
import Certificate from './components/Certificates';
import Form from './components/Form';
import Navigate from "./components/Header/Nav";

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
`;


const Blockquote = styled.blockquote`
  margin: 20px 0 20px 0;
  text-align: center;
  font-family: 'Roboto', serif;
`
const Div = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    align-items: center;
    
    

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
        <Skill/>       
        <Projects/>
        <Certificate/>
        <Form/>
      </main>
      <Div>
        <Navigate/>           
      </Div>
      
      <Blockquote>© 2023 Alexsandro Souza Dev. Todos os direitos reservados.</Blockquote>  
      
      



    </ContainerMain>
    </>
  )
}
export default App;