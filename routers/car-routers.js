import express from 'express';
import { createCar, deleteCar, getAllCars, getCarById, updateCar } from '../repositories/car-repositories.js';

const router = express.Router()

router.get('/', (req, res) => {
    res.json(getAllCars())
})

router.get('/:carId', (req, res) => {
    const { carId } = req.params
    const car = getCarById(parseInt(carId))

    if(!car){
        return res.status(404).json({message: 'Car not found'});
    }

    res.json(car)
})

router.post('/', (req, res) => {
    const newCar = createCar(req.body)
    res.status(201).json(newCar)
})

router.put('/:carId', (req, res) => {
    const carId = parseInt(req.params.carId);
    const updateCarDto = req.body; 
    
    try {
        const updatedCar = updateCar(carId, updateCarDto);
        res.status(200).json(updatedCar); 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:carId', (req, res) => {
    const carId = parseInt(req.params.carId)
    try{
        deleteCar(carId)
        res.sendStatus(204)
    }catch{
        res.status(404).json({ message: error.message });
    }

})

export default router

