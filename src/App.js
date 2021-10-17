import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const config = require('./config.json');



class App extends React.Component {


    async onSearchSubmit(term){
        // console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers:{
                Authorization: `Client-ID ${config.nokkel}`
            }
        });
        // .then((response) =>{
        //     console.log(response.data.results);
        // });

        console.log(response.data.results);
    }



    render(){
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;