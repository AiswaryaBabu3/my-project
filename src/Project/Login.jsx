import "./Login.css"
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillUnlockFill } from "react-icons/bs";


function Login() {
  const history = useNavigate()
  const { register,
    formState: {errors}, 
    handleSubmit } = useForm();

  const onSubmit = (data) =>
  {
    if (data.username === "username" && data.password === "password") {
      history.push("/"); // Navigate to the next page
    }
  };

  return (
    <div className="form">
        <div className="formarea">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="h11">LOG IN</h1>
      <div className="icon">
      <BsFillPersonCheckFill/></div>
      <input
      className="input"
        type="text"
        placeholder="Username"
        {...register("username",{ required: true, pattern:/^[a-zA-Z0-5]+$/})}/>
                <p className="span"> 
            {errors.username?.type === "required" && "the username is required" }
            {errors.username?.type === "pattern" && "the username is invalid" }
            </p>
            <div className="icon">
      <BsFillUnlockFill/></div>
      <input
      className="input"
        type="password"
        placeholder="Password"
        {...register("password",{required:true, pattern:/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/})}/>      
      <p className='span'> 
       {errors.password?.type === "required" && "the password is required"}
       {errors.password?.type === "pattern" && "the password is invalid"}
       </p>
      <br />
      <Button type="submit">Login</Button>
    </form>
    </div>
    </div>
  );
}

export default Login;












 