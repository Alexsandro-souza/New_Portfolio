import styled from 'styled-components';
import github from '../../public/github.svg';
import whatsapp from '../../public/whatsapp.svg';
import linkedin from '../../public/linkedin.svg';

const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    margin-top: 10%;
    gap: 5px;
    

    @media(max-width: 980px){
        min-width: 95%;
        align-self: center;
    }
` 
;

const SocialMedia = styled.div`
    max-width: 170px;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`
const Title = styled.h1`
    font-size: 3.75rem;
    color: #00B894;
    font-family: 'Playfair Display', serif;

    @media(max-width: 340px){
        font-size: 2.75rem;
    }

`;

const Text = styled.p`
    
    font-family: 'Roboto', serif;
`;
const Link = styled.a`
    text-decoration: none;

   
`;
const WrapperSocial = styled.div<{color?: string}>`
    padding: 6px;
    border: 4px solid ${(props)=>props.color?props.color:`black`};
    border-radius: 50%;
    
    
`
    
const Call : React.FC = ()=>{
    return(
        <>
        <Wraper>
            <Title>Alexsandro Souza</Title>
            <Text style={{fontSize:'1.75rem'}}>Desenvolvedor Web</Text>
            <Text style={{marginTop:'10px'}}>Sou Alexsandro, um desenvolvedor web com uma experiência sólida em suporte técnico e atendimento ao cliente, atualmente em transição de carreira para a área de desenvolvimento. Busco uma oportunidade para aplicar minhas habilidades criativas, analíticas e de comunicação em uma equipe de desenvolvimento.</Text>
            <SocialMedia>
                <WrapperSocial color='rgb(94, 158, 190)'>
                    <Link href='https://www.linkedin.com/in/alexsandro-souza-79b76023b/'
                    target='black'>
                        <img style={{width: '25px', height: '25px'}} src={linkedin} alt='logo do linkedin'/>
                    </Link>
                </WrapperSocial>
                <WrapperSocial>
                    <Link href='https://github.com/Alexsandro-souza'
                    target='black'>
                        <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                    </Link>
                </WrapperSocial>
                <WrapperSocial color='rgb(37, 158, 1)'>
                    <Link href='https://web.whatsapp.com/send?phone=%7B+5587998039425%7D'
                    target='black'>
                        <img style={{width: '25px', height: '25px'}} src={whatsapp} alt='logo do whatsapp'/>
                    </Link>
                </WrapperSocial>
            </SocialMedia>
        </Wraper>
        </>
    )
}
export default Call;