const CountryData = ({ countriesToShow }) => {
  let languages = countriesToShow[0].languages.map(
    (languages) => languages.name
  );
  let countryName = countriesToShow[0].name
  let countryCapital = countriesToShow[0].capital

  return (
    <div>
      <div>{countryName}</div>
      <div>The capital is {countryCapital}</div>
      <div>They speak</div>     
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countriesToShow[0].flags.png} alt="flag" />
    </div>
  );
};

 

const Countries = ({ countriesToShow,setCountriesToShow }) => {
  const countryCount = countriesToShow.length;
  console.log(countriesToShow);

  if (countryCount === 0) {
    return <div>Search for a country to begin</div>;
  } else if (countryCount === 1) {
    return (
      <div>
        <CountryData countriesToShow={countriesToShow} />
      </div>
    );
  } else if (countryCount <= 10) {
    return (
      <div>
        {countriesToShow.map((country) => (
        
          <div key={country.name}>
            <div>{country.name}</div>
            {/* why country need to be in array */}
            <button onClick={()=> setCountriesToShow([country])}>click for additional information</button> 
          </div>
         
        ))}
      </div>
    );
  } else if (countryCount >= 10) {
    return <div>Too many matches, please specify another filter.</div>;
  }
};

export default Countries;
