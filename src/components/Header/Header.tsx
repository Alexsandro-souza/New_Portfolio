import logo from '../../../public/logo.svg';
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

    @media(max-width: 601px){
        border: 1px solid white;
        margin-left: 0;
    }
`

const Header : React.FC = ()=>{


    return(
        <>
            <Menu id='Header'>
                <Logo/>
                <Navigate/>
                <SideBar/>
            </Menu>
        </>
    )
}

export default Header;