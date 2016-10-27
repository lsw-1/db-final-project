import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Main from './components/Main.jsx';
import New from './components/post/New.jsx';
import Header from './components/Header.jsx';
import SinglePost from './components/post/SinglePost.jsx';
import Created from './components/Created.jsx';

//Routes of the app
const routes = (
    <Router history={browserHistory}>
        <Route component={Header}>
            <Route path="/" component={Main}/>
            <Route path="new" component={New}/>
            <Route path="posts/:postId" component={SinglePost}/>
            <Route path="action/:entity/:action" component={Created}/>
        </Route>
    </Router>
);

export default routes;
