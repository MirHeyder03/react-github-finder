import React from 'react'
import { useEffect } from 'react';

const UserDetailPage = ({getuser,user,login},props) => {
    // useEffect(()=>{
    //   getuser(props.match.params.login)
    // },[])
  return (
    <div>
      <h1>{login}</h1>
    </div>
  )
}

export default UserDetailPage;
