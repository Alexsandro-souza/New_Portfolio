//import logo from '../../../public/foto.png';
import Navigate from './Nav';
import SideBar from './SideBar';
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


  


`;
const Logo = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 30px;
    vertical-align: bottom;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    align-self: center;
    background-color: #ffff;
`;

const Wrapper = styled.div`
    align-self: flex-end;
    @media(max-width: 600px){
        display: none;
    }

`

const Header : React.FC = ()=>{


    return(
        <>
            <Menu id='Header'>
                <Logo/>
                <Wrapper>
                    <Navigate/>
                </Wrapper>
                <SideBar/>
            </Menu>
        </>
    )
}

export default Header;
