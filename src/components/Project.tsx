import styled from 'styled-components';
import github from '../../public/github.svg';
import Deploy from '../../public/Deploy.svg';

const Projects = styled.section`
    max-width: 100%;
    margin-top: 15%;
    max-width: 100%;
    background-color: rgb(2, 132, 199);

`
const Container = styled.div`
    display: flex;
    max-width: 1000px;
    margin: 0 auto 40px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 2%;
`
const Wrapper = styled.div`
    margin-bottom: 5%;
    padding: 5px 5px 0 5px;
    border-radius: 3%;
    background-color: white;
`;
    

const ImgProject = styled.div`
    height: 150px;
    width: 200px;
    text-align: center;
    align-self: center;
    
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
    color: #FFC300;
    font-style: italic;
    font-family: 'Roboto',serif;
    font-size: 1.2rem;

`;

const TextProject = styled.p`
    font-family: 'Roboto',serif;
    word-wrap: break-word;
    max-width: 200px;
`;

const WrapperLinks = styled.div`
    display: flex;
    margin: 20px 5px;
    gap: 5%;
`;

const Links = styled.a`
    text-decoration: none;
`;

const Select = styled.p`
    margin-top: 10px;
`;
const Project : React.FC = ()=>{


    return(
        <>
        <Projects>            
            <TitleSingle>Projetos</TitleSingle>
            <Container>
                <Wrapper>
                    <ImgProject>
                        TesteImagem
                    </ImgProject>
                    <TitleProject>Portfólio</TitleProject>
                    <TextProject>shajihsaohsaosahosahoishasahsahiosaishisasiaohsaihsahsaiohsahsiahsahsasiahsasaisasahsa</TextProject>
                    <WrapperLinks>
                        <Links href='https://' target='blanck'>
                             <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                        </Links>
                        <Links href='https://' target='blanck'>
                            <img style={{width: '25px', height: '25px'}} src={Deploy} alt='imagem de computador'/>
                        </Links>
                        <Select>
                            Versão 1.0
                        </Select>                   
                    </WrapperLinks>
                </Wrapper>
                <Wrapper>
                    <ImgProject>
                    TesteImagem
                    </ImgProject>
                    <TitleProject>Gerenciador financeiro</TitleProject>
                    <TextProject>shajihsaohsaosahosahoishasahsahiosaishisasiaohsaihsahsaiohsahsiahsahsasiahsasaisasahsa</TextProject>
                    <WrapperLinks>
                        <Links href='https://' target='blanck'>
                             <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                        </Links>                    
                        <Links href='https://gerencie-suas-despesas.vercel.app/' target='blanck'>
                            <img style={{width: '25px', height: '25px'}} src={Deploy} alt='imagem de computador'/>
                        </Links>
                        <Select>
                            Versão 1.0
                        </Select> 
                    </WrapperLinks>
                </Wrapper>
                <Wrapper>
                    <ImgProject>
                    TesteImagem
                    </ImgProject>
                    <TitleProject>Rastreador correios</TitleProject>
                    <TextProject>shajihsaohsaosahosahoishasahsahiosaishisasiaohsaihsahsaiohsahsiahsahsasiahsasaisasahsa</TextProject>
                    <WrapperLinks>
                        <Links href='https://' target='blanck'>
                             <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                        </Links>
                        <Links href='https://rastreamento-correios-alexsandro-souza.vercel.app/' target='blanck'>
                            <img style={{width: '25px', height: '25px'}} src={Deploy} alt='imagem de computador'/>
                        </Links>
                        <Select>
                            Versão 1.0
                        </Select> 
                    </WrapperLinks>
                </Wrapper>
                <Wrapper>
                    <ImgProject>
                        teste
                    </ImgProject>
                    <TitleProject>Previsão do tempo</TitleProject>
                    <TextProject>shajihsaohsaosahosahoishasahsahiosaishisasiaohsaihsahsaiohsahsiahsahsasiahsasaisasahsa</TextProject>
                    <WrapperLinks>
                        <Links href='https://' target='blanck'>
                             <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                        </Links>
                        <Links href='https://previsao-do-tempo-alexsandro-souza.vercel.app/' target='blanck'>
                            <img style={{width: '25px', height: '25px'}} src={Deploy} alt='imagem de computador'/>
                        </Links>
                        <Select>
                            Versão 1.0
                        </Select> 
                    </WrapperLinks>
                </Wrapper>
            </Container>
        </Projects>
        </>

    )
}
export default Project;