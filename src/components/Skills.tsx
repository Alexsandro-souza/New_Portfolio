import styled from 'styled-components';
import React from '../../public/React.svg';
import Less from '../../public/Less.svg';
import Sass from '../../public/Sass.svg';
import TypeScript from '../../public/TypeScript.svg';
import Figma from '../../public/Figma.svg';
import StyledComponents from '../../public/StyledComponents.svg';
import TreeTec from '../../public/TreeTec.svg';

const Skills = styled.section`
    margin-top: 20px;

`;

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 55%;

`;
const WapperContainer = styled.div`
  display  : flex;
  min-width: 100%;
  justify-content: space-between;
  margin-bottom: 5%;
`;

const WrapperImg =styled.div`
    display: flex;
    gap: 25px;
    width: 30%;
    justify-content: center;
    padding: 2% 2%;
    background-color: bisque;

`;

const TitleSingle = styled.h2`
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;

`;

const Title = styled.h3`
    font-size: 1.2rem;

`;

const Text = styled.p`
    flex: 1;

`;

const List = styled.li`
    font-style: italic;
`;


const Skill : React.FC = ()=>{


    return(
        <>
        <Skills>
            <TitleSingle>Habilidades</TitleSingle>
            <WapperContainer>
                <Wrapper>
                    <Title>HTML, Css e JavaScript</Title>
                    <Text>São as principais tecnologias usadas na criação de páginas e aplicativos web. Cada uma delas desempenha um papel específico na construção e estilização das interfaces e no comportamento interativo. As duas primeiras são linguagem de marcação e estilo respectivamente, e o javascript é uma linguagem muito poderosa e alto nível, o que torna o aprendizado mais leve. Essas três tecnologias, HTML, CSS e JavaScript, trabalhando em conjunto, criam uma experiência interativa e envolvente para os usuários em páginas e aplicativos web modernos.</Text>
                </Wrapper>
                <WrapperImg>
                    <img src={TreeTec}/>
                </WrapperImg>
            </WapperContainer>    
            <WapperContainer>
                <Wrapper>
                    <Title>Sass e Less</Title>
                    <Text>O Sass (Syntactically Awesome Style Sheets) e o Less (Leaner CSS) são pré-processadores de CSS que estendem a funcionalidade do CSS tradicional, trazendo diversas facilidades e vantagens para a estilização de páginas web. Quando conheci esses pré-processadores me familiarizei mais com o Less. Ambos têm o objetivo de tornar o processo de escrita de estilos mais eficiente e organizado.</Text>
                </Wrapper>
                <WrapperImg>
                    <img src={Less}/>
                    <img src={Sass}/>
                </WrapperImg>
            </WapperContainer>
            <WapperContainer>
                <Wrapper>
                    <Title>TypeScript</Title>
                    <Text>TypeScript me permite escrever código mais seguro e confiável, aproveitando recursos como tipagem estática e inferência de tipos
                    Com o conhecimento de JavaScript e TypeScript basta eu escolher qual a melhor linguagem para o projeto que irei fazer, sabendo que TypeScript basicamente JavaScript com tipagem estática, então é ótimo para projeto em equipe.</Text>
                </Wrapper>
                <WrapperImg>
                    <img src={TypeScript}/>
                </WrapperImg>
            </WapperContainer>
            <WapperContainer>
                <Wrapper>
                    <Title>Styled Components</Title>
                    <Text>O Styled Components é uma biblioteca popular que permite estilizar componentes React usando CSS-in-JS. Ele oferece uma maneira eficiente e flexível de criar estilos para componentes React, tornando o desenvolvimento de interfaces de usuário mais organizado e escalável. Além disso tem curva de aprendizado curta se o aprendiz já domina Css. O Styled Components trás muitos benefícios alguns são legibilidade e organização, componentes reutilizáveis, props nos estilos...</Text>
                </Wrapper>    
                <WrapperImg>
                    <img src={StyledComponents}/>
                </WrapperImg>
            </WapperContainer>
            <WapperContainer>
                <Wrapper>
                    <Title>React</Title>
                    <Text>React é significativo no desenvolvimento de aplicativos web modernos. Demorei um pouco para me familiarizar com alguns do seu atributos como Hooks, mas depois que aprendi meus projetos são feito muito mais rápidos do que utilizando apenas Html, Css e JavaScript, sem nenhum framework ou biblioteca. O React facilidades como componentização, virtual DOM, robusto, muito bem difundido.</Text>
                </Wrapper>
                <WrapperImg>
                    <img src={React}/>
                </WrapperImg>
            </WapperContainer>
            <WapperContainer>
                <Wrapper>
                    <Title>Figma</Title>
                    <Text>Como desenvolvedor, mesmo sem ser um designer profissional, possuo conhecimento em Figma. Essa habilidade facilita para uma solução de projeto mais elegante e precisa. A combinação de habilidades em desenvolvimento e noções básicas de design me torna mais versátil e apto a contribuir de forma mais completa para o sucesso dos projetos digitais. Estou comprometido em continuar aprendendo e aprimorando minhas habilidades para alcançar resultados excepcionais.</Text>
                </Wrapper>
                <WrapperImg>
                    <img src={Figma}/>
                </WrapperImg>
            </WapperContainer>
                
            <Wrapper>
                <Title>Estudando...</Title>
                <ul>
                    <List>NodeJs</List>
                    <List>MySql</List>
                    <List>MongoDB</List>
                </ul>
            </Wrapper>


        </Skills>
        </>
    )
}
export default Skill;