import styled from 'styled-components';
import github from '../../public/github.svg';
import whatsapp from '../../public/whatsapp.svg';
import linkedin from '../../public/linkedin.svg';

const ContainerSection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    `;

const LabelColor = styled.div`
    height: auto;
    width: 30%;
    background-color: rgb(2, 132, 199);

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
    height: 500px;
    border: 1px solid;

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
`;

const Link = styled.a`
    text-decoration: none;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 5% auto;
    
`;
const ContainerForm = styled.form`
    width: 50%;
    margin-top: 50px;

`
const WrapperForm = styled.div`
    margin-left: 50px;
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
    width: 100%;
    resize: none;
    margin-left: 50px;
    padding: 2%;
    border: 1px solid;
    outline: none;

`;

const Buttom = styled.button`
    background-color: rgb(85, 202, 128);
    padding: 8px;
    margin: 20px 0 0 98%;
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


const handleClick = ()=>{
    
    if(!email && !name && !message){
        alert('Todos os campos estão vazios')
    }else if(!email){
        alert('O campo email está vazio')
    }else if(!name){
        alert('O campo nome está vazio')
    }else if(!message){
        alert('O campo mensagem está vazio')
    }
    
    
}


const Form = ()=>{

    return(
        <>
        <ContainerSection>
            <Container>
                <LabelColor>
                    <Title>Email para contato</Title>
                    <Text style={{textDecoration: 'underline'}}>alexsandrosouza.contato@gmail.com</Text>
                    <Text style={{marginTop: '40px'}}>Me adicione nas redes abaixo!</Text>
                    <Text style={{marginTop: '10px'}}>Cada linha de código é uma oportunidade de criar algo incrível. Mal posso esperar para colaborar no seu próximo projeto!</Text>
                    <Wrapper>
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
                    </Wrapper>
                </LabelColor>
                <ContainerForm action="https://formsubmit.co/alexsandrosouza.contato@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="http://localhost:5173"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_template" value="table"/>
                    <WrapperForm>
                        <Label>Seu nome</Label>
                        <Input type='text' name='name' placeholder='Como posso chama-lo?' onChange={handleChangeName}/>
                    </WrapperForm>
                    <WrapperForm>
                        <Label>Seu email</Label>
                        <Input type='email' name='email' placeholder='Email...' onChange={handleChangeEmail}/>
                    </WrapperForm>                    
                    <TextArea name='message' placeholder='Digite sua mensagem...' onChange={handleChangeMessage}/>
                    <Buttom onFocus={handleClick} type='submit'>Enviar</Buttom>
                    

                </ContainerForm>
            </Container>


        </ContainerSection>
        </>
    )
}
export default Form;