import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class New extends Component {

    constructor = () => {
    };

    addPost = () => {
        const title = document.getElementById("title-input").value;
        const content = document.getElementById("content-input").value;

        const createdPost = {
            title: title,
            content: content
        };

        console.log(createdPost);

        axios.post('/api/v1/posts/', createdPost)
            .then(response => {
                console.log(response.status);
            })
            .catch(error => console.log(error))

    };

    render = () => {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Title</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" id="title-input"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Content</label>
                    <div className="col-xs-10">
                        <textarea className="form-control" type="text" id="content-input"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button type="submit" className="btn btn-warning" onClick={() => this.addPost()}><Link to="action/post/created">Submit</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}