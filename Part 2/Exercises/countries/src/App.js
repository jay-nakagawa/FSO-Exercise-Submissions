//useEffect allows for use of the effect hook. this is used for fetching data
import { useState, useEffect } from "react";
//axios allow communication between front and backend
import axios from "axios";
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([]); //holds all the countries
  const [filter, setFilter] = useState(""); //holds search input
  const [countriesToShow, setCountriesToShow] = useState([]); //holds countries that meet search parameters

  useEffect(() => {
    //req's server to send name,capital and other info for all countries
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,languages,flags"
      )
      .then((response) => {
        // console.log(response.data)
        setCountries(response.data);
      });
  }, []); // effect takes 2 param. 2nd param defines when effect is used, effect by default run after every render. empty array means it is only ran on the first render.

 

  const handleFilterChange = (event) => {
    //holds filter parameters
    setFilter(event.target.value); 
    setCountriesToShow(
      // shows countries that meet the search parameters
      countries.filter((country) => {
        return country.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };


  return (
    <div className="App">
      <h1>Countries</h1>
      <form >
        <h2>
          Search
          <input value={filter} onChange={handleFilterChange} />
        </h2>
      </form>

      <Countries countriesToShow={countriesToShow} />
    </div>
  );
}

export default App;
