import React, {Component} from 'react';
import axios from 'axios';
import Posts from './Posts.jsx'

const API_URL = '/api/v1/posts/';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            posts: [],
            editMode: false
        };
    }

    componentDidMount = () => {
        axios.get(API_URL)
            .then((response) => {
                const posts = response.data._embedded.posts;
                this.setState({posts});
            })
    };

    nextPage = () => {
        axios.get(API_URL, {
            params: {
                page: this.state.page++,
                size: 5
            }
        }).then(response => {
            const posts = response.data._embedded.posts;
            if (posts === []){
                this.state.page--
            }
            this.setState({posts});
        })
    };

    previousPage = () => {
        if(this.state.page > 0){
            axios.get(API_URL, {
                params: {
                    page: this.state.page--,
                    size: 5
                }
            }).then(response => {
                const posts = response.data._embedded.posts;
                this.setState({posts});
            })
        }
    };

    render = () => {

        return <div>
            <div>
                <button className="btn-lg btn-danger" onClick={() => this.deletePost()}>Delete</button>
            </div>
            {/**************PAGED POSTS******************/}
            <div>
                <Posts posts={this.state.posts}/>
            </div>
            {/**************CHANGE PAGE******************/}
            <div className="btn-group m-t-2">
                <button className="btn" onClick={() => this.previousPage()}>PREVIOUS PAGE</button>
                <button className="btn" onClick={() => this.nextPage()}>NEXT PAGE</button>
            </div>
        </div>

    }
}

