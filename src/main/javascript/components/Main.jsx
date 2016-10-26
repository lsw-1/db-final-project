import React, {Component} from 'react';
import axios from 'axios';
import Posts from './post/Posts.jsx'

const API_URL = '/api/v1/posts/';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount = () => {
        axios.get(API_URL)
            .then((response) => {
                let posts = response.data._embedded.posts;
                this.setState({
                    posts
                });

            })
    };
    searchTitle = () => {
        const searchName = document.getElementById("search").value;
        const searchUrl = 'api/v1/posts/search/findByTitleContaining?title=' + searchName;

        axios.get(searchUrl)
            .then(response => {
                let posts = response.data._embedded.posts;
                this.setState({
                    posts
                });

            })
    };

    render = () => {

        return <div className="col-md-8 offset-lg-2">
            <div>
                <input id="search" type="text"/>
                <button onClick={() => this.searchTitle()}>search</button>
            </div>
            {/**************POSTS******************/}
            <div>
                <Posts posts={this.state.posts}/>
            </div>

        </div>

    }
}

