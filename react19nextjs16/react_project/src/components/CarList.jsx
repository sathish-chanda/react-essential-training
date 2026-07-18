const CarList = ( { make } ) => {
  const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', color: 'Blue', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', color: 'Red', year: 2019 },
    { id: 3, make: 'Ford', model: 'Mustang', color: 'Black', year: 2021 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', color: 'White', year: 2018 },
    { id: 5, make: 'Nissan', model: 'Altima', color: 'Silver', year: 2022 },
    { id: 6, make: 'BMW', model: '3 Series', color: 'Gray', year: 2020 },
    { id: 7, make: 'Mercedes-Benz', model: 'C-Class', color: 'Blue', year: 2021 },
    { id: 8, make: 'Audi', model: 'A4', color: 'Red', year: 2019 },
    { id: 9, make: 'Volkswagen', model: 'Passat', color: 'Black', year: 2022 },
    { id: 10, make: 'Hyundai', model: 'Sonata', color: 'White', year: 2020 },
    { id: 11, make: 'Kia', model: 'Optima', color: 'Silver', year: 2018 },
    { id: 12, make: 'Subaru', model: 'Legacy', color: 'Gray', year: 2021 },
    { id: 13, make: 'Mazda', model: '6', color: 'Blue', year: 2019 },
    { id: 14, make: 'Lexus', model: 'ES', color: 'Red', year: 2022 },
    { id: 15, make: 'Acura', model: 'TLX', color: 'Black', year: 2020 },
    { id: 16, make: 'Infiniti', model: 'Q50', color: 'White', year: 2018 },
    { id: 17, make: 'Jaguar', model: 'XE', color: 'Silver', year: 2021 },
    { id: 18, make: 'Volvo', model: 'S60', color: 'Gray', year: 2019 },
    { id: 19, make: 'Tesla', model: 'Model 3', color: 'Blue', year: 2022 },
    { id: 20, make: 'Porsche', model: 'Panamera', color: 'Red', year: 2020 },
  ];

  const filteredCars = make ? cars.filter((car) => car.make === make) : cars;

  return (
    <div>
      <h2>Car - { make ? `${make} cars.` : 'All models.' }</h2>
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <strong>{car.make} {car.model} | {car.year}</strong>
            <p>Color: {car.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;