package com.kalman.restaurant.service;

import com.kalman.restaurant.model.Food;

import java.util.List;


public interface FoodService {

    void save(Food food);
    Food findOne(Integer id);
    List<Food> getAll();
}
