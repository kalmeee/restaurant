package com.kalman.restaurant.repository;

import com.kalman.restaurant.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Integer> {
}
