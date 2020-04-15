import React  from 'react';
import propType from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';


const Container = styled.div``


function HomePresenter(props){

    const {nowPlaying, popular,upComing, error, loading} = props; 
    const ptDetail = 
     [nowPlaying,
      popular,
      upComing, 
      error, 
      loading];
    ptDetail.propType = {
      nowPlaying: propType.array,
      popular: propType.array,
      upComing : propType.array,
      error: propType.bool,
      loading: propType.bool
};  

   if(loading === null){
      return(<Loader/ >)
   } else{
      return(
         <>
         {nowPlaying && nowPlaying.length > 1 && (<Container key = 'HomeContainer'>
            <Section 
            title = '인기작' 
            children = {popular.map(movie => <Poster 
               title = {movie.title} 
               id = {movie.id}
               key = {movie.id} 
               imageUrl = {movie.poster_path} 
               year = {movie.release_date.substring(0,4)}
               isMovie ={true}
               rating = {movie.vote_average}/>)}
              />
      <Section 
      title = '상영중인 영화' 
      children = {nowPlaying.map(movie => <Poster 
      title = {movie.title} 
      id = {movie.id}
      key = {movie.id} 
      imageUrl = {movie.poster_path} 
      year = {movie.release_date.substring(0,4)}
      isMovie ={true}
      rating = {movie.vote_average}/>)}
      />
      <Section 
      title = '개봉 예정작' 
      children = {upComing.map(movie => <Poster 
         title = {movie.title} 
         id = {movie.id}
         key = {movie.id} 
         imageUrl = {movie.poster_path} 
         year = {movie.release_date.substring(0,4)}
         isMovie ={true}
         rating = {movie.vote_average}/>)}
         />
      </Container>)}
       {error===true && (<Message text = '데이터를 불러올 수 없습니다.' color = '#eb4452'/>)}
      </>
      )
   } 

};




export default HomePresenter;