import React from 'react';
import {Link} from 'react-router';

export default class Created extends React.Component {
    constructor(){
        super()
    }

    render = () => {
        let action = this.props.params.action;
        let entity = this.props.params.entity;
        return <div>
            <h1 className="display-4"> {entity} was successfully {action}</h1>
            <button className="btn-lg btn-success">
                <Link to="/">Back to Home</Link>
            </button>
        </div>
    }
}