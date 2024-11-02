const cars = [
    {
        id: 1,
        make: 'Volkswagen',
        model: 'Golf 2',
        year: 1990,
        mileage: 426000,
        price: 2000,
    },
    {
        id: 2,
        make: 'Volkswagen',
        model: 'Golf 6',
        year: 2012,
        mileage: 145000,
        price: 10000,
    },
    {
        id: 3,
        make: 'Audi',
        model: 'Q3',
        year: 2014,
        mileage: 136000,
        price: 16000,
    }
]

export function getAllCars(){
    return cars
}

export function getCarById(carId){
    return cars.find((car) => car.id === carId);
}
export function createCar(createCarDto){
    const highestCarId = Math.max(...cars.map((car) => car.id))
    const nextCarId = highestCarId + 1
    const newCar = { id: nextCarId, ...createCarDto }
    cars.push(newCar)
    return newCar
}
export function updateCar(carId, updateCarDto){
    const carIndex = cars.findIndex((car) => car.id === carId)
    if(carIndex<0){
        throw new Error(`Car with id:${carId} not found!`)
    }
    cars[carIndex] = { ...cars[carIndex], ...updateCarDto}
    return cars[carIndex]
}

export function deleteCar(carId){
    const carIndex = cars.findIndex((car) => car.id === carId)
    if (carIndex < 0){
        throw new Error(`Car with id:${carId} not found!`)
    }
    cars.splice(carIndex, 1)
}