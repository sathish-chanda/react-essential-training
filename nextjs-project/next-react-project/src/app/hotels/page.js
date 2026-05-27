async function getData() { // This function may take the time to fetch the data, so we need to make it async
  const res = await fetch( // Wait for the fetch to complete before moving on
    "https://snowtooth-api-rest.fly.dev"
  );
  const data = await res.json();
  return data;
}
function HotelBlock({name, capacity}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
    </div>
  )
}
export default async function Page() {
  const data = await getData(); // This will return a promise, not the actual data
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>{data.map((hotel) => <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity} />)}</div>
      </div>
    </main>
  );
}