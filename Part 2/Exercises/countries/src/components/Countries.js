const Countries = ({ countriesToShow }) => {
   

    if (countriesToShow.length === 0) {
      return <div>Search for a country to begin</div>;
    } else if (countriesToShow.length === 1) {
      console.log(countriesToShow[0].languages);

      let languages = countriesToShow[0].languages.map(
        (languages) => languages.name
      );
      

      return (
        <div>
          {` ${countriesToShow[0].name}'s capital is 
          ${countriesToShow[0].capital} and they speak: `}
          <ul>
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={countriesToShow[0].flags.png} alt="flag" />
        </div>
      );
    } else if (countriesToShow.length <= 10) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <div key={country.name}>{country.name}</div>
          ))}
        </div>
      );
    } else if (countriesToShow.length >= 10) {
      return <div>Too many matches, please specify another filter.</div>;
    }
  };

  export default Countries