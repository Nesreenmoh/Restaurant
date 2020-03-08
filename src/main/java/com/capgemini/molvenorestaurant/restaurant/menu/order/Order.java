package com.capgemini.molvenorestaurant.restaurant.menu.order;



import com.capgemini.molvenorestaurant.restaurant.menu.dish.Dish;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Order {

    //fields
   @Id
   @GeneratedValue
    private Long id;
    private LocalDate date;

    @OneToMany
    @JoinColumn(name="DISH_ID")
    private List<Dish> dishes = new ArrayList<>();

    // constructor
    public Order() {
    }

    public Order(Long id, LocalDate date) {
        this.id = id;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(List<Dish> dishes) {
        this.dishes = dishes;
    }
}
