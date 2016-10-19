import React, {Component} from 'react';
import axios from 'axios';
import ListofPosts from './ListofPosts.jsx'

const API_URL = '/api/v1/posts';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount = () => {
        axios.get(API_URL).then((response) => {
            const posts = response.data._embedded.posts;
            this.setState({posts});
            console.log(this.state.posts)
        })
    };

    addfields = () => {

    };

    render = () => {

        return <div>
            <div className="jumbotron bg-warning">
                <h1 className="display-1">A LA PETE LUDA BLOG</h1>
                <p>Final project of DB course</p>
            </div>
            <div className="input-group col-md-12">
                <span className="input-group-addon" id="basic-addon2">SEARCH</span>
                <input type="text" className="form-control" placeholder="NAME OF A POST"
                       aria-describedby="basic-addon2"/>
                <button className="btn-warning" onClick={() => this.addfields()}>Add</button>
            </div>
            <div>
                <ListofPosts posts={this.state.posts}/>
            </div>
        </div>

    }
}

export default Main;