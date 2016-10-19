import React, {Component} from 'react';
import Post from './Post.jsx'

export default class ListofPosts extends Component {

    render = () => {
        let posts = this.props.posts.map(post =>
            <Post key={post.id} title={post.title} content={post.content} user={post.user}/>
        );

        return (
            <div>
                {posts}
            </div>
        )

    }
}