import React from 'react';

const User = ({ user, onClick, onDelete }) => {
  return (
    
    <div>  
      <div onClick={onClick}>
      <strong>Name: {user.name}</strong>
        <br /><br />
        <strong>Email: {user.email} </strong>
        <br /><br />
        <strong>UserName: {user.username}</strong>
        <br /><br />
        
        <strong>City: {user.address.city}</strong>
        <br /><br />
        <strong>Company: {user.company.name}</strong>
        <br /><br />
        
        <strong>Website: {user.website}</strong>
        <br /><br />
        
      </div> 
      </div>
  );
};

export default User;