package com.ludwigsw.comment;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

/**
 * Created by Ludwig on 10/13/2016.
 */

//CrudRepo that set up working CRUD operations for Comment model
public interface CommentRepository extends CrudRepository<Comment, Long> {

}
