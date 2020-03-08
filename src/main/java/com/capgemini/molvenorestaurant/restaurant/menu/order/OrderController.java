package com.capgemini.molvenorestaurant.restaurant.menu.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders(){
       return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOneOrder(@PathVariable Long id){
         return orderService.getOneOrder(id);
    }

    @PostMapping
    public void addOrder(@RequestBody Order order) {
        orderService.addOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
    }

    @PutMapping("/{id}")
    public void updateOrder(@RequestBody Order order) {
        orderService.updateOrder(order);
    }
}
