package com.capgemini.molvenorestaurant.restaurant.menu.category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Category findOneById(Long id);
}
