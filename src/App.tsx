import React from "react";
import styled from 'styled-components';
import Header from './components/Header';

const Container = styled.div`
  background-color: black;
  width: 100%;

`
const App : React.FC = ()=>{


  return(
    <>
    <Container>
      <Header/>



    </Container>
    </>
  )
}
export default App;