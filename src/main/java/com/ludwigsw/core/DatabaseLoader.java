package com.ludwigsw.core;

import com.ludwigsw.comment.Comment;
import com.ludwigsw.post.Post;
import com.ludwigsw.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * Created by Ludwig on 10/13/2016.
 */
@Component
public class DatabaseLoader implements ApplicationRunner {

    @Autowired
    private final PostRepository posts;

    public DatabaseLoader(PostRepository posts) {
        this.posts = posts;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Post post = new Post("My first", "Jag het eraksjncksjn");
        post.addComment(new Comment("KUL"));
        posts.save(post);
    }
}
