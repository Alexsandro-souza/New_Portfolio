import styled from 'styled-components';
import github from '../../../public/github.svg';
import whatsapp from '../../../public/whatsapp.svg';
import linkedin from '../../../public/linkedin.svg';
import Message from './Message';
import { useState } from 'react';

const ContainerSection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    `;

const LabelColor = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 30%;
    background-color: rgb(2, 132, 199);

    @media(max-width: 830px){
        width: 100%;
        margin: 0 auto;
    }

`
const WrapperSocial = styled.div<{color?: string}>`
    padding: 6px;
    border: 4px solid ${(props)=>props.color?props.color:`black`};
    border-radius: 50%; 
    background-color: white; 
    
`
const Container = styled.div`
    display: flex;
    margin-top: 40px;
    height: auto;
    border: 1px solid;

    @media(max-width: 830px){
        flex-direction: column;
        border: 0;
    }

`;

const Title = styled.h3`
    color: white;
    margin: 10% 0 0 0;
    padding-left: 2% ;
    font-family: 'Roboto', serif;
`;

const Text = styled.p`
    color: white;
    padding: 2% ;
    font-family: 'Roboto', serif;
    word-wrap: break-word;
`;

const Link = styled.a`
    text-decoration: none;
`
const Wrapper = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;
    margin: 3% auto 8% auto;
    align-self: center;

    
`;
const ContainerForm = styled.div`
    width: 50%;
    margin-top: 50px;

     @media(max-width: 830px){
        width: 100%;
        margin: 0 auto;
        border: 1px solid;
    }

`
const WrapperForm = styled.div`
    margin-left: 5%;
    margin-bottom: 30px;    
`
const Label = styled.label`
    display: inline-block;
    padding-bottom: 2%;
    font-family: 'Roboto', serif;
`;

const Input = styled.input`
    display: block;
    width: 90%;
    padding-left: 2%;
    border: 1px solid;
    outline: none;
`;

const TextArea = styled.textarea`
    height: 150px;
    width: 95%;
    resize: none;
    padding: 2%;
    border: 1px solid;
    outline: none;

`;

const Buttom = styled.button`
    background-color: rgb(85, 202, 128);
    padding: 8px;
    margin-top: 20px;
    border-radius: 15%;
    color: white;
    cursor: pointer;

`
let email = false;
let name = false;
let message = false;


const handleChangeEmail = (e: { target: { value: string; }; })=>{email = Boolean(e.target.value)}
const handleChangeName = (e: { target: { value: string; }; })=>{name = Boolean(e.target.value)}
const handleChangeMessage = (e: { target: { value: string; }; })=>{message = Boolean(e.target.value)}





const Form = ()=>{
    const [showMessage, setShowMessage] = useState(false);
    const handleFocus = ()=>{
        if(!email && !name && !message){
            alert('Todos os campos estão vazios')
        }else if(!email){
            alert('O campo email está vazio')
        }else if(!name){
            alert('O campo nome está vazio')
        }else if(!message){
            alert('O campo mensagem está vazio')
        }else{
            setTimeout(() => { 
                setShowMessage(true);
            }, 1000)
            
            
            const timer = setTimeout(() => {            
                setShowMessage(false)},5000);
    
            return () => clearTimeout(timer);
        } 
    }


    return(
        <>
        <ContainerSection id='Form'>
            <Container>
                <LabelColor>
                    <Title>Email para contato</Title>
                    <Text style={{fontWeight: 'bold'}}>alexsandrosouza.contato@gmail.com</Text>
                    <Text style={{marginTop: '10px'}}>Me adicione nas redes abaixo!</Text>
                    <Text style={{fontStyle:'italic'}}>Cada linha de código é uma oportunidade de criar algo incrível. Mal posso esperar para colaborar no seu próximo projeto!</Text>
                    <Wrapper>
                        <WrapperSocial color='rgb(37, 158, 1)'>
                            <Link href='https://www.linkedin.com/in/alexsandro-souza-79b76023b/'
                            target='black'>
                                <img style={{width: '15px', height: '15px'}} src={linkedin} alt='logo do linkedin'/>
                            </Link>
                        </WrapperSocial >
                        <WrapperSocial color='rgb(37, 158, 1)'>
                            <Link href='https://github.com/Alexsandro-souza'
                            target='black'>
                                <img style={{width: '15px', height: '15px'}} src={github} alt='logo do github'/>
                            </Link>
                        </WrapperSocial>
                        <WrapperSocial color='rgb(37, 158, 1)'>
                            <Link href='https://web.whatsapp.com/send?phone=%7B+5587998039425%7D'
                            target='black'>
                                <img style={{width: '15px', height: '15px'}} src={whatsapp} alt='logo do whatsapp'/>
                            </Link>
                        </WrapperSocial>
                    </Wrapper>
                </LabelColor>
                <ContainerForm>
                    <form action="https://formsubmit.co/alexsandrosouza.contato@gmail.com" method="POST">
                        <input type="hidden" name="_next" value="http://localhost:5173/"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_template" value="table"/>
                        <WrapperForm style={{marginTop:'10px'}}>
                            <Label>Seu nome</Label>
                            <Input type='text' name='name' placeholder='Como posso chama-lo?' onChange={handleChangeName}/>
                        </WrapperForm>
                        <WrapperForm>
                            <Label>Seu email</Label>
                            <Input type='email' name='email' placeholder='Email...' onChange={handleChangeEmail}/>
                        </WrapperForm>
                        <WrapperForm>                   
                            <TextArea name='message' placeholder='Digite sua mensagem...' onChange={handleChangeMessage}/>
                            <Buttom onFocus={handleFocus} type='submit'>Enviar</Buttom>
                        </WrapperForm>
                    </form>
                </ContainerForm>
            </Container>
            <Message duration={showMessage ? 1 : 0}/>
        </ContainerSection>
        </>
    )
}
export default Form;