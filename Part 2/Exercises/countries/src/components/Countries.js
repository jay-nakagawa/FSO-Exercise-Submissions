const CountryData = ({ countriesToShow }) => {
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
};

const Countries = ({ countriesToShow }) => {
  const countryCount = countriesToShow.length;
  console.log(countryCount);

  if (countryCount === 0) {
    return <div>Search for a country to begin</div>;
  } else if (countryCount === 1) {
    console.log(countriesToShow[0].languages);

    return (
      <div>
        <CountryData countriesToShow={countriesToShow} />
      </div>
    );
  } else if (countryCount <= 10) {
    return (
      <div>
        {countriesToShow.map((country) => (
          <div key={country.name}>{country.name}</div>
        ))}
      </div>
    );
  } else if (countryCount >= 10) {
    return <div>Too many matches, please specify another filter.</div>;
  }
};

export default Countries;
