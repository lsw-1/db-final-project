import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

    render = () => {
        return (
            <div>
                {/***************HEADER*********************/}
                <div className="jumbotron bg-success">
                    <h1 className="display-1">La petite Luda blog</h1>
                    <p>Final project of DB course</p>
                </div>

                {/***************NAVBAR*********************/}
                <nav className="navbar navbar-light bg-faded">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link"to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="new">New Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                {/* CONTENT AREA */}
                {this.props.children}
            </div>
        )

    }
}
