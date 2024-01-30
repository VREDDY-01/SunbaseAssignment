package com.vishnu.sunbase.repo;

import com.vishnu.sunbase.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CustomerPaginationRepo extends PagingAndSortingRepository<Customer,Integer> {

    Page<Customer> findAllByFirstNameContainingOrCityContainingOrEmailContainingOrPhoneContaining(String keyword, String keyword1, String keyword2, String keyword3, Pageable pageable);
}
