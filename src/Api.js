import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

const apiParams = {
    api_key : '302cabd4ebe3fdbd447801c666220760',
    language : 'ko'
}

export const moviesApi= {
    nowPlaying : () => api.get('movie/now_playing', {params : apiParams}),
    upComing : () =>  api.get('movie/upcoming',{params : apiParams} ),
    popular : () => api.get('movie/popular', {params : apiParams}),
    showDetail : (id) => api.get(`movie/${id}`, {params : {
        api_key : '302cabd4ebe3fdbd447801c666220760',
        language : 'ko',
        append_to_response : 'videos' }}),
    search : (term) => api.get(`search/movie`,{params : {
        api_key : '302cabd4ebe3fdbd447801c666220760',
        language : 'ko',
        query : decodeURIComponent(term) }} )
};

export const tvApi = {
    topRated : () => api.get('tv/top_rated',{params : apiParams}),
    popular : () => api.get('tv/popular' ,{params : apiParams}),
    airingToday : () => api.get('tv/airing_today' , {params : apiParams}),
    showDetail : (id) => api.get(`tv/${id}`, {params : {
        api_key : '302cabd4ebe3fdbd447801c666220760',
        language : 'ko',
        append_to_response : 'videos' }}),
    search : (term) => api.get(`search/tv`,{params : {
        language : 'ko',
        api_key : '302cabd4ebe3fdbd447801c666220760',
        query : decodeURIComponent(term) }} )
};

