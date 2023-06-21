export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "8d6f9c4fb4msha7c3a021c747012p17518bjsn2e7880cdee27",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
