import styled from 'styled-components';


const CertificateSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
`;

const ContainerCertificate = styled.div<{direction?:number}>`
    position: relative;
    display: flex;
    flex-direction: ${props=>props.direction?'row-reverse':'row'};
    max-width: 100%;
    height: auto;
`;
const WrapperCertificate = styled.div`
    position: relative;
    margin: 15px 0;
    width: 45%;
    height: 303px;
    border: 2px solid #FFC300;
    border-radius: 2%;
    
`;
const VerticalLine = styled.div`
    position: absolute;
    height: 100%;
    width: 4px;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
`;

const ImgCertificate = styled.div`
    border: 3px solid #181616;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    height: 45px;
    width: 45px;
    border-radius: 50%;
    
`;
const TitleSingle = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Playfair Display',serif;
    font-weight: 450;
    color: #00B894;
    margin-bottom: 30px;
`;

const WrapperText = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
    padding: 2%;
    display: flex;
    width: 40%;
    border-top: 2px solid;
    gap: 15px;
`;

const TitleCourse = styled.h3``;

const TexteCourse = styled.p``;

const Certificate : React.FC = ()=>{


    return(
        <>
        <CertificateSection>
            <TitleSingle>Cursos e Certificados</TitleSingle>
            <ContainerCertificate>            
                <WrapperCertificate>
                    <WrapperText>
                        <TitleCourse>Curso exemlo</TitleCourse>
                        <TexteCourse>exemplo</TexteCourse>
                    </WrapperText>
                </WrapperCertificate>
                <VerticalLine>
                        <ImgCertificate>
                        </ImgCertificate>
                </VerticalLine>               
            </ContainerCertificate>

            <ContainerCertificate direction={1}>
                <WrapperCertificate>
                    <WrapperText>
                        <TitleCourse>Curso exemlo</TitleCourse>
                        <TexteCourse>exemplo</TexteCourse>
                    </WrapperText>                   
                </WrapperCertificate>
                <VerticalLine>
                        <ImgCertificate>
                        </ImgCertificate>
                </VerticalLine>               
            </ContainerCertificate>

        

           

        </CertificateSection>
        </>
    )
}

export default Certificate;