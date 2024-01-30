package com.vishnu.sunbase.repo;

import com.vishnu.sunbase.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface ICustomerRepo extends JpaRepository<Customer, Integer> {

    Customer findByEmail(String email);
}
