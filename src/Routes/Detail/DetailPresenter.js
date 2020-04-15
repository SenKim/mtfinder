import React from 'react';
import propType from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';


const Container = styled.div`
height : calc(100vh - 50px);
padding : 0 20px;
padding-bottom : 10px;
width : 100%;
position : absolute;

`

const Backdrop = styled.div`
position : absolute;
top: 0;
left: 0;
width : 100%;
height : 100%;
background-image : url(${Backdrop => Backdrop.bgImage });
background-size : cover;
background-position :center center;
z-index : 0;
filter : blur(2.5px);
opacity : 0.5;
`
const Cover = styled.div`
width : 100%;
max-width : 450px;
min-width : 300px;
height : 100%;
background-image : url(${Cover => Cover.bgImage});
background-size : cover;
background-position :center center;
border-radius : 8px;
margin-left : 7%;
margin-top: 7px;


`
const Content = styled.div`
position : relative;
width : 100%;
height : 100%;
display : flex;
z-index : 1;

`;

const Data = styled.div`
margin-left : 100px;
margin-right : 8%;
height : 100%;`

const Title = styled.h3`
font-size : 32px;
padding-top : 20px;
margin-bottom : 20px;
font-weight : 600;`

const Item = styled.div`
font-size : 13px;`

const ItemContainer = styled.div``

const Divider = styled.span`
font-size : 20px;`

const Overview = styled.p`
margin-top : 30px;
line-height : 23px; 
width : 80%;
font-size : 13px;`


const Yotubue = styled.iframe`
margin-top : 30px;
height : 50vh;
`
const Trailer = styled.div`
margin-top : 5px;
width : 100%;
height : 50vh;
display : flex;
position: relative;`


const NoTrailer = styled.h3`
color : rgba(250,250,250,0.5);
`


function DetailPresenter(props){

    const {result, error, loading} = props; 
    const ptDetail = [result, error, loading];
    ptDetail.propType = {
    result: propType.array,
    error: propType.bool,
    loading: propType.bool
};

    return(<>
    {loading ? <Loader /> :
    <Container>
    {result ? <Backdrop bgImage = {`https://image.tmdb.org/t/p/original${result.data.backdrop_path}`}/> : <Loader />}
   <Content>
    {result && <Cover bgImage = {result.data.backdrop_path ? `https://image.tmdb.org/t/p/original${result.data.poster_path}` 
    : require('../../Components/noImage.png')
      } />}
     <Data>
    {result && <Title>{result.data.title ? result.data.title : result.data.name}</Title>}
    <ItemContainer>
    <Item>{result.data.release_date ? 
    result.data.release_date.substring(0,4) : 
    result.data.first_air_date.substring(0,4)}
    <Divider> · </Divider>
    {result.data.runtime ? 
    result.data.runtime : 
    result.data.episode_run_time}분
    <Divider> · </Divider>
    {result.data.genres && result.data.genres.map((genre, index) => index === 0 ?  `${genre.name}`: `/ ${genre.name}` )}
    </Item>
    <Overview>
        {result.data.overview ? result.data.overview : <NoTrailer>시놉시스가 없습니다.</NoTrailer>}
    </Overview>
    
    </ItemContainer>
    <Trailer>
    {result.data.videos.results[0] ? 
    <Yotubue id="ytplayer" type="text/html" width="80%" 
  src = {`https://www.youtube.com/embed/${result.data.videos.results[0].key}`}
    frameborder="0" /> : <NoTrailer>트레일러가 없습니다</NoTrailer>} 
    </Trailer>
     </Data>  
   </Content>
</Container>}
    
    </>)
};

export default DetailPresenter;