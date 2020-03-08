package com.capgemini.molvenorestaurant.restaurant.menu.order;


import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<Order, Long> {
    public Order findOneById(Long Id);
}
