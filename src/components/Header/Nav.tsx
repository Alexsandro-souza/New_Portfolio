import styled from 'styled-components';

const Nav = styled.nav`
    align-self: flex-end;
    margin-bottom: 3px;
`
const Ul = styled.ul`
    display: flex;
    gap: 13px;
`;
const List = styled.li`
    :hover {
    border-bottom: 3px solid green;
  }  
`
const Links = styled.a`
    color: #3a372d;
    text-decoration: none;
    font-family: 'Roboto', serif;
    font-size: 1rem;
    font-weight: 600;
  
`

const Navigate = ()=>{

    return(
    
    <Nav>
        <Ul>
            <List>
                <Links href='#Header'>
                    Home
                </Links>
            </List>
            <List>
                <Links href='/'>
                    Sobre min
                </Links>
            </List>
            <List>
                <Links href='#Skill'>
                    Habilidades
                </Links>
            </List>
            <List>
                <Links href='#Projects'>
                    Projetos
                </Links>
            </List>
            <List>
                <Links href='#Certificates'>
                    Certificados
                </Links>
            </List> 
        </Ul>
    </Nav>
    )}
export default Navigate;