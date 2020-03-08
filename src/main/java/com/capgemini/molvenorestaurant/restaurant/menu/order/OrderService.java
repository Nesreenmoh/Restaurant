package com.capgemini.molvenorestaurant.restaurant.menu.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    // fields

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
       return orderRepository.findAll();
    }

    public Order getOneOrder(Long id){
        return orderRepository.findOneById(id);
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }


    public void updateOrder(Order order) {
      orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}
