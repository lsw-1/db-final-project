import React from 'react';
import {Link} from 'react-router';

export default class Created extends React.Component {
    constructor() {
        super()
    }

    render = () => {
        let action = this.props.params.action;
        let entity = this.props.params.entity;
        return <div className="offset-lg-3 m-t-2">
            <h1 className="display-4"> {entity} was probably {action}</h1>
            <div className="offset-lg-2 m-t-2">
            <button className="btn">
                <Link to="/">Back to Home</Link>
            </button>
        </div>

        </div>
    }
}