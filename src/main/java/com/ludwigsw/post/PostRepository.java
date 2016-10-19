package com.ludwigsw.post;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.annotation.security.PermitAll;

/**
 * Created by Ludwig on 10/13/2016.
 */
public interface PostRepository extends CrudRepository<Post, Long> {
    @RestResource(rel = "title-contain", path = "containsTitle")
    Page<Post> findByTitleContaining(@Param("title") String title, Pageable page);
}
