package com.vishnu.sunbase.controller;

import com.vishnu.sunbase.model.Customer;
import com.vishnu.sunbase.service.AuthenticationService;
import com.vishnu.sunbase.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    CustomerServiceImpl customerService;

    @Autowired
    private AuthenticationService authService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("customer")
    public Customer createCustomer(@RequestBody Customer customer)
    {
        return customerService.createCustomer(customer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("customer/{id}")
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer customer)
    {
        return customerService.updateCustomer(id,customer);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("customer")
    public Page<Customer> getAllCustomers(Pageable pageable, @RequestParam(required = false) String keyword) {
        return customerService.getAllCustomers(pageable,keyword);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("customer/{id}")
    public Customer getCustomerById(@PathVariable Integer id) {
        return customerService.getCustomerById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("customer/{id}")
    public String deleteCustomer(@PathVariable Integer id) {
        try{
            return customerService.deleteCustomer(id);
        }catch (Exception e){
            return e.toString();
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/authenticate")
    public String authenticate(@RequestParam String loginId, @RequestParam String password) {
        return authService.authenticate(loginId, password);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getCustomerList")
    public List<Customer> getCustomerList(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.replace("Bearer ", "");
        List<Customer> customers = customerService.getCustomerList(token);
        for (Customer customer:customers) {
            customerService.saveOrUpdateCustomer(customer);
        }
        return customers;
    }
}
