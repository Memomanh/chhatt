import React from 'react'
import "./about.css";
const Search = ({value , handleSearchKey , clearSearch, formSubmit}) => {
  return (
    <div className='searchBars'>
      <form onSubmit={formSubmit}>
        <i><input type="text" className='place' onChange={handleSearchKey} placeholder='Search by Words' value={value}/></i>
        {value && <span onClick={clearSearch}>X</span>}
        <button className='btns2'>GO</button>
      </form>

    </div>
  )
}

export default Search;
