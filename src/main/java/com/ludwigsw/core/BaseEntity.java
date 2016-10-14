package com.ludwigsw.core;



import javax.persistence.*;

/**
 * Created by Ludwig on 10/13/2016.
 */
@MappedSuperclass
public abstract class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;

    @Version
    private Long version;

    protected BaseEntity() {
        id = null;
    }
}
