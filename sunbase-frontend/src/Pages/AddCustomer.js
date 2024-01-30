/* eslint-disable eqeqeq */
import React, { useState } from 'react'

const AddCustomer = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [street, setStreet] = useState("");
  const [address, setaddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e)=>{
    if (e.target.name === "first_name") {
      setFirst_name(e.target.value);
    }else if(e.target.name === "last_name"){
      setLast_name(e.target.value);
    
    }else if(e.target.name === "street"){
      setStreet(e.target.value);
    }
    else if(e.target.name === "address"){
      setaddress(e.target.value);
    
    }else if(e.target.name === "city"){
      setCity(e.target.value);
    }
    else if(e.target.name === "state"){
      setstate(e.target.value);
    }
    else if(e.target.name === "email"){
      setEmail(e.target.value);
    }
    else if(e.target.name === "phone"){
      setPhone(e.target.value);
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const reqBody = {firstName:first_name,lastName:last_name,street,address,city,state,email,phone};
    
    const res = await fetch("http://localhost:8080/customer",{
      mode:"cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody)
    });
    let a = await res.json();
    if (res.status == "200") {
      setFirst_name("");
      setLast_name("");
      setStreet("");
      setCity("");
      setEmail("");
      setPhone("");
      setaddress("");
      setstate("");
      console.log(a);
    }else{
      console.log("Some Error Occured"+a);
    }
  }

  return (
    <div><h2>Add New Customer</h2>
    <form id="addCustomerForm" onSubmit={handleSubmit} method='post'>
        <label htmlFor="first_name">First Name:</label>
        <input onChange={handleChange} type="text" value={first_name} id="first_name" name="first_name" required/>
        <br/>
        <label htmlFor="last_name">Last Name:</label>
        <input onChange={handleChange} type="text" value={last_name} id="last_name" name="last_name" required/>
        <br/>
        <label htmlFor="street">Street Name:</label>
        <input onChange={handleChange} type="text" value={street} id="street" name="street" required/>
        <br/>
        <label htmlFor="address">Address:</label>
        <input onChange={handleChange} type="text" value={address} id="address" name="address" required/>
        <br/>
        <label htmlFor="city">City Name:</label>
        <input onChange={handleChange} type="text" value={city} id="city" name="city" required/>
        <br/>
        <label htmlFor="state">State:</label>
        <input onChange={handleChange} type="text" value={state} id="state" name="state" required/>
        <br/>
        <label htmlFor="email">Email:</label>
        <input onChange={handleChange} type="email" value={email} id="email" name="email" required/>
        <br/>
        <label htmlFor="phone">Phone:</label>
        <input onChange={handleChange} type="number" value={phone} id="phone" name="phone" required/>
        <br/>
        <button type="submit">Add Customer</button>
    </form></div>
  )
}

export default AddCustomer