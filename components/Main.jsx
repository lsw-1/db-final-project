import React from 'react';
import axios from 'axios';

import Post from './Post'

const API_URL = 'http://localhost:8080/api/v1/courses';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: undefined
        };
    }

    componentDidMount = () => {
        const config = {
            headers: {
                CORS: 'luda',
                'password': '13245'}
        };

        axios.get(API_URL, config).then((response) => {
            const json = response.data;
            console.log(json);
            console.log("heheejjea");
            this.setState({
                posts: json.posts
            });
        })
    };


    render = () => {
        return <div className="col-lg-8 offset-lg-2">
            <h1 className="jumbotron bg-info"> to the blog</h1>

            <div className="input-group col-md-5">
                <span className="input-group-addon" id="basic-addon2">SEARCH</span>
                <input type="text" className="form-control" placeholder="NAME OF A POST" aria-describedby="basic-addon2"/>
            </div>
            <Post></Post>

            <p>{this.state.posts}</p>
        </div>

    }
}

export default Main;