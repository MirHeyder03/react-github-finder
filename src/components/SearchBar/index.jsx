import React from 'react'
import { useState } from 'react';

const SearcBar = ({searchUser}) => {
  const [search,setSearch]=useState("");
  const searching=(e)=>{
    setSearch(e.target.value);
    // searchUser(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();   
    searchUser(search);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="container my-3">
        <div className="input-group">
          <input type="text" className='form-control margin-right-3 m-1' onChange={searching} value={search} />
          <div className="input-group-append">
              <button type='submit' className='btn btn-primary m-1'>Search</button>
          </div>
        </div>
        </div>
    </form>
  )
}

export default SearcBar;