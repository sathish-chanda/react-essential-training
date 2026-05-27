async function getData() { // This function may take the time to fetch the data, so we need to make it async
  const res = await fetch( // Wait for the fetch to complete before moving on
    "https://snowtooth-api-rest.fly.dev"
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData(); // This will return a promise, not the actual data
  return (
    <main>
      <h1>Lift Status Info</h1>
      {/* <div>{JSON.stringify(data)}</div> */}
      <table>
        <thead>
          <tr>
            <th>Lift Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))} 
          <tr></tr>
        </tbody>
      </table>
    </main>
  );
}