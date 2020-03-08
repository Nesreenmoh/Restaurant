package com.capgemini.molvenorestaurant.restaurant.menu.dish;

import com.capgemini.molvenorestaurant.restaurant.menu.category.Category;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Dish {

    // fields
    @Id
    @GeneratedValue
    @Column(name="DISH_ID")
    private Long id;
    @NotNull
    private String name;

    private String description;
    private Double price;
    private Boolean availability;
    private String size;

    @ManyToOne
    private Category category;

    // constructors
    public Dish() {
    }

    public Dish(Long id, @NotNull String name, String description, Double price, Boolean availability, String size, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.size = size;
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
