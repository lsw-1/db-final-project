import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import NewComment from '../NewComment.jsx'

export default class SinglePost extends Component {

    constructor(props) {
        super(props);
        let id = props.params.postId;
        this.state = {
            title: "...loading",
            content: "...loading",
            comments: [],
            api_url: "/api/v1/posts/" + id,
            commentUrl: "/api/v1/posts/" + id + "/comments",
            editing: false
        }
    };

    componentDidMount = () => {

        axios.get(this.state.api_url).then(response => {
            this.setState({
                title: response.data.title,
                content: response.data.content
            });
        });

        axios.get(this.state.commentUrl).then(response => {
            this.setState({
                comments: response.data._embedded.comments,
            });
        })

    };

    onDelete = () => {
        axios.delete(this.state.api_url).then(response =>
            console.log(response.status))
    };

    onComplete = () => {
        let editedPost = {
            title: this.state.title,
            content: this.state.content
        };

        axios.put(this.state.api_url, editedPost).then(response =>
            console.log(response.statusText)
        )
    };

    onSave = () => {
        this.setState({
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            editing: false
        });

    };

    onChange = () => {
        let edit = !this.state.editing;
        this.setState({
            editing: edit
        })
    };

    addComment = () => {

    };


    render = () => {
        /*Render the comments*/
        let comments = this.state.comments.map(comment =>
            <div key={comment._links.self.href}>
                <p>{comment.content}</p>
            </div>
        );
        /*Checks if state-editing is true and adapts the view accordingly*/
        let postArea = (this.state.editing === true) ?
            <div className="row">
                <input className="col-md-8" id="title"/>
                <textarea className="col-md-8" id="content" />
                <div className="btn-group col-md-6">
                    <button className="btn" onClick={() => this.onChange()}>Cancel</button>
                    <button className="btn" onClick={() => this.onSave()}>Save</button>
                </div>
            </div> :
            <div>
                <h4 className="display-4">{this.state.title}</h4>
                <p>{this.state.content}</p>
                <div className="btn-group">
                    <button className="btn" onClick={() => this.onDelete()}><Link to="action/post/deleted">Delete</Link></button>
                    <button className="btn" onClick={() => this.onChange()}>Edit</button>
                    <button className="btn" onClick={() => this.onComplete()}> <Link to="action/post/edited"> Completed</Link></button>
                </div>
            </div>;

        return <div>
            {postArea}

            <div className="m-t-2">
                <h4 className="display-4 m-b-2">Comments</h4>

                {comments}

                <button className="btn"> Write Comment</button>
                <NewComment postUrl={this.state.api_url}/>
            </div>
        </div>

    }
}