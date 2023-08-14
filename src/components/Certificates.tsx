import styled from 'styled-components';
import danki from '../assets/img/Danki-Code.webp';
import {Webmaster, ReactCurso, JavaScriptCurso, TypeScript} from '../assets/img/index';


interface InterfaceProps{
    direction ?:number,
    imgCourse ?: string,
}

const CertificateSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
    
`;

const ContainerCertificate = styled.div<InterfaceProps>`
    position: relative;
    display: flex;
    flex-direction: ${({direction})=>direction?'row-reverse':'row'};
    max-width: 100%;
    height: auto;
    padding: 0 2%;


    @media(max-width: 780px){
        flex-direction: row !important;
    }
`;
const WrapperCertificate = styled.div`
    position: relative;
    margin: 15px 0;
    width: 45%;
    height: 303px;
    border-radius: 2%;
   

    @media(max-width: 780px){
        width: 85%;
    }
    
`;

const WrapperImgCourse = styled.div<InterfaceProps>`
    width: 100%;
    height: 250px;
    margin: 1% auto 0 auto;
    background-image: url(${({imgCourse}) =>imgCourse});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`
const VerticalLine = styled.div`
    position: absolute;
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;

    @media (min-width: 210px) and (max-width: 780px){
       left: 93%;
    }
`;

const ImgCertificate = styled.div<{img?:string}>`
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    height: 50px;
    width: 53px;
    border-radius: 50%;
    background-image: url(${props=>props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 780px){
        height: 40px;
        width: 43px;
    }

    @media(max-width: 330px){
        height: 35px;
        width: 38px;
    }
    
`;
const TitleSingle = styled.h2`
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Carlito', serif;
    font-weight: 450;
    color: #00B894;
    margin: 30px;
`;

const WrapperText = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
    padding: 2%;
    display: flex;
    width: 80%;
    border-top: 2px solid;
    
`;

const TitleCourse = styled.h3`
    font-family: 'Carlito', serif;
    margin: 0 auto;
`;


const Certificate : React.FC = ()=>{


    return(
        <>
        <CertificateSection id='Certificates'>
            <TitleSingle>Cursos e Certificados</TitleSingle>
            <ContainerCertificate>            
                <WrapperCertificate>
                    <WrapperImgCourse imgCourse={Webmaster}/>
                    <WrapperText>
                        <TitleCourse>Curso WebMaster Front-End completo</TitleCourse>
                    </WrapperText>
                </WrapperCertificate>
                <VerticalLine>
                        <ImgCertificate img={danki}/>
                </VerticalLine>               
            </ContainerCertificate>

            <ContainerCertificate direction={1}>
                <WrapperCertificate>
                    <WrapperImgCourse imgCourse={JavaScriptCurso}/>
                    <WrapperText>
                        <TitleCourse>JavaScript Completo</TitleCourse>    
                    </WrapperText>                   
                </WrapperCertificate>
                <VerticalLine>
                    <ImgCertificate img={danki}/>
                </VerticalLine>               
            </ContainerCertificate>

            <ContainerCertificate>            
                <WrapperCertificate>
                    <WrapperImgCourse imgCourse={ReactCurso}/>
                    <WrapperText>
                        <TitleCourse>ReactJs</TitleCourse>
                    </WrapperText>
                </WrapperCertificate>
                <VerticalLine>
                        <ImgCertificate img={danki}/>
                </VerticalLine>               
            </ContainerCertificate>

            <ContainerCertificate direction={1}>
                <WrapperCertificate>
                    <WrapperImgCourse imgCourse={TypeScript}/>
                    <WrapperText>
                        <TitleCourse>TypeScript</TitleCourse>    
                    </WrapperText>                   
                </WrapperCertificate>
                <VerticalLine>
                    <ImgCertificate img={danki}/>
                </VerticalLine>               
            </ContainerCertificate>
        

           

        </CertificateSection>
        </>
    )
}

export default Certificate;