import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
    constructor() {
        super();
    }


    render = () => {
        let id = "posts/" + this.props.urlId.slice(-1);
        return <div className="card card-block">
            <h4 className="card-title"> <Link to={id}>{this.props.title}</Link></h4>
            <p className="card-text">{this.props.content}</p>
        </div>
    }
}