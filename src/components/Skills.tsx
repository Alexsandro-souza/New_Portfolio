import styled from 'styled-components';
import BallCanvas from './Icons/balls/balls';
import { useRef, useState } from 'react';
import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    figma,
    styledComponents,
    MySql
  } from "../assets/tech/index";

const Skills = styled.section`
    margin: 0 auto;
    max-width: 1000px;
    border-top: 3px solid #1B8E99;
    
    
    @media(max-width: 980px){
        border-top: 0;
        
    }

`;

const Container = styled.div<{Visible: number}>`
    height: ${props=>props.Visible === 0? `auto`:`450px`};
    overflow: ${props=>props.Visible === 0? `visible`:`hidden`};

    @media(max-width: 882px){
        height: ${props=>props.Visible === 0? `auto`:`420px`};
    }

`;

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 55%;
    margin-left: 15px;

      @media(max-width: 880px){
        margin: 0 auto;
        max-width: 95%;        
    }
    

`;
const WapperContainer = styled.div`
  display  : flex;
  min-width: 100%;
  margin-bottom: 5%;

  @media(max-width: 880px){
    flex-direction: column;

  }

`;

const WrapperContainerImg = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 5px;
    min-width: 80px;
    height: auto;  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;


       

`;
const WrapperImg =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;        
    transition: all;

    @media(max-width: 880px){
        display: none;

  }
`;

const WrapperImgstudying =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 80px;        
    transition: all;
`;

const WrapperImgSingle =styled.div`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    display: none;

    @media(max-width: 880px){
        display: flex;
        margin-top: 20px;
    }
`;

const TitleSingle = styled.h2`
    display: flex;
    justify-content: space-around;
    font-size: 1.6rem;
    margin: 10px 0 30px;
    font-family: 'Carlito', serif;
    font-weight: 450;
    color: #00B894;

`;

const Title = styled.h3`
    font-size: 1.2rem;
    font-family: 'Carlito', serif;
    font-style: italic;
    color: #00B894;

`;

const Text = styled.p`
    flex: 1;
    font-family: 'Carlito', serif;
`;

const List = styled.li`
    font-style: italic;
`;

const Span = styled.span`
    cursor: pointer;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 30px;
    font-style: italic;
    color: #a19d9d;
    margin-left: 28px;
`;


const Img =styled.img`
    width: 50%;
    height: 50%;
`;



