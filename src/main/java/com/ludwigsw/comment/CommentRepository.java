package com.ludwigsw.comment;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ludwig on 10/13/2016.
 */
public interface CommentRepository extends CrudRepository<Comment, Long> {
}
