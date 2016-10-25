package com.ludwigsw.post;

import com.ludwigsw.comment.Comment;
import com.ludwigsw.core.BaseEntity;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ludwig on 10/13/2016.
 */
@Entity
public class Post extends BaseEntity {
    @NotNull
//    @Size(min = 2, max = 30)
    private String title;
    @NotNull
//    @Size(min = 5, max = 500)
    private String content;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments;

    protected Post() {
        super();
        comments = new ArrayList<>();
    }

    public Post(String title, String content) {
        this();
        this.title = title;
        this.content = content;
    }


    public List<Comment> getComments() {
        return comments;
    }
    public void addComment(Comment comment) {
        comment.setPost(this);
        comments.add(comment);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
