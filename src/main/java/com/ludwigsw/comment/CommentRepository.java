package com.ludwigsw.comment;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 * Created by Ludwig on 10/13/2016.
 */
public interface CommentRepository extends CrudRepository<Comment, Long> {

/*    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN') or @commentRepository.findOne(#id)?.user?.username == authentication.name")
    void delete(@Param("id") Long id);

    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN') or #comment.user?.username == authentication.name")
    void delete(@Param("comment") Comment comment);*/
}
