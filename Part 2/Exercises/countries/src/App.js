//useEffect allows for use of the effect hook. this is used for fetching data
import { useState,useEffect } from "react"; 
//axios allow communication between front and backend
import axios from 'axios'


function App() {
  //state for all countries
  const [countries, setCountries] = useState([])

  useEffect(() => {
    //req's server to send name,capital,currencies from all countries. server responds and data is set in countries.
    axios
    .get("https://restcountries.com/v2/all?fields=name,capital,currencies")
    .then((response) => {
      console.log(response.data)
      setCountries(response.data);
    });
  }, []); // effect takes 2 param. 2nd param defines when effect is used, effect by default run after every render. empty array means it is only ran on the first render.


  return (

    <div className="App">
      <ul>yes
        <li>{countries[0].name}</li>
        <li>{countries[1].name}</li>
        <li>{countries[2].name}</li>
      </ul>
    </div>
  );
}

export default App;
