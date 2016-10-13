package com.ludwigsw.comment;

import com.ludwigsw.core.BaseEntity;
import com.ludwigsw.post.Post;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * Created by Ludwig on 10/13/2016.
 */
@Entity
public class Comment extends BaseEntity{
    private String content;
    @ManyToOne
    private Post post;

    protected Comment() {
        super();
    }

    public Comment(String content) {
        this();
        this.content = content;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }



}
