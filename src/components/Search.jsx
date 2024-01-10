import React from 'react'

const Search = () => {
  return (
    <div style={{ border: 'thin', padding: '2rem', margin: '1rem' }}>
      Google Search
      <br/>
    <form action="http://google.com" method="get" target="_blank">
        <input type="text" name="bar" maxLength={"255"} id="bar" />
        <input type="submit" value="Search"></input>
    </form>
    </div>
  );
}

export default Search