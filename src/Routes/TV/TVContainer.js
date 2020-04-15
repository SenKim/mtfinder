import React from 'react';
import TVPresenter from './TVPresenter';
import {tvApi} from  '../../Api';

class TVContainer extends React.Component {
    state = {
        TopRated  : null,
        popular : null,
        AiringToday  : null,
        error : null,
        loading : true
    };
    
    
    async componentDidMount(){
        try{
        const {data : {results : topRated}} = await tvApi.topRated(); 
        const {data : {results : popular}} = await tvApi.popular();
        const {data : {results : airingToday}} = await tvApi.airingToday();
        this.setState(
            {
              TopRated : topRated,
              popular : popular,
              AiringToday : airingToday
            }
        );
        }catch{
            this.setState({error : true})
            alert("Oops, We can't get Tv list for some reason.")
        }finally{
            this.setState({
                loading : false
            });
        };
    };

       
    render(){
        const {TopRated, popular, AiringToday, error,loading} = this.state;
        if (this.state.loading === false){
            return(
                <TVPresenter  
                TopRated = {TopRated}
                popular = {popular} 
                AiringToday = {AiringToday} 
                error = {error} 
                loading = {loading}/>)
        } else {
            return("")
        }
    };

};




export default TVContainer;