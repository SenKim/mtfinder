import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';


const Container = styled.div`
margin-top : 20px;
width : 100%;
display : flex;
margin-bottom: 60px;
`

const Text = styled.span`
width : 100%;
display : flex;
margin-left : 100px;
font-weight : 400;
font-size : 20px;
color : #969da8;
`


function Message(prop){return(
<><Container>  
<Text color = {prop.color}>{prop.text}</Text>
</Container>
</>)
};


Message.propType = {
    text : PropType.string.isRequired,
    color : PropType.string.isRequired
};



export default Message;



