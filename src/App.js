import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://www.gov.uk/bank-holidays.json";

    fetch(url)
      .then((res) => res.json())
      .then((out) => {
        console.log("Checkout this JSON! ", out);
        setData(out);
      })
      .catch((err) => {
        throw err;
      });
  },[]);

  return (
    <div className="App">
      <h1>Hello Archit </h1>
      <h2>Holiday!</h2>

      {console.log("data ::::", data)}
      <h1>England and Wales</h1>
      {data["england-and-wales"]?.events.map((event, index) => {
        return (
          <div key={index + 1}>
            <div className="card">
              <div className="title">{event.title}</div>
              <div className="date">{event.date}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
