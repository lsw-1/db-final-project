package com.ludwigsw.post;

import com.ludwigsw.user.User;
import com.ludwigsw.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * Created by Ludwig on 10/15/2016.
 */
@Component
@RepositoryEventHandler(Post.class)
public class PostEventHandler {

    private final UserRepository users;

    @Autowired
    public PostEventHandler(UserRepository users) {
        this.users = users;
    }

    public void addUserBasedOnLoggedInUser(Post post) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = users.findByUsername(username);
        post.setUser(user);
    }
}