const Skill : React.FC = ()=>{
    const [visible, setVisible] = useState(true);
    const [text, setText] = useState('Ver mais...');
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleClick = ()=>{
        setVisible(!visible)
        !visible ? setText('Ver mais...'):setText('Ver menos...');
        
        if (contentRef.current) {
            if (visible === false) {
                contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });                
            }
        }
    }
    return(
        <>
        <Skills  id='Skill'>
            <Container Visible={visible? 1: 0} ref={contentRef}>
            
                <TitleSingle>Habilidades</TitleSingle>
                <WapperContainer>
                    <Wrapper>
                        <Title>HTML, Css e JavaScript</Title>
                        <Text>Essas três tecnologias, HTML, CSS e JavaScript, trabalhando em conjunto, criam uma experiência interativa e envolvente para os usuários em páginas e aplicativos web modernos. Os projetos apresentados nesse portfólio foram construídos utilizando essas stacks.</Text>
                    </Wrapper>
                        <WrapperContainerImg>                        
                            <WrapperImg>
                                <BallCanvas icon={html}/>
                            </WrapperImg>                        
                            <WrapperImgSingle>
                                <Img src={html} alt='Imagem HTML'/>
                            </WrapperImgSingle>
                            <WrapperImg>
                                <BallCanvas icon={css}/> 
                            </WrapperImg>
                            <WrapperImgSingle>
                                <Img src={css} alt='Imagem Css'/>
                            </WrapperImgSingle>
                            <WrapperImg>
                                <BallCanvas icon={javascript}/>
                            </WrapperImg>
                            <WrapperImgSingle>
                                <Img src={javascript} alt='Imagem javascript'/>
                            </WrapperImgSingle>                        
                        </WrapperContainerImg>
                </WapperContainer>
                
            
                <WapperContainer>
                    <Wrapper>
                        <Title>TypeScript</Title>
                        <Text>TypeScript é essencialmente JavaScript com tipagem estática, o que o torna uma escolha excelente para projetos que exigem robustez e escalabilidade. Com essa flexibilidade, posso desenvolver soluções de alta qualidade e confiáveis.</Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={typescript}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={typescript} alt='Imagem typescript'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                <WapperContainer>
                    <Wrapper>
                        <Title>Styled Components</Title>
                        <Text>Utilizei o Styled Components para criar os componentes desse portfólio, demonstrando minha habilidade em utilizar essa biblioteca para desenvolver interfaces de usuário modernas e escaláveis. Com essa experiência, posso criar soluções personalizadas e eficientes para meus projetos.</Text>
                    </Wrapper>   
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={styledComponents}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={styledComponents} alt='Imagem styledComponents'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                <WapperContainer>
                    <Wrapper>
                        <Title>React</Title>
                        <Text>
                            Usando React desenvolvi uma aplicação web robusta e escalável, 
                            aproveitando ao máximo os recursos dessa ferramenta. Embora tenha 
                            levado algum tempo para me familiarizar com alguns dos seus atributos, 
                            como Hooks, uma vez que aprendi, meus projetos passaram a ser 
                            desenvolvidos com muito mais rapidez e eficiência em comparação com o 
                            desenvolvimento tradicional utilizando apenas HTML, CSS e JavaScript. 
                            A plataforma web que desenvolvi é uma ferramenta valiosa para as oficinas 
                            mecânicas, permitindo-lhes gerenciar suas operações de forma mais eficaz. 
                            Você pode conferir o resultado final acessando o link: 
                            <a href="https://oficinas.autocenterapp.com/" target="_blank">oficinas.autocenterapp.com</a>.
                        </Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={reactjs}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={reactjs} alt='Imagem reactjs'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                <WapperContainer>
                    <Wrapper>
                        <Title>React native</Title>
                        <Text>
                            Minha experiência com React Native foi fundamental para implementar essas novas 
                            features ao <a href="https://play.google.com/store/apps/details?id=com.autocenterapp" target="_blank"> app auto center</a>. 
                            Uma das principais responsabilidades que tive foi desenvolver o programa de fidelidade do app, que permite aos clientes 
                            acumular pontos e trocar por benefícios em postos de combustíveis. Além disso, trabalhei na listagem de peças de oficinas 
                            conveniadas ao app, o que exigiu uma integração com APIs para obter os dados necessários. Também desenvolvi o cálculo de 
                            viagens, que envolveu implementar lógica complexa para calcular os custos e benefícios de cada viagem. Durante o 
                            desenvolvimento, precisei fazer ajustes no design do app para garantir que a experiência do usuário fosse atraente e 
                            fácil de usar. Foi um desafio, mas consegui entregar as funcionalidades dentro do prazo e com qualidade.
                        </Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={reactjs}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={reactjs} alt='Imagem reactjs'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                <WapperContainer>
                    <Wrapper>
                        <Title>Figma</Title>
                        <Text>Utilizo o Figma para acompanhar os designs que devo implementar, o que me permite ter uma visão clara e detalhada do que precisa ser desenvolvido.</Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={figma}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={figma} alt='Imagem figma'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                <WapperContainer>
                    <Wrapper>
                        <Title>Git e GitHub</Title>
                        <Text>Utilizo Git e GitHub para versionalizar todos os meus projetos, o que me permite ter controle total sobre as alterações realizadas no código. Com essa abordagem, posso garantir a segurança e a integridade dos meus projetos, mesmo durante a implementação de novas funcionalidades complexas.</Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={git}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={git} alt='Imagem git'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                </WapperContainer>
                    

                    
                <Wrapper>
                    <Title>Estudando...</Title>
                    <ul>
                        <List>                            
                            <WrapperImgstudying>
                                NodeJs
                                <BallCanvas icon={nodejs}/>
                            </WrapperImgstudying>

                        </List>
                        <List>                        
                            <WrapperImgstudying>
                                MySql
                               <BallCanvas icon={MySql}/>
                            </WrapperImgstudying>                            
                        </List>
                    </ul>
                </Wrapper>
            </Container>
            <Span onClick={handleClick}>{text}</Span>          
        </Skills>
      
        </>
    )
}
export default Skill;
