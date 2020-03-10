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
    private Double total;


//    @OneToMany
//    @JoinColumn(name="DISH_ID")
//    private List<Dish> dishes = new ArrayList<>();


    // constructor
    public ResOrder() {
    }

    public ResOrder(Long id, LocalDate date, Double total) {
        this.id = id;
        this.date = date;
        this.total = total;

    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
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

}
