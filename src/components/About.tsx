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
                        <TitleSingle>Sobre mim</TitleSingle>
                        <Text>
                            Sou apaixonado por desafios, sempre em busca de aprender mais. Resido em Petrolina/PE, junto com minha esposa, Gisele. 
                            Sou conhecido por minha tranquilidade e capacidade de conviver harmoniosamente com outros. Minha característica marcante é o foco incansável que aplico em todas as minhas empreitadas. Acredito que essa qualidade tem sido fundamental para superar obstáculos ao longo da minha vida.
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <TitleSingle>Trajetória Profissional</TitleSingle>
                        <Text>
                            É marcada por uma progressão constante e conquistas significativas. Aos 18 anos, iniciei como jovem aprendiz em uma empresa agrícola. Com dedicação e desempenho, obtive extensão de contrato como estagiário, no qual minha sede de aprendizado foi novamente reconhecida. Embora a efetivação do contrato não tenha sido possível devido a restrições orçamentárias, minha reputação rendeu frutos. Uma empresa parceira reconheceu meu potencial e me acolheu como assistente administrativo.

                            Minha capacidade de aprendizado acelerado me permitiu dominar a administração e, ao observar meus colegas de suporte técnico, percebi uma oportunidade de expansão. Assumi a função de operador de suporte técnico, progredindo posteriormente a técnico de campo, tornando-se evidente minha atuação. Tais conquistas resultaram em promoções sucessivas: de técnico auditor a supervisor de campo, e depois como supervisor de operações, com uma equipe de até 33 técnicos.

                            Essa jornada foi lapidada a partir do foco inabalável que dedico a cada tarefa, bem como meu comprometimento com resultados, confiabilidade e resiliência para enfrentar desafios.
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        <TitleSingle>Propósito</TitleSingle>
                        <Text>
                            Meu propósito é claro e inspirador: baseia-se na paixão por desenvolvimento web e na criação de aplicações que impactam positivamente a vida das pessoas por meio de soluções tecnológicas, ajudando a simplificar processos, resolver problemas e proporcionar experiências mais eficientes e significativas.
                        </Text>
                        <Text>
                            Em resumo, minha jornada até agora reflete um compromisso incessante com o aprendizado, a excelência e a evolução contínua. Tenho orgulho das minhas conquistas. Estou ansioso por novos desafios e oportunidades que me permitirão crescer e contribuir ainda mais no mundo de desenvolvimento web.
                        </Text>
                    </Wrapper>
                </Container>
                <Span onClick={handleClick}>{text}</Span>
            </AboutSection>
        </>
    )
}
export default About;