import styled from 'styled-components';
import Polygon from './polygon';
import ImgCode from '../assets/img/Coding.jpg';

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 45%;

    @media(max-width: 980px){
        position: relative;
        width: 100%;
        margin: 0 auto;
        height: 550px;
        background-color: rgb(2, 132, 199);
    }


`;

const Img = styled.div`
    background-image: url(${ImgCode});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    @media(max-width: 980px){
        padding:0;
        height: 95%;
        width: 95%;
        margin: 0 auto;
        border: 1.5px solid #FFC300;
        border-radius: 1%;
        background-position: center;        
        position: absolute;
        top: 3%;
        bottom: 1%;
        left: 0;
        right: 0;

    }
`;
    
    
  


const Background = ()=>{

    return(
        <>
        <Wrapper>
            <Img/>
        </Wrapper>
        <Polygon/>
       
        </>
    )
}
export default Background;