import React from 'react';
import { useState, useEffect, } from 'react';
// import Select from 'react-select';

function App() {
  var provinces = ['1','2','3','4','5','6','7'];
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    phone: "",
    dob:"",
    address:"",
    city:"",
    district:"",
    province:"",
    country:""
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(true);
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name] : e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitiing");
    const newRecord ={ ...formValues }
    setRecords([...records, newRecord]);
    console.log(records);
    setError(validate(formValues));
    setIsSubmit(true);
    localStorage.setItem('User Records',JSON.stringify(records));

  }
  

  useEffect(()=>{
    console.log(error);
    if(Object.keys(error).length === 0 && isSubmit){
      console.log(formValues);
    }    
  },[error, formValues, isSubmit]);

  const validate =(values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.username){
      errors.username = "Username is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    }else if(!regex.test(values.email)){
      errors.email="This is not a valid mail";
    }
    if(!values.phone){
      errors.phone = "Phone Number is required";
    }else if(values.phone.length  < 7){
      errors.phone ="Phone Number must be atleast 7 digits";
    }
    return errors;
  }

  return (
    <div>
      <div className="main">
      {/* {Object.keys(error).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )} */}
        {/* <pre>
          {JSON.stringify(formValues)}
        </pre> */}

        <form action='' onSubmit={handleSubmit}>
          <div className="uname" style={{display:'flex',
              flexDirection:'row',paddingBottom:'5px'}}>
            <label htmlFor="name">Name: </label><br/>
            <input type="text" id='username' name='username'
            onChange={handleChange}  />
          <div>{error.username}</div>
          </div>
          <div className="uemail"style={{display:'flex',
              flexDirection:'row',paddingBottom:'5px'}}>
            <label htmlFor="email">Email: </label><br/>
            <input type="text" id='email' name='email'
            onChange={handleChange}   />
          <div>{error.email}</div>
          </div>
          <div className="uphone"style={{display:'flex',
              flexDirection:'row',paddingBottom:'5px'}}>
            <label htmlFor="phone">Phone Number: </label><br/>
            <input type="number" id='phone' name='phone'  
            onChange={handleChange} />
          <div>{error.phone}</div>
          </div>
          <div className="udob"style={{display:'flex',
              flexDirection:'row',paddingBottom:'5px'}}>
            <label htmlFor="dob">DOB: </label><br/>
            <input type="date" id='dob' name='dob' 
            onChange={handleChange}  />
          </div>
          <div className="uaddress">
            <label htmlFor="address">Address: </label><br/>
            <input type="text" id='address' name='address'  
            onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" id='city' name='city'  
            onChange={handleChange} />
            </div>
            <label htmlFor="district">District: </label>
            <input type="text" id='district' name='district'  
            onChange={handleChange} /><br/>
            <label htmlFor="province">Province: </label>
            {/* <input type="text" id='province' name='province' 
            onChange={handleChange}  /><br/> */}
            <select defaultValue={provinces[0]} name='provinces'>
              {/* <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option> */}
              {
                provinces.map(province => <option onChange={handleChange} value={province}>
                  {province} 
                </option>)
              }
            </select>
            <label htmlFor="country">Country: </label>
            {/* <input type="text" id='country' name='country' 
            onChange={handleChange} /> */}
            <select defaultValue="Nepal" name='country' onChange={handleChange}>
              <option value="Nep">Nepal</option>
              <option value="Aus">Australia</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="Canda">Canada</option>
            </select>
            {/* <Select options={provinces} value={provinces[0]}
            onChange={handleChange}/> */}
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>

        </form>
      </div>

    </div>
  )
}

export default App