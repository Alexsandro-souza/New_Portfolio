import React, { lazy, Suspense} from "react";
import styled, { keyframes } from "styled-components";
import About from "./components/About";
const Header = lazy(()=>import("./components/Header/Header")) ;
const Call = lazy(()=>import("./components/Header/Call")) ;
const Background = lazy(()=>import("./components/Header/ImgBackground")) ;
const Skill = lazy(()=>import("./components/Skills")) ;
const Projects = lazy(()=>import("./components/Project/Project")) ;
const Certificate = lazy(()=>import("./components/Certificates")) ;
const Form = lazy(()=>import("./components/Form/Form")) ;
const Navigate = lazy(()=>import("./components/Header/Nav"))



const ContainerMain = styled.div`
  width: auto;
`;

const Centralizer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
  
  @media(max-width: 980px){
    min-height: auto;
  }

`;

const Blockquote = styled.blockquote`
  margin: 20px 0 20px 0;
  text-align: center;
  font-family: 'Carlito', serif;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const fadeEffect = keyframes `
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 200px;
  margin: 0 auto;
  font-size: 2rem;
  color: #00B894;
  animation: ${fadeEffect} 2s infinite;
`;

const App: React.FC = () => {


  return (
    <>      
      <ContainerMain>
        
          <header>
            <Centralizer>
              <Header />
              <Call/>
            </Centralizer>
          </header>
        <Suspense fallback={<Loading>Loading ...</Loading>}>
          <Background />
        </Suspense>
          <main>
            <About/>
            <Skill />
            <Projects />
            <Certificate />
            <Form/>
          </main>
          <Div>
            <Navigate />
          </Div>
       
        <Blockquote>
          © 2023 Alexsandro Souza Dev. Todos os direitos reservados.
        </Blockquote>      
      </ContainerMain>
    </>
  );
};

export default App;
