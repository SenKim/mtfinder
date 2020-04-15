import React from 'react';
import propType from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
padding-top : 100px;
left : 5%;`


const Form = styled.form`
margin-top : 70px;
width : 95%;
margin-left : 15px;`


const Input = styled.input`
margin-top : 30px;
all : unset;
font-size : 30px;
width : 100%;`



searchPresenter.propType = {
    tvResults : propType.array,
    movieResults : propType.array,
    searchTerm : propType.string.isRequired,
    error: propType.bool,
    loading: propType.bool};




function searchPresenter(props) {
    const {tvResults,
        movieResults,
        //searchTerm,
        //error,
        loading,
    handleSubmit,
    updateTerm} = props;

    return(<>
    <Form onSubmit = {handleSubmit}><Input type = 'text' 
    onChange = {updateTerm} 
    placeholder = "영화나 프로그램을 검색하세요">
        </Input>
    </Form>
    {loading ? (<Loader />) : (<>
        {movieResults && movieResults.length > 0 && (
            <Section title ='영화' 
            children = {movieResults.map(movie => <Poster 
                title = {movie.title} 
                id = {movie.id} 
                key = {movie.id}
                imageUrl = {movie.poster_path} 
                isMovie ={true}
                rating = {movie.vote_average}/>)}
                />)
            }
            {movieResults && movieResults.length === 0 && (<Message text = '검색된 영화가 없습니다.'/>)}
        {tvResults && tvResults.length > 0 && (
            <Section title ='TV' 
            children = {tvResults.map(tv => <Poster 
                title = {tv.name} 
                id = {tv.id}
                key = {tv.id} 
                imageUrl = {tv.poster_path} 
                isMovie ={false}
                rating = {tv.vote_average}/>)} />
            )}
        
        {tvResults && tvResults.length === 0 &&(<Container><Message text = '검색된 방송프로그램이 없습니다.' /></Container>)}    
        </>
    )}
    </>
    )
};




export default searchPresenter;