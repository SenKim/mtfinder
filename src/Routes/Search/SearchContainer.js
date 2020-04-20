import React from 'react';
import SearchPresenter from './SearchPresenter';
import {moviesApi, tvApi} from '../../Api';
import {withRouter} from 'react-router-dom';

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
    

    async handleSubmit(event){
        event.preventDefault();
        const {searchTerm} = this.state;
        await this.props.history.push(`/search/${searchTerm}`);
        const searchTerm1 = this.props.location.pathname.substring(8,)
        if (searchTerm1 !== null){
            this.callSearch();
        }
    };
    

    updateTerm(event){
        const {target : {value}} = event;
        this.setState({searchTerm : value});
    };

    async callSearch(event){
        const searchTerm1 = this.props.location.pathname.substring(8,)
        if (searchTerm1 !== ""){
            this.setState({loading : true})
            try{
                const {data : {results : movieResults}} = await moviesApi.search(searchTerm1);
                const {data : {results : tvResults}} = await tvApi.search(searchTerm1);
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
        const searchTerm1 = this.props.location.pathname.substring(8,);
        if (searchTerm1 !== ""){console.log(`render is ${searchTerm1}`)}
        else{console.log('없어')}
        return(<>
            <SearchPresenter  
             tvResults = {tvResults}
             movieResults = {movieResults}
             searchTerm = {searchTerm1}
             error = {error}
             loading = {loading}
             handleSubmit = {this.handleSubmit}
             updateTerm = {this.updateTerm}/></>)
    };
    componentDidMount(){
        const searchTerm1 = this.props.location.pathname.substring(8,)
        if (searchTerm1 !== ""){
            this.callSearch();
        }
    }
};



export default withRouter(SearchContainer);
