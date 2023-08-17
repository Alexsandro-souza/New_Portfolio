import {useState} from 'react';
import styled from 'styled-components';
import close from '../../assets/img/close.svg';
import menu from  '../../assets/img/menu.svg';

const MenuLine = styled.div`
    position: relative;
    align-self: center;
    margin-right: 10px;
    height: 30px;
    width: 30px;
    cursor: pointer;

    @media(min-width: 601px){
        display: none;
    }

`;
const Nav = styled.nav<{display:boolean}>`
    position: absolute;
    left: -100px;
    align-self: flex-end;
    margin-bottom: 3px;
    min-width: 130px;
    min-height: 150px;
    display: ${props=>props.display? 'block': 'none'};
    background: #ffffff;
    border: 1px solid;
    border-radius: 10%;
    
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;
const List = styled.li`
    :hover {
    border-bottom: 3px solid;
  }  
`
const Links = styled.a`
    color: #3a372d;
    text-decoration: none;
    font-family: 'Carlito', serif;
    font-size: 1rem;
    font-weight: 600;
  
`;

const Img = styled.img`
    width: 95% ;
    height: 100%;
`;

const SideBar = ()=>{
    const [hide, setHide] = useState(false)

    const handleClick = ()=>{
        setHide(!hide)
    }
    
    return(
    <MenuLine onClick={handleClick}>
        <Img src={hide ? close : menu} alt={hide ? 'Icone close' : 'Icone menu'}/>
        <Nav display={hide}>
            <Ul>
                <List>
                    <Links href='#Header'>
                        Home
                    </Links>
                </List>
                <List>
                    <Links href='/'>
                        Sobre mim
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
    </MenuLine>
    )}
export default SideBar;