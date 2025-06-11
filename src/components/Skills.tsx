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
    mongodb,
    git,
    figma,
    styledComponents,
    Sass,
    Less,
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
                        <Text>São as principais tecnologias usadas na criação de páginas e aplicativos web. Cada uma delas desempenha um papel específico na construção e estilização das interfaces e no comportamento interativo. As duas primeiras são linguagem de marcação e estilo respectivamente, e o javascript é uma linguagem muito poderosa e alto nível, o que torna o aprendizado mais leve. Essas três tecnologias, HTML, CSS e JavaScript, trabalhando em conjunto, criam uma experiência interativa e envolvente para os usuários em páginas e aplicativos web modernos.</Text>
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
                        <Title>Sass e Less</Title>
                        <Text>O Sass (Syntactically Awesome Style Sheets) e o Less (Leaner CSS) são pré-processadores de CSS que estendem a funcionalidade do CSS tradicional, trazendo diversas facilidades e vantagens para a estilização de páginas web. Quando conheci esses pré-processadores me familiarizei mais com o Less. Ambos têm o objetivo de tornar o processo de escrita de estilos mais eficiente e organizado.</Text>
                    </Wrapper>
                    <WrapperContainerImg>
                        <WrapperImg>
                            <BallCanvas icon={Sass}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={Sass} alt='Imagem Sass'/>
                        </WrapperImgSingle>
                        <WrapperImg>
                            <BallCanvas icon={Less}/>
                        </WrapperImg>
                        <WrapperImgSingle>
                            <Img src={Less} alt='Imagem Less'/>
                        </WrapperImgSingle>
                    </WrapperContainerImg>
                    
                </WapperContainer>
            
                <WapperContainer>
                    <Wrapper>
                        <Title>TypeScript</Title>
                        <Text>TypeScript me permite escrever código mais seguro e confiável, aproveitando recursos como tipagem estática e inferência de tipos
                        Com o conhecimento de JavaScript e TypeScript basta eu escolher qual a melhor linguagem para o projeto que irei fazer, sabendo que TypeScript basicamente JavaScript com tipagem estática, então é ótimo para projeto em equipe.</Text>
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
                        <Text>O Styled Components é uma biblioteca popular que permite estilizar componentes React usando CSS-in-JS. Ele oferece uma maneira eficiente e flexível de criar estilos para componentes React, tornando o desenvolvimento de interfaces de usuário mais organizado e escalável. Além disso tem curva de aprendizado curta se o aprendiz já domina Css. O Styled Components trás muitos benefícios alguns são legibilidade e organização, componentes reutilizáveis, props nos estilos...</Text>
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
                        <Text>Como desenvolvedor, mesmo sem ser um designer profissional, possuo conhecimento em Figma. Essa habilidade facilita para uma solução de projeto mais elegante e precisa. A combinação de habilidades em desenvolvimento e noções básicas de design me torna mais versátil e apto a contribuir de forma mais completa para o sucesso dos projetos digitais. Estou comprometido em continuar aprendendo e aprimorando minhas habilidades para alcançar resultados excepcionais.</Text>
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
                        <Text>Como desenvolvedor, mesmo sem ser um designer profissional, possuo conhecimento em Figma. Essa habilidade facilita para uma solução de projeto mais elegante e precisa. A combinação de habilidades em desenvolvimento e noções básicas de design me torna mais versátil e apto a contribuir de forma mais completa para o sucesso dos projetos digitais. Estou comprometido em continuar aprendendo e aprimorando minhas habilidades para alcançar resultados excepcionais.</Text>
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
                        <List>
                            <WrapperImgstudying style={{width:'110px', height:'80px', gap:'10px'}}>
                                MongoDB
                               <BallCanvas icon={mongodb}/>
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
