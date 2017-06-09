package com.kalman.restaurant.controller;

import com.kalman.restaurant.model.Food;
import com.kalman.restaurant.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Objects;

@CrossOrigin
@RestController
public class RESTFoodController {

    @Autowired
    FoodService foodService;

    @RequestMapping(value = "/new_food", method = RequestMethod.POST)
    public Object registration(@RequestBody Food food, BindingResult bindingResult){


        foodService.save(food);
        return food;
    }

    @RequestMapping(value = "/get_food", method = RequestMethod.GET)
    public Object loggedInUser(){

        return foodService.getAll();
    }

    @RequestMapping(value="/get_food/{foodid}", method = RequestMethod.GET)
    public @ResponseBody
    Food getfood(@PathVariable("foodid") String foodid) {
        Food food = foodService.findOne(Integer.parseInt(foodid));
        return food;
    }



}
