import React,{Component} from 'react';
import HomePresenter from './HomePresenter';
import {moviesApi} from  '../../Api';
import Loader from '../../Components/Loader';


class HomeContainer extends Component {
    state = {
        nowPlaying : null,
        popular : null,
        upComing : null,
        error : null,
        loading : true
    }
    
    async componentDidMount(){
         try{
             const {data :{results : nowPlaying}} = await moviesApi.nowPlaying();
             const {data :{results : upComing}} = await moviesApi.upComing();
             const {data :{results : popular}} = await moviesApi.popular();
             this.setState({
                 nowPlaying : nowPlaying,
                 popular : popular,
                 upComing : upComing
             })
             
        }
        catch{
            this.setState({error : true});

        }
        finally{
            this.setState({loading : false})
        }
    };

    render(){
        const {nowPlaying, popular, upComing, error,loading} = this.state;
        if (this.state.loading === false){
            return(
        <HomePresenter  
        nowPlaying = {nowPlaying} 
        popular = {popular} 
        upComing = {upComing} 
        error = {error} 
        loading = {loading}/>)
    }else {
            return(
        <Loader />
    )}};

};




export default HomeContainer;
