import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const [Customers, setCustomers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [token, setToken] = useState("");

  const getUsers = async (x) => {
    const res = await fetch(`http://localhost:8080/customer?keyword=${x}`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let a = await res.json();
    if(res.status === 200){
      setCustomers(a.content);
    }else{
      console.log(a);
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    getUsers(keyword);
  }

  const handleEdit = (e)=>{
    navigate("/customer/"+e);
  }

  const handleDelete = async(e)=>{
    let id = e;
    const res = await fetch(`http://localhost:8080/customer/${id}`, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setKey(Math.random()*10000);
    if(res.status === 200){
      navigate("/customers");
    }else{
      console.log(res.status);
    }
  }

  useEffect(() => {
    getUsers("");
    const isToken = localStorage.getItem("token");
    if (isToken) {
      setToken(isToken);
    }else{
      navigate("/")
    }
  }, [key, navigate]);

  const handleSync = async()=>{
    const res = await fetch(`http://localhost:8080/getCustomerList`, {
      mode: "cors",
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
    }
    });
    if (res.status === 200) {
      setKey(Math.random()*1000);
    }
  }

  return (
    <div>
      <h2>Customer List</h2>
      <button onClick={handleSync}>Sync</button>
      <form method="POST" onSubmit={handleSubmit}>
        <input type="text" name="keyword" id="keyword" value={keyword} onChange={e=>setKeyword(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Street</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="customerTableBody">
          {Customers.map((c) => (
            <tr key={c.id}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.street}</td>
              <td>{c.address}</td>
              <td>{c.state}</td>
              <td>{c.city}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={()=>handleEdit(c.id)}>edit</button>
                <button onClick={()=>handleDelete(c.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
