import React from 'react';
import propType from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';



const Container = styled.div``



function TVPresenter(props){
    const {TopRated,
        popular,
        AiringToday, error, loading} = props; 
    const ptDetail = [TopRated,
        popular,
        AiringToday, error, loading];
    ptDetail.propType = {
        TopRated : propType.array,
        popular : propType.array,
        AiringToday : propType.array,
    error: propType.bool,
    loading: propType.bool
};
   
   if(loading === true){
   return("")
   } else{
    return(
        <>
    <Container>
    <Section title = '평점 높은 작품' 
    children = {TopRated.map(tv => <Poster 
        title = {tv.name} 
        id = {tv.id}
        key = {tv.id} 
        imageUrl = {tv.poster_path} 
        year = {tv.first_air_date.substring(0,4)}
        isMovie ={false}
        rating = {tv.vote_average}/>)} />
    <Section title = '현재 방영 중'children = {AiringToday.map(tv => <Poster 
        title = {tv.name} 
        id = {tv.id}
        key = {tv.id} 
        imageUrl = {tv.poster_path} 
        year = {tv.first_air_date.substring(0,4)}
        isMovie ={false}
        rating = {tv.vote_average}/>)} />
    <Section title = '인기작' children = {popular.map(tv => <Poster 
        title = {tv.name} 
        id = {tv.id}
        key = {tv.id} 
        imageUrl = {tv.poster_path} 
        year = {tv.first_air_date.substring(0,4)}
        isMovie ={false}
        rating = {tv.vote_average}/>)} />
    </Container>
    </>
    )
     } 

};

export default TVPresenter;