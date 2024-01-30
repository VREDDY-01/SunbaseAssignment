package com.vishnu.sunbase.service;

import com.vishnu.sunbase.model.Customer;
import com.vishnu.sunbase.repo.CustomerPaginationRepo;
import com.vishnu.sunbase.repo.ICustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerPaginationRepo customerPaginationRepo;
    @Autowired
    ICustomerRepo customerRepository;

    @Override
    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer updateCustomer(Integer id, Customer updatedCustomer) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isPresent()) {
            Customer existingCustomer = optionalCustomer.get();
            existingCustomer.setFirstName(updatedCustomer.getFirstName());
            existingCustomer.setLastName(updatedCustomer.getLastName());
            existingCustomer.setStreet(updatedCustomer.getStreet());
            existingCustomer.setAddress(updatedCustomer.getAddress());
            existingCustomer.setCity(updatedCustomer.getCity());
            existingCustomer.setState(updatedCustomer.getState());
            existingCustomer.setEmail(updatedCustomer.getEmail());
            existingCustomer.setPhone(updatedCustomer.getPhone());

            return customerRepository.save(existingCustomer);
        } else {
            throw new CustomerNotFoundException("Customer not found with id: " + id);
        }
    }

    @Override
    public Page<Customer> getAllCustomers(Pageable pageable, String keyword) {
        if (keyword != null) {
            return customerPaginationRepo.findAllByFirstNameContainingOrCityContainingOrEmailContainingOrPhoneContaining(
                    keyword,keyword,keyword,keyword, pageable);
        } else {
            return customerPaginationRepo.findAll(pageable);
        }
    }

    @Override
    public Customer getCustomerById(Integer id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found with id: " + id));
    }

    @Override
    public String deleteCustomer(Integer id) {
        customerRepository.deleteById(id);
        return "Customer Deleted Successfully";
    }

    @Value("${api.customer.url}")
    private String customerUrl;

    public List<Customer> getCustomerList(String token) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        HttpEntity<String> requestEntity = new HttpEntity<>(headers);
        System.out.println(headers);
        ResponseEntity<Customer[]> responseEntity = restTemplate.exchange(customerUrl, HttpMethod.GET, requestEntity, Customer[].class);

        // Convert the array to a list
        return Arrays.asList(Objects.requireNonNull(responseEntity.getBody()));
    }

    public void saveOrUpdateCustomer(Customer customer) {
        Customer existingCustomer = customerRepository.findByEmail(customer.getEmail());

        if (existingCustomer != null) {
            existingCustomer.setFirstName(customer.getFirstName());
            existingCustomer.setLastName(customer.getLastName());
            existingCustomer.setStreet(customer.getStreet());
            existingCustomer.setAddress(customer.getAddress());
            existingCustomer.setCity(customer.getCity());
            existingCustomer.setState(customer.getState());
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setPhone(customer.getPhone());
            customerRepository.save(existingCustomer);
        } else {
           customerRepository.save(customer);
        }
    }
}
