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
const Container = styled.div`
    display: flex;
    margin-top: 40px;
    height: 500px;
    border: 1px solid;

`;

const Title = styled.h3`
    color: white;
    text-align: center;
    margin: 10% 0 5px 0;
`;

const Text = styled.p`
    color: white;
    padding: 2% ;
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
    margin-bottom: 50px;    
`
const Label = styled.label`
    display: inline-block;
    padding-bottom: 2%;
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
    cursor: pointer;

`
let email = false;
let name = false;
let message = false;


const handleChangeEmail = (e: { target: { value: string; }; })=>{email = Boolean(e.target.value)}
const handleChangeName = (e: { target: { value: string; }; })=>{name = Boolean(e.target.value)}
const handleChangeMessage = (e: { target: { value: string; }; })=>{message = Boolean(e.target.value)}


const handleClick = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
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
                    <Wrapper>
                        <Link href='https://www.linkedin.com/in/alexsandro-souza-79b76023b/'
                        target='black'>
                            <img style={{width: '25px', height: '25px'}} src={linkedin} alt='logo do linkedin'/>
                        </Link>
                        <Link href='https://github.com/Alexsandro-souza'
                        target='black'>
                            <img style={{width: '25px', height: '25px'}} src={github} alt='logo do github'/>
                        </Link>
                        <Link href='https://web.whatsapp.com/send?phone=%7B+5587998039425%7D'
                        target='black'>
                            <img style={{width: '25px', height: '25px'}} src={whatsapp} alt='logo do whatsapp'/>
                        </Link>
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
                    <Buttom onClick={handleClick} type='submit'>Enviar</Buttom>
                    

                </ContainerForm>
            </Container>


        </ContainerSection>
        </>
    )
}
export default Form;