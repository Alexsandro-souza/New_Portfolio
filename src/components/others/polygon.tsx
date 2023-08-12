import styled from 'styled-components';

const Svg = styled.svg`
    position: absolute;
    right: 42.3%;
    top: 0;
    width: 17rem;
    height: 100vh;
    border: none;
    color: white;

  

    @media(max-width: 1420px){
        right: 41%;
        
    }

    @media(max-width: 1320px){
        right: 38.8%;
        
    }

    @media(max-width: 1245px){
        right: 36.5%;
        
    }
    @media(max-width: 1169px){
        right: 34.5%;
        
    }

    @media(max-width: 1106px){
        right: 32.5%;
        
    }
    @media(max-width: 1046px){
        right: 30.5%;
        
    }
    @media(max-width: 992px){
        right: 28.5%;
        
    }
    @media(max-width: 980px){
        display: none;
    }
    
`;

const Polygon = ()=>{

    return(
        <Svg fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,0 100,0 50,100 0,100"></polygon></Svg>
    )
}
export default Polygon;

// class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" 