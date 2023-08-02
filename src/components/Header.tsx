import logo from '../../public/logo.svg';
import styled from 'styled-components';

const Menu = styled.div`
    max-width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    min-height: 55px;
    
    @media(max-width: 980px){
        min-width: 95%;
        margin-left: 20px;
    }

    @media(max-width: 750px){
        /* criar side bar */
    }


`;
const Logo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 30px;
    vertical-align: bottom;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    align-self: center;
    background-color: #17181b;
`
const Nav = styled.nav`
    align-self: flex-end;
    margin-bottom: 2px;
`
const Ul = styled.ul`
    display: flex;
    gap: 10px;
`;
const List = styled.li`
    :hover {
    border-bottom: 1px solid green;
  }  
`
const Link = styled.a`
    color: #3a372d;
    text-decoration: none;
    font-family: 'Roboto', serif;
    font-size: 1rem;
    font-weight: 600;
`

const Header : React.FC = ()=>{


    return(
        <>
            <Menu>
                <Logo/>
                <Nav>
                    <Ul>
                        <List>
                            <Link href='/'>Home</Link>
                        </List>
                        <List>
                            <Link href='/'>Sobre</Link>
                        </List>
                        <List>
                            <Link href='/'>Habilidades</Link>
                        </List>
                        <List>
                            <Link href='/'>Projetos</Link>
                        </List>
                        <List>
                            <Link href='/'>Certificados</Link>
                        </List>
                     
                    </Ul>

                </Nav>
            </Menu>
        </>
    )
}

export default Header;