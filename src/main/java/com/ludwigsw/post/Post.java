package com.ludwigsw.post;

import com.ludwigsw.comment.Comment;
import com.ludwigsw.core.BaseEntity;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ludwig on 10/13/2016.
 */
@Entity
public class Post extends BaseEntity {
    private String title;
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
