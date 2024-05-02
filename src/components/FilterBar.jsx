import React from 'react'
import '../App.css';
import FilterItems from './FilterItems';

const FilterBar = () => {
  return (
     <nav className='nav-container'>
        <FilterItems width={200} placeholder={'Role'}/>
        <FilterItems width={230} placeholder={'Number of Employees'}/>
        <FilterItems width={230} placeholder={'Experience'}/>
        <FilterItems width={230} placeholder={'Remote'}/>
        <FilterItems width={230} placeholder={'Maximum Base Pay Salary'}/>
     </nav>
  )
}

export default FilterBar