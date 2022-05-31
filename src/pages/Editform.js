import React, { useState } from 'react'
import Layout from './Layout';
import { useParams,useNavigate } from 'react-router-dom'
import { useInputContextConsumer } from '../Context/inputContext'
const Editform = () => {
    const params=useParams();
    const {id}=params;
    const navigate=useNavigate();
    const{input,setInput}=useInputContextConsumer();
    const [userData, setUserData] = useState(input[id]); 
    
    const submitHandler=(e)=>{
        e.preventDefault();
        input[id]=userData;
        setInput(input);
        navigate(-1);
    }
    const changeHandler=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }
  return (
    <Layout>
      <div className="form__container">
        <form action="" onSubmit={submitHandler}>
          <section className="input__item">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={userData.name}
            />
          </section>
          <section className="input__item">
            <label htmlFor="">Age:</label>
            <input
              type="text"
              name="age"
              onChange={changeHandler}
              value={userData.age}
            />
          </section>
          <section className="input__item">
            <label htmlFor="">Course:</label>
            <input
              type="text"
              name="course"
              onChange={changeHandler}
              value={userData.course}
            />
          </section>
          <section className="input__item">
            <label htmlFor="">Batch:</label>
            <input
              type="text"
              name="batch"
              onChange={changeHandler}
              value={userData.batch}
            />
          </section>
          <input type="submit" />
        </form>
      </div>
    </Layout>
  )
}

export default Editform