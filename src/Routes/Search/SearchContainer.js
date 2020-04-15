import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi} from '../../Api';


class SearchContainer extends React.Component {
    constructor(){
        super()
    this.state = {
        tvResults : null,
        movieResults : null,
        searchTerm : "",
        error : null,
        loading : false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callSearch = this.callSearch.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
};
    

    handleSubmit(event){
        event.preventDefault();
        const {searchTerm} = this.state;
        if (searchTerm !== null){
            this.callSearch();
        }
    };

    updateTerm(event){
        const {target : {value}} = event;
        this.setState({searchTerm : value});
    };

    async callSearch(event){
        const {searchTerm} = this.state;
        if (searchTerm !== ""){
            this.setState({loading : true})
            try{
                const {data : {results : movieResults}} = await moviesApi.search(searchTerm);
                const {data : {results : tvResults}} = await tvApi.search(searchTerm);
                this.setState({
                    movieResults : movieResults,
                    tvResults : tvResults
                });

 
            }catch{
                this.setState({error : true})
                alert("oops, can't search. Try it later")

            }finally{
                this.setState({loading : false});

            };
            
        } else{
            this.setState({loading : false})
        }
       
        

    };

    render(){
        const {tvResults, movieResults, searchTerm, error,loading} = this.state;
        return(
            
            <SearchPresenter  
             tvResults = {tvResults}
             movieResults = {movieResults}
             searchTerm = {searchTerm}
             error = {error}
             loading = {loading}
             handleSubmit = {this.handleSubmit}
             updateTerm = {this.updateTerm}/>)
    };

};



export default SearchContainer;
