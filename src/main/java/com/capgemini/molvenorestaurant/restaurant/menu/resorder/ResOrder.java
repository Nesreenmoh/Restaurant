package com.capgemini.molvenorestaurant.restaurant.menu.resorder;



import com.capgemini.molvenorestaurant.restaurant.menu.dish.Dish;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ResOrder {

    //fields
   @Id
   @GeneratedValue
    private Long id;
    private LocalDate date;


    @OneToMany
    @JoinColumn(name="DISH_ID")
    private List<Dish> dishes = new ArrayList<>();


    // constructor
    public ResOrder() {
    }

    public ResOrder(Long id, LocalDate date, List<Dish> dishes) {
        this.id = id;
        this.date = date;
        this.dishes = dishes;
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
