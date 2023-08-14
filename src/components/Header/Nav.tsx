import styled from 'styled-components';

const Nav = styled.nav`
    align-self: flex-end;
    margin-bottom: 3px;
    min-width: 230px;
`;

const Ul = styled.ul`
    display: flex;
    gap: 13px;
    flex-wrap: wrap;

    @media(max-width: 306px){
        gap: 5px;
    }
`;
const List = styled.li`
    :hover {
    border-bottom: 3px solid green;
  }  
`
const Links = styled.a`
    color: #3a372d;
    text-decoration: none;
    font-family: 'Carlito', serif;
    font-size: 1rem;
    font-weight: 600;

    @media(max-width: 600px){
        font-size: 0.8rem;
    }
  
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
                <Links href='#About'>
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