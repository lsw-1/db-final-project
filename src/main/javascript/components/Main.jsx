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
            editMode: false,
            next: "",
            previous: "hmmmm"
        };
    }

    componentDidMount = () => {
        axios.get(API_URL)
            .then((response) => {
                let posts = response.data._embedded.posts;
                let next = response.data._links.next.href;
                let previous;
                try {
                    previous = response.data._links.prev.href;
                } catch (e){
                    previous = "";
                    console.log(e.message)
                }
                this.setState({
                    posts,
                    next: next,
                    previous: previous
                });

            })
    };

    nextPage = () => {
        axios.get(this.state.next).then(response => {
            let posts = response.data._embedded.posts;
            let next = response.data._links.next.href;
            let previous;
            try {
                previous = response.data._links.prev.href;
            } catch (e){
                previous = "";
                console.log(e.message)
            }
            this.setState({
                posts,
                next: next,
                previous: previous
            });
        })
    };

    previousPage = () => {
        axios.get(this.state.previous).then(response => {
            let posts = response.data._embedded.posts;
            let next = response.data._links.next.href;
            let previous;
            try {
                previous = response.data._links.prev.href;
            } catch (e){
                previous = "";
                console.log(e.message)
            }
            this.setState({
                posts,
                next: next,
                previous: previous
            });
        })

    };

    render = () => {

        return <div className="col-md-8 offset-lg-2">
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

