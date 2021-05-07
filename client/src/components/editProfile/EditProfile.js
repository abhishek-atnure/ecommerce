import React, { useState } from "react";
import "./editProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { userSelector, editProfile } from "../../slices/userSlice";

export function EditProfile() {
  const { user_name, user_id } = useSelector(userSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [num, setNum] = useState("");
  const [id, setId] = useState(user_id);
  // const [inputs,setInputs]=useState({
  //     name:user_name,
  //     email:user_email,
  //     password:'',
  //     num:contact_num,
  //     id:user_id
  // });
  // const { email, name,password, num}= inputs;

  const onNameChange = (e) => {
    // setInputs({...inputs, [e.target.name]:e.target.value})
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    // setInputs({...inputs, [e.target.name]:e.target.value})
    setEmail((e) => e.target.value);
  };

  const onPasswordChange = (e) => {
    // setInputs({...inputs, [e.target.name]:e.target.value})
    setPassword(e.target.value);
  };

  const onNumChange = (e) => {
    // setInputs({...inputs, [e.target.name]:e.target.value})
    setNum((e) => e.target.value);
  };

  // const editProfile=async({name,user_name,password,num,id})=>{
  //     try {

  //         const body={name, user_name, password,contact_num,id}
  //         console.log(password)
  //         const data=await fetch(`/users/${id}`,{
  //             method:"PUT",
  //             body:body
  //         })
  //         console.log(data)
  //         const json=await data.json();
  //         console.log(json);
  //     } catch (error) {
  //         console.error(error.message);
  //     }
  // }
  const edit = (e) => {
    e.preventDefault();
    console.log(name, email, password, num, id);
    dispatch(editProfile({ name, email, password, num, id }));
  };

  return (
    <div className="main-edit-profile">
      <div className="profile-headings">
        <h3 id="name-head">Hello, {user_name} 👋</h3>
        <h3 id="edit-head">Edit Profile</h3>
      </div>
      <div className="edit-form">
        <form>
          <div className="one">
            <div className="row">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => onNameChange(e)}
                placeholder="your name"
                required
              ></input>
            </div>

            <div className="row">
              <label htmlFor="email">Email Id</label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => onEmailChange(e)}
                placeholder="your email id"
                required
              ></input>
            </div>
          </div>

          <div className="one">
            <div className="row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => onPasswordChange(e)}
                placeholder="your password"
                required
              ></input>
            </div>

            <div className="row">
              <label htmlFor="contact">Phone number</label>
              <input
                type="number"
                id="contact"
                name="num"
                autoComplete="off"
                mim-step="0"
                max-step="0"
                value={num}
                onChange={(e) => onNumChange(e)}
                placeholder="your contact no."
                required
              ></input>
            </div>
          </div>
          <div className="submit-button">
            <button onClick={(e) => edit(e)}> Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
