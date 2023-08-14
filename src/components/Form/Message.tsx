import styled from 'styled-components';

const MessageSucess = styled.div<{ display: number }>`
    position: absolute;
    bottom: 50px;
    right: 10px;
    background-color: rgba(70, 189, 70, 0.7);
    height: 25px;
    line-height: 25px;
    position: fixed;
    border-radius: 3%;
    display: ${props => (props.display === 1 ? 'block' : 'none')};
    padding-left: 13px;
    width: 250px;
    height: 35px;
    transition: all 0.3s ease-in-out;
`;

const Text = styled.p`
    padding: 2%;
    font-family: 'Carlito', serif;
    color: white;
`;

const Message: React.FC<{ duration: number }> = ({ duration }) => {

    return (
        <MessageSucess display={duration === 1 ? 1 : 0}>
            <Text>Mensagem enviada com sucesso</Text>
        </MessageSucess>
    );
};

export default Message;