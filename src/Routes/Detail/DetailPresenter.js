import React from 'react';
import propType from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';


const Container = styled.div`
height : calc(100vh - 50px);
padding : 0 20px;
padding-bottom : 20px;
width : 100%;
position : absolute;
`

const Button = styled(Link)`
z-index : 1;
font-size : 60px;
opacity : 0.5;
position : absolute;
right : 3%;
top : 20px;
`



const Backdrop = styled.div`
position : absolute;
top: 0;
left: 0;
width : 100%;
height : calc(100vh - 50px);
background-image : url(${Backdrop => Backdrop.bgImage });
background-size : cover;
background-position :center center;
z-index : 0;
filter : blur(2.5px);
opacity : 0.5;
`
const Cover = styled.div`
width : 100%;
max-width : 400px;
min-width : 400px;
height : 95%;
min-height : 100%;
background-image : url(${Cover => Cover.bgImage});
background-size : cover ;
background-repeat : no-repeat;
background-position :center center;
border-radius : 8px;
margin-left : 7%;
padding-bottom : 20px;

`
const Content = styled.div`
position : relative;
width : 100%;
height : 100%;
display : flex;
z-index : 1;
padding-top : 20px;
`;

const Data = styled.div`
margin-left : 100px;
margin-right : 8%;
height : 100%;
padding-top : 15px;
`;

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
font-size : 13px;
`


const Yotubue = styled.iframe`
margin-top : 20px;
padding-top : 10px;
height : 90%;
`
const Trailer = styled.div`

width : 100%;
height : 50vh;
display : flex;
position: relative;`


const NoTrailer = styled.h3`
color : rgba(250,250,250,0.5);
width: 0px;
height : 0px
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
    <Item>
      {result.data.release_date && (result.data.release_date.substring(0,4))}
      {result.data.first_air_date && (result.data.first_air_date.substring(0,4))}
      <Divider> · </Divider>
    {result.data.runtime ? 
    result.data.runtime : 
    result.data.episode_run_time}분
    <Divider> · </Divider>
    {result.data.genres && result.data.genres.map((genre, index) => index === 0 ?  `${genre.name}`: `/ ${genre.name}` )}
    </Item>
    <Overview>
        {result.data.overview ? result.data.overview : <NoTrailer></NoTrailer>}
    </Overview>
    
    </ItemContainer>
    <Trailer>
    {result.data.videos.results[0] ? 
    <Yotubue id="ytplayer" type="text/html" width="80%" 
  src = {`https://www.youtube.com/embed/${result.data.videos.results[0].key}`}
    frameborder="0" /> : <NoTrailer></NoTrailer>} 
    </Trailer>
     </Data>
     <Button onClick = {props.history.goBack}>X</Button>  
   </Content>
</Container>}
    </>)
};

export default withRouter(DetailPresenter);