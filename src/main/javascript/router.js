import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Main from './components/Main.jsx';
import New from './components/New.jsx';
import Header from './components/Header.jsx';
import SinglePost from './components/SinglePost.jsx';

const routes = (
    <Router history={browserHistory}>
        <Route component={Header}>
            <Route path="/" component={Main}/>
            <Route path="new" component={New}/>
            <Route path="posts/:postId" component={SinglePost}/>
        </Route>
    </Router>
);

export default routes;
