package com.capgemini.molvenorestaurant.restaurant.menu.resorder;


import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<ResOrder, Long> {
    public ResOrder findOneById(Long Id);
}
