//useEffect allows for use of the effect hook. this is used for fetching data
import { useState,useEffect } from "react"; 
//axios allow communication between front and backend
import axios from 'axios'


function App() {
  
  const [countries, setCountries] = useState([]) //holds all the countries
  const [filter, setFilter] = useState(""); //holds search input
  const [countriesToShow, setCountriesToShow] = useState([]) //holds countries that meet search parameters

  useEffect(() => {
    //req's server to send name,capital,currencies from all countries. server responds and data is set in countries.
    axios
    .get("https://restcountries.com/v2/all?fields=name,capital,currencies,languages")
    .then((response) => {
      // console.log(response.data)
      setCountries(response.data);
    });
  }, []); // effect takes 2 param. 2nd param defines when effect is used, effect by default run after every render. empty array means it is only ran on the first render.

  const search = (event) => {
    //runs when form is submitted
    event.preventDefault() // stops submission of form which would cause page reload
    console.log('button clicked', event.target)
  }
  const handleFilterChange = (event) =>{
    // console.log(event.target)
    setFilter(event.target.value) //this synchronizes changes made to the input with the components state
    setCountriesToShow( // shows countries that meet the search parameters
      countries.filter((country) =>{
   
            return country.name.toLowerCase().includes(filter.toLowerCase()
            )
         
         })
      
    )
  }

  const Countries = ({countriesToShow}) => {
    console.log(countriesToShow)


    if(countriesToShow.length === 0) {
      return (
        <div>Search for a country to begin</div>
        )
    }else if(countriesToShow.length === 1){
      console.log(countriesToShow[0].languages)
      let languages = countriesToShow[0].languages.map(languages=> languages.name)
      console.log(`they speak ${languages}`)
      return(
        <div>
         {` ${countriesToShow[0].name}'s capital is 
          ${countriesToShow[0].capital} and they speak: `}
          <ul>
            {languages.map((language)=>(
              <li key={language}>{language}</li>
            ))}

          </ul>
          {/* {countriesToShow[0].languages[0].name} */}
          {/* <ul>
            {
            Object.values(countriesToShow[0].languages).map((language)=>(
              <li key={language}>{language}</li>
            
            ))}
          </ul> */}
          
        </div>
      )
    }else if(countriesToShow.length<=10){
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.name}>{country.name}</div>
          ))}
        </div>
      );
    }else if(countriesToShow.length>=10){
      return(
        <div>
          Too many matches, please specify another filter.
        </div>
      )
    }


  }

  //   return(
  //     <>
  //     {
  //   countriesToShow.map(country => 
  // <li key={country.name}>
  //   {country.name}'s capital is {country.capital} </li>
  //   )}
   
  //     </>
      
    
  //   )
  

  // {
  //   countriesToShow.map(country => 
  // <li key={country.name}>
  //   {country.name}'s capital is {country.capital} </li>
  //   )}




  return (

    <div className="App">
      <h1>Countries</h1>
      <form onSubmit={search}>
        <h2>Search       
          <input value={filter} onChange={handleFilterChange}/>

        </h2>
      </form>
      
      {/* takes the array of filtered countries and renders an li for each one*/}
      {/* {countriesToShow.map(country => <li>{country.name}'s capital is {country.capital} </li>)} */}
      <Countries countriesToShow={countriesToShow} />
     
      
    </div>
  );
}

export default App;
