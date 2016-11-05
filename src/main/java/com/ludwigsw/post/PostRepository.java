package com.ludwigsw.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.annotation.security.PermitAll;
import java.util.List;

//CrudRepo that set up working CRUD operations for Comment model
public interface PostRepository extends CrudRepository<Post, Long> {

//    Method to be able to search by title, It works because of the naming convention and the params
    List<Post> findByTitleContaining(@Param("title") String title);

}
