import styled from 'styled-components';
import './ProjectCss.css'
import github from '../../../public/github.svg';
import Deploy from '../../../public/Deploy.svg';
import Version from '../../../public/Version.svg';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { ProjectsSlider, ImgSlider } from './Date';



const Projects = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 15%;
    max-width: 100%;
    background-color: rgb(2, 132, 199);
    height: 520px;
    

`
const Container = styled.div`
    display: flex;
    position: relative;
    max-width: 1000px;
    align-self: center;
    padding: 0 2%;
    margin-top: 15px;
`;
    

const ImgProject = styled.div`
    height: 180px;
    max-width: 95%;
    padding: 10px;
    border-radius: 3%;
    margin: 10px auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  
    
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
    margin-top: 15px;
    margin-bottom: 10px;

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
    margin: 20px 5px 30px 5px;
    gap: 5%;
    justify-content: center;
`;

const Links = styled.a`
    text-decoration: none;
`;

const Select = styled.p`
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

        if(window.innerWidth <= 539){
            setSlides(1)
        }
    
        
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
                                <ImgProject style={{ backgroundImage: `url(${ImgSlider[index]})`}}/>
                                <TitleProject>{item.Title}</TitleProject>
                                <TextProject>{item.Text}</TextProject>
                                <WrapperLinks>
                                    <Links href={item.Github} target='blanck'>
                                        <img style={{width: '20px', height: '20px',display:'block', margin:'0 auto'}} src={github} alt='logo do github'/>
                                        <p style={{color:'black'}}>GitHub</p>
                                    </Links>
                                    <Links href={item.Deploy} target='blanck'>
                                        <img style={{width: '20px', height: '20px',display:'block', margin:'0 auto'}} src={Deploy} alt='imagem de computador'/>
                                        <p style={{color:'black'}}>Deploy</p>
                                    </Links>
                                    <Select>
                                        <img style={{width: '20px', height: '20px',display:'block', margin:'0 auto'}} src={Version} alt='ícone de atualização'/>
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