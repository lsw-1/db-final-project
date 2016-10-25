/*
package com.ludwigsw.core;

import com.ludwigsw.comment.Comment;
import com.ludwigsw.post.Post;
import com.ludwigsw.post.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;


@Component
public class DatabaseLoader implements ApplicationRunner {

    private final PostRepository posts;

    @Autowired
    public DatabaseLoader(PostRepository posts) {
        this.posts = posts;
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {
        Post post = new Post("My first", "Jag het eraksjncksjn");
        post.addComment(new Comment("KUL"));
        String[] templates = {
                "You should %s",
                "Keep it %s",
                "hate it %s as always"
        };

        String[] inserts= {
                "dude",
                "mannen",
                "comon",
                "Jarrrååå",
                "hörru"
        };

*/
/*       List<User> students = Arrays.asList(
                new User("jacobproffer", "Jacob", "Proffer", "password", new String[]{"ROLE_USER"}),
                new User("mlnorman", "Mike", "Norman", "password", new String[]{"ROLE_USER"}),
                new User("k_freemansmith", "Karen", "Freeman-Smith", "password", new String[]{"ROLE_USER"}),
                new User("seth_lk", "Seth", "Kroger", "password", new String[]{"ROLE_USER"}),
                new User("mrstreetgrid", "Java", "Vince", "password", new String[]{"ROLE_USER"}),
                new User("anthonymikhail", "Tony", "Mikhail", "password", new String[]{"ROLE_USER"}),
                new User("boog690", "AJ", "Teacher", "password", new String[]{"ROLE_USER"}),
                new User("faelor", "Erik", "Faelor Shafer", "password", new String[]{"ROLE_USER"}),
                new User("christophernowack", "Christopher", "Nowack", "password", new String[]{"ROLE_USER"}),
                new User("calebkleveter", "Caleb", "Kleveter", "password", new String[]{"ROLE_USER"}),
                new User("richdonellan", "Rich", "Donnellan", "password", new String[]{"ROLE_USER"}),
                new User("albertqerimi", "Albert", "Qerimi", "password", new String[]{"ROLE_USER"})
        );
        users.save(students);
        users.save(new User("luda", "Wiren", "Ludwig", "13245", new String[]{"ROLE_USER", "ROLE_ADMIN"}));*//*



        List<Post> mockPosts = new ArrayList<>();
        IntStream.range(0, 25)
                .forEach(i -> {
                    String template = templates[i % templates.length];
                    String insert = inserts[i % inserts.length];
                    String title = String.format(template, insert);

                    Post p = new Post(title, title);
//                    p.setUser(students.get(i % students.size()));
                    Comment comment = new Comment(String.format("what is this %s", insert));
//                    comment.setUser(students.get((i % students.size())));
                    p.addComment(comment);
                    mockPosts.add(p);
                });
        posts.save(mockPosts);
    }
}
*/
