const Filter = ({newFilter,handleFilterChange}) => {
    return(
    <>
    <h2>Find a person</h2>
    <div>Filter for people containing : {}</div>
    <input value={newFilter} onChange={handleFilterChange}/>
    </>
  )};

  export default Filter