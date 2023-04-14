import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
height: 70px; 
width: 100%; 
display: flex; 
justify-content: space-between; 
border: 1px solid red;
margin-bottom: 25px; 
`
export const LogoContainer = styled(Link)`
height: 100%; 
width: 100px; 
display: flex;
justify-content: center;
align-items: center;
img{
    width: 65px;
    border: 1px solid red;
    }
`
export const NavLinksContainer = styled.div`
width: 50%; 
height: 100%; 
display: flex; 
align-items: center; 
justify-content: flex-end; 
border: 1px solid red;
`
export const NavLink = styled(Link)`
padding: 10px 15px; 
cursor: pointer;
`