import NavigationBar from '../NavigationBar /NavigationBar';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Myaccount.css'
function Myaccount() {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [username, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [output, setOutPut] = useState([]);
     
    var state;
    const handleSubmit = () => {
      setLoading(true);
  
      const state = {
        age: age,
        height: height,
        weight: weight,
        username: username, 
      }
      console.log(state);
      
      axios.post('http://ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/users?',null,{params:{username,age,height,weight}}).then(response => console.log(response.status)).catch(err => console.warn(err)); 
  
      axios.get('http://ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/users', {
        params: {
          username
        }
      })
      .then(function (response) {
        console.log("output data",response.data);
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
  
      });
    
  
    }
      const getdata = async () => {
        console.log('get value')
        await axios.get("http://ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/users",
        {
          params: {
            username: 'saisrivatsau1998@gmail.com',
          },
        }).then(response => {
          console.log(response.data)
          setOutPut(response.data);
        }).catch(error=>{
          console.log(error);
        });
  
      };
    
    useEffect(() => {
      getdata()
    }, [])
    return (
        <div>
        <div>
            <NavigationBar />
        </div>
        <div className="body">
          <form className = 'form'>
            <div>
              <label className='label'>Age</label>
              <input
                type="number"
                id="age"
                placeholder="Enter age"
                value={age}
                onChange={e => setAge(e.target.value)} />
            </div>
            
            <div>
              <label className='label'>Height</label>
              <input
                type="number"
                id="height"
                placeholder="Enter Height"
                value={height}
                onChange={e => setHeight(e.target.value)} />
            </div>
            <div>
              <label className='label'>Weight</label>
              <input
                type="number"
                id="weight"
                placeholder="Enter Weight"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            </div>
            
            <div>
              <label className='label'>Email</label>
              <input
                type="text"
                id="username"
                placeholder="Enter email"
                value={username}
                onChange={e => setEmail(e.target.value)} />
            </div>     
            <button
              type="submit"
              className="input"
              onClick={handleSubmit}
              disabled={loading}
            >{loading ? 'Loading...' : 'Submit'}</button>
            {state && <div className='label'></div>}
            {output.map((item) => {
              return (
                <div className='label'>
                  <span>email: {item.username}</span> <div></div>
                  <span>Age: {item.age}</span> <div></div>
                  <span>Height: {item.height}</span> <div></div>
                  <span>Weight: {item.weight}</span>
                </div>
              );
            })
          }
    
          </form>
        </div>
        </div>
      );
    }
    
    export default Myaccount;