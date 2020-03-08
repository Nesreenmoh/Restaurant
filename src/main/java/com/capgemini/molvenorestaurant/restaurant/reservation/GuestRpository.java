package com.capgemini.molvenorestaurant.restaurant.reservation;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GuestRpository extends JpaRepository<Guest, Long> {

    public Guest findOneById(Long Id);


}
