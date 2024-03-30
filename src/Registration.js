import { Link } from "react-router-dom";
import './index.css'

const Registration = (props) => {
  return (
    <>
      <h1>Registration</h1>
      <div className='container'>
        <div></div>
        <h3>Username</h3>
        <input name="Username"/>
        <div></div><div></div><div></div>
        <h3>Password</h3>
        <input password="Password"/>
        <div></div><div></div><div></div>
        <h3>Confirm Password</h3>
        <input confirmPassword="ConfirmPassword"/>
        <div></div><div></div>
      </div>
      <Link to='/' onClick={props.registerMethod}>Register</Link>
    </>
  );
};

export default Registration;
