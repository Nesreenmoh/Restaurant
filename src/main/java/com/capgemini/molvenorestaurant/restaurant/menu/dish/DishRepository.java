package com.capgemini.molvenorestaurant.restaurant.menu.dish;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishRepository  extends JpaRepository<Dish, Long> {

    public Dish findOneById(Long Id);
    public List<Dish> findByCategoryId(Long id);
}
