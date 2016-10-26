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
            apiUrl: "/api/v1/posts/" + id,
            commentUrl: "/api/v1/posts/" + id + "/comments",
            editing: false,
            commentEdit: false
        }
    };

    componentDidMount = () => {
        this.interval = setInterval(
            () =>
                axios.get(this.state.commentUrl).then(response => {
                    this.setState({
                        comments: response.data._embedded.comments,
                    });
                }),
            3000
        );

        axios.get(this.state.apiUrl).then(response => {
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

    componentWillUnmount = () => {
        clearInterval(this.interval)
    };

    onDelete = () => {
        axios.delete(this.state.apiUrl).then(response =>
            console.log(response.status))
    };

    onComplete = () => {
        let editedPost = {
            title: this.state.title,
            content: this.state.content
        };

        axios.put(this.state.apiUrl, editedPost).then(response =>
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

    onChangePost = () => {
        let edit = !this.state.editing;
        this.setState({
            editing: edit
        })
    };

    onChangeComment = () => {
        let edit = !this.state.commentEdit;
        this.setState({
            commentEdit: edit
        })
    };


    render = () => {
        /*Render the comments*/
        let comments = this.state.comments.map(comment =>
            <div key={comment._links.self.href}>
                <p>{comment.content}</p>
            </div>
        );

        let editingComment = this.state.commentEdit === false ?
            <button className="btn" onClick={() => this.onChangeComment()}> Write Comment</button>
            : <NewComment postUrl={this.state.apiUrl}/>;


        /*Checks if state-editing is true and adapts the view accordingly*/
        let postArea = (this.state.editing === true) ?
            <div className="row">
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Title</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" id="title"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Content</label>
                    <div className="col-xs-10">
                        <textarea className="form-control" type="text" id="content"/>
                    </div>
                </div>
                <button className="btn" onClick={() => this.onChangePost()}>Cancel</button>
                <button className="btn" onClick={() => this.onSave()}>Save</button>
            </div>
            /* OR ELSE */
            :
            <div>
                <div className="card card-block">
                    <h4 className="card-title">{this.state.title}</h4>
                    <p className="card-text">{this.state.content}</p>
                </div>
                <div className="btn-group">
                    <button className="btn" onClick={() => this.onChangePost()}>Edit</button>
                    <button className="btn btn-danger" onClick={() => this.onDelete()}><Link
                        to="action/Post/deleted">Delete</Link>
                    </button>
                    <button className="btn btn-success" onClick={() => this.onComplete()}><Link
                        to="action/Post/edited">
                        Completed</Link></button>
                </div>

            </div>;

        return <div className="offset-lg-2 col-md-8 ">
            {postArea}

            <div className="m-t-2">
                <h4 className="m-b-2">Comments</h4>

                {comments}

                {editingComment}

            </div>
        </div>

    }
}