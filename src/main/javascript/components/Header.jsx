import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

    render = () => {
        return (
            <div>
                {/***************HEADER*********************/}
                <div className="jumbotron bg-inverse m-b-0">
                    <h1 className="display-1">Le Blog</h1>
                    <p className="display-4">Final project of Java DB course</p>
                </div>

                {/***************NAVBAR*********************/}
                <nav className="navbar navbar-light bg-faded ">
                    <ul className="nav navbar-nav offset-md-2">
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
