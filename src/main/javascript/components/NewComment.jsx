import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class NewComment extends Component {
    constructor(props){
        super(props)
    }

    addComment = () => {
        const content = document.getElementById("content-input").value;

        const createdComment = {
            content: content,
            post: this.props.postUrl
        };

        axios.post('/api/v1/comments/', createdComment)
            .then(response => {
                console.log(response.status);
            })
            .catch(error => console.log(error))
    };

    render = () => {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-xs-2 col-form-label">Content</label>
                    <div className="col-xs-10">
                        <textarea className="form-control" type="text" id="content-input"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button type="submit" className="btn btn-warning"
                                onClick={() => this.addComment()}>Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}