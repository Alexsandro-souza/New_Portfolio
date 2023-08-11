import React, { lazy, Suspense} from "react";
import styled from "styled-components";
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

  @media (max-width: 980px) {
    min-height: 80vh;
  }

  @media (max-width: 980px) {
    min-height: 95vh;
  }
`;

const Blockquote = styled.blockquote`
  margin: 20px 0 20px 0;
  text-align: center;
  font-family: "Roboto", serif;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  align-items: center;
`;

const Loading  = styled.p`
  display: block;
  height: 100vh;
  font-size: 2.5rem;
  color: #00B894;
  margin: auto auto;


`

const App: React.FC = () => {


  return (
    <>
      <ContainerMain>
        <Suspense fallback={<Loading>Loading ...</Loading>}>
          <header>
            <Centralizer>
              <Header />
              <Call/>
            </Centralizer>
          </header>
          <Background />
          <main>
            <Skill />
            <Projects />
            <Certificate />
            <Form/>
          </main>
          <Div>
            <Navigate />
          </Div>
        </Suspense>
        <Blockquote>
          © 2023 Alexsandro Souza Dev. Todos os direitos reservados.
        </Blockquote>
      </ContainerMain>
    </>
  );
};

export default App;
