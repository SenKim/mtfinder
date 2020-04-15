import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const Container = styled.div`
margin-top : 30px;`


const Title = styled.span`
font-size : 16px;
font-weight: 600;
margin-left : 10px;
`


const Grid = styled.div`
margin-left : 5px;
margin-bottom : 50px;
margin-top : 25px;
display : grid;
grid-template-columns : repeat(auto-fill, 140px);
grid-gap: 25px;
`




function Section({title, children,id,index}){
    return(<>
     <Container>
         <Title>{title}</Title>
    <Grid>{children}</Grid>
     </Container>
    </>
)}

Section.propTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node ])

}

export default Section;
