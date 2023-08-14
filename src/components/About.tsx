import { useRef, useState } from 'react';
import styled from 'styled-components'

const AboutSection = styled.section`
    margin: 5% auto 0 auto;
    max-width: 1000px;
    border-top: 3px solid #1B8E99;
    
    
    @media(max-width: 980px){
        border-top: 0;
        
    }
    
    @media(max-width: 500px){
        margin-top: 10%;
    }
`;

const Container = styled.div<{Visible:number}>`  
    height: ${props=>props.Visible === 0? `auto`:`150px`};
    overflow: ${props=>props.Visible === 0? `visible`:`hidden`};
    white-space:pre-line;

    @media(max-width: 882px){
        height: ${props=>props.Visible === 0? `auto`:`420px`};
    }

`;
const TitleSingle = styled.h2`
    display: flex;
    justify-content: space-around;
    font-size: 1.6rem;
    margin: 20px 0 40px;
    font-family: 'Carlito', serif;
    font-weight: 450;
    color: #00B894;

`;

const Text = styled.p`
    flex: 1;
    font-family: 'Carlito', serif;
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

const Wrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
    margin: 0 auto;
    max-width: 95%;    

`;


const About: React.FC = ()=>{
    const [visible, setVisible] = useState(true);
    const [text, setText] = useState('Ver mais...');
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleClick = ()=>{
        setVisible(!visible)
        !visible ? setText('Ver mais...'):setText('Ver menos...')

        if (contentRef.current) {
            if (visible === false) {
                contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });                
            }
        }
    }

    return(
        <>
            <AboutSection id='About'>        
                <Container Visible={visible? 1: 0} ref={contentRef}>
                    <Wrapper>
                        <TitleSingle>Sobre min</TitleSingle>
                        <Text>
                            Meu nome é Alexsandro Souza e apaixonado por desafios e sempre em busca de aprender mais. Resido em Petrolina, PE, juntamente com minha esposa, Gisele. 
                            Sou conhecido por minha tranquilidade e capacidade de conviver harmoniosamente com os outros. Minha característica marcante é o foco incansável que aplico em todas as minhas empreitadas. Acredito que essa característica tem sido fundamental para superar obstáculos ao longo da minha vida.
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <TitleSingle>Trajetória Profissional</TitleSingle>
                        <Text>
                            Minha trajetória profissional é marcada por uma progressão constante e conquistas significativas. Aos 18 anos, iniciei como jovem aprendiz em uma empresa agrícola. Minha dedicação e desempenho me renderam uma extensão do contrato como estagiário, onde minha sede de aprendizado e dedicação foram novamente reconhecidas. Embora a efetivação não tenha sido possível devido a restrições orçamentárias, minha reputação rendeu frutos. Uma empresa parceira reconheceu meu potencial e me acolheu como assistente administrativo.

                            Minha capacidade de aprendizado acelerado me permitiu dominar a administração e, ao observar meus colegas de suporte técnico, percebi uma oportunidade de expansão. Assumi a função de operador de suporte técnico, progredindo posteriormente para técnico de campo, onde minha atuação na qualidade foi evidente. Tais conquistas resultaram em promoções sucessivas: de técnico auditor a supervisor de operações, liderando uma equipe de até 33 técnicos.

                            Minha jornada foi forjada a partir do foco inabalável que dedico a cada tarefa, meu comprometimento com resultados, minha confiabilidade e a resiliência para enfrentar desafios.
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <TitleSingle>Propósito</TitleSingle>
                        <Text>
                            Meu propósito é claro e inspirador: funde-se na paixão por desenvolvimento web e na criação de aplicações que impactem positivamente a vida das pessoas. Desejo contribuir para a melhoria da vida das pessoas por meio das soluções tecnológicas que desenvolvo, ajudando a simplificar processos, resolver problemas e proporcionar experiências mais eficientes e significativas.
                        </Text>
                        <Text>
                            Em resumo, minha jornada até agora reflete um compromisso incessante com o aprendizado, a excelência e a evolução contínua. Tenho orgulho das minhas conquistas, mas também estou ansioso por novos desafios e oportunidades que me permitirão crescer e contribuir ainda mais  no mundo do desenvolvimento web.
                        </Text>
                    </Wrapper>
                </Container>
                <Span onClick={handleClick}>{text}</Span>
            </AboutSection>
        </>
    )
}
export default About;