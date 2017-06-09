package com.kalman.restaurant.service.implementation;

import com.kalman.restaurant.model.Food;
import com.kalman.restaurant.repository.FoodRepository;
import com.kalman.restaurant.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImplementation implements FoodService {

    @Autowired
    FoodRepository foodRepository;

    @Override
    public void save(Food food) {
        foodRepository.save(food);
    }

    @Override
    public Food findOne(Integer id) {

        return foodRepository.findOne(id);
    }

    @Override
    public List<Food> getAll() {
        return foodRepository.findAll();
    }
}
