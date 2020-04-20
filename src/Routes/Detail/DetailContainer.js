import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../Api';
import {withRouter} from 'react-router-dom';


class DetailContainer extends React.Component {

    state = {
        result : null,
        error : null,
        loading : true,
    };


    async getDetail (){
        const {match : {params : {id}}} = this.props;
        const parsedId = parseInt(id);
        const {location : {pathname}} = this.props;
        try{
            if(pathname.includes('/movie/')){
                const request = await moviesApi.showDetail(parsedId);
                this.setState({result : request});
            }else{
                const request = await tvApi.showDetail(parsedId);
                this.setState({result : request});
            }; 
        }
        
        catch{
            this.setState({error : true})
            alert("can't find details")
        }
        finally{
            this.setState({loading : false})
        };
        
        
        
        
    }
     
    componentDidMount(){
        const {match : {params : {id}}} = this.props;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)){
            const {history : {push}} = this.props;
            push('/');
        }
        else{
            this.getDetail();
        }
    };


    render(){
        const {result, error,loading} = this.state;
        return(
        <DetailPresenter  result = {result} error = {error} loading = {loading} goBefore = {this.goBefore}/>)
    };

};




export default withRouter(DetailContainer);