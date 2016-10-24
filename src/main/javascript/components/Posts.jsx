import React, {Component} from 'react';
import Post from './Post.jsx'

export default class Posts extends Component {

    render = () => {
        let posts = this.props.posts.map(post =>
            <Post key={post._links.self.href} title={post.title} content={post.content} user={post.user}/>
        );

        return (
            <div>
                {posts}
            </div>
        )

    }
}