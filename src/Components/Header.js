import React from 'react';
import styled from 'styled-components'
import {Link, withRouter} from 'react-router-dom';

const Header = styled.header`
color : white;
position : fixed;
top : 0;
left : 0;
width : 100%;
height : 50px;
display : flex;
align-items : center;
padding : 0px  10px;
background-color : rgba(20,20,20);
z-index : 10;
box-shadow : 0px 1px 5px 1px rgba(0,0,0,0.8);
`


const List = styled.ul`
  display: flex;
 
`
const Item = styled.li`
  width : 80px;
  text-align: center;
  border-bottom : 2px solid ${Item => Item.current ? "white" : "transparent"};
  transition : border-bottom .3s ease-out;
  `


const SLink = styled(Link)`
display : flex;
height : 50px;
align-items : center;
justify-content: center;
`


function Header1(props){
    const current = props.location.pathname;
    return(  
     <Header>
         <List>
             <Item current = {current === '/'}>
                 <SLink to  = '/Home'>Movie</SLink>
             </Item>
             <Item current = {current === '/TV'}>
                 <SLink to  = '/TV'>TV</SLink>
             </Item>
             <Item current = {current === '/Search'}>
             <SLink to  = '/Search'>검색</SLink>
             </Item>
         </List>
     </Header>
    );
};


export default withRouter(Header1);