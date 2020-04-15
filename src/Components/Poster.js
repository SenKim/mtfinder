import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Container = styled.div``;


const Image = styled.div`
background-image : url(${Image => Image.bgUrl});
height : 200px;
background-size : cover;
border-radius : 4px;
background-position : center center;
transition : opacity 0.3s linear;
`;


const Rating = styled.span`
font-size : 12px;
bottom : 5px;
position: absolute;
opacity : 0;
transition : opacity 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
margin-bottom : 5px;
position : relative;
&:hover {
   ${Image} {opacity : 0.3;}
   ${Rating} {opacity : 1}
}
`;



const Title = styled.span`
display : block;
font-size : 13px;
`;

const Year = styled.span`
opacity : 0.5;`;





function Poster ({title, imageUrl, rating, year, id, isMovie = false}){
    return(    
    <>
    <Link to ={isMovie ? (`/movie/${id}`) : (`/tv/${id}`)}>
    <Container>
        <ImageContainer>
        <Image bgUrl = {imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` 
        : require('./noImage.png')} 
             />
        <Rating><span role = 'img' aria-label ='rating'>💛</span>{rating}/10</Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
    </Link>
    </>
)


};


Poster.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string,
    rating : PropTypes.number,
    imageUrl : PropTypes.string,
    year : PropTypes.string
}

export default Poster;
