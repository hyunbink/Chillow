import React from "react";
import { BiSearch } from 'react-icons/bi';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {query: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.search(this.state.query)
            .then(this.props.history.push('/listings/search/results'));   
    }

    handleUpdate(field){
        return e =>{
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="search" className='search-bar' 
                onChange={this.handleUpdate('query')}
                value={this.state.query} 
                placeholder='Enter an address, city, or ZIP code'/>
                <button id="search-button" >{<BiSearch />}</button>
            </form>
        )
    }
};

export default SearchBar;