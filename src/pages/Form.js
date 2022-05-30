import React, { useState, useEffect} from "react";
import Layout from "./Layout";
import { useInputContextConsumer } from "../Context/inputContext";
import { useNavigate, useLocation } from "react-router-dom";
const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  const { input, setInput } = useInputContextConsumer();
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setInput([...input, userData]);
    setUserData({
      name: "",
      age: "",
      course: "",
      batch: "",
    });
    navigate(-1);
  };
  console.log(input);

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
  );
};

export default Form;
