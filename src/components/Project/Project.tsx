import styled from 'styled-components';
import './ProjectCss.css'
import github from '../../../public/github.svg';
import Deploy from '../../../public/Deploy.svg';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { ProjectsSlider } from './Date';
// import Background from '../ImgBackground';

const Projects = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 15%;
    max-width: 100%;
    background-color: rgb(2, 132, 199);
    height: 500px;

`
const Container = styled.div`
    display: flex;
    position: relative;
    max-width: 1000px;
    gap: 2%;
    align-self: center;
    padding: 0 2%;
`;
    

const ImgProject = styled.div`
    height: 150px;
    max-width: 95%;
    padding: 10px;
    border-radius: 3%;
    margin: 10px auto;
  
    
`;

const TitleSingle = styled.h2`
    width: 100%;
    text-align: center;
    position: relative;
    top: -50px;
    font-size: 1.6rem;
    font-family: 'Playfair Display',serif;
    font-weight: 450;
    color: #00B894;
`;

const TitleProject = styled.h3`
    text-align: center;
    color: #00B894;
    font-style: italic;
    font-family: 'Roboto',serif;
    font-size: 1.2rem;
    margin-top: 10px;

`;

const TextProject = styled.p`
    font-family: 'Roboto',serif;
    word-wrap: break-word;
    max-width: 95%;
    margin: 0 auto;
    text-align: center;
`;

const WrapperLinks = styled.div`
    display: flex;
    margin: 20px 5px;
    gap: 5%;
    justify-content: center;
`;

const Links = styled.a`
    text-decoration: none;
`;

const Select = styled.p`
    margin-top: 10px;
`;
const Project : React.FC = ()=>{
    const[slides, setSlides] = useState(3);

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth <= 850 && window.innerWidth >= 540){
                setSlides(2)
            }else if(window.innerWidth <= 539){
                setSlides(1)
            }
        }
        

        window.addEventListener('resize', handleResize)
    }, [])

    return(
        <>
        <Projects >            
            <TitleSingle id='Projects'>Projetos</TitleSingle>
            <Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={slides}
                    pagination={{ clickable: true }}

                    navigation
                    spaceBetween={30}
    
                >
                    {ProjectsSlider.map((item, index)=>(

                        <SwiperSlide key={index} style={{backgroundColor: 'white', borderRadius:'3%', minHeight:'150px'}} >
                            
                                <ImgProject>
                                    {item.Image}
                                </ImgProject>
                                <TitleProject>{item.Title}</TitleProject>
                                <TextProject>{item.Text}</TextProject>
                                <WrapperLinks>
                                    <Links href={item.Github} target='blanck'>
                                        <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                                    </Links>
                                    <Links href={item.Deploy} target='blanck'>
                                        <img style={{width: '25px', height: '25px'}} src={Deploy} alt='imagem de computador'/>
                                    </Links>
                                    <Select>
                                        Versão 1.0
                                    </Select>                   
                                </WrapperLinks>
                        </SwiperSlide> 
                     ))} 
                </Swiper>
            </Container>
        </Projects>
        </>

    )
}
export default Project;