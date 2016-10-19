import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super();
    }

    render = () => {


        return <div className="card card-block">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.content}</p>
            <a href="#" className="card-link">{this.props.user.username}</a>
        </div>
    }
}