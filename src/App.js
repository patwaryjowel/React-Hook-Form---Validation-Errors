import React from "react";

import { useForm } from 'react-hook-form'

import classNames from 'classnames'

function App() {

  const {register, handleSubmit, errors} = useForm({
    mode: "onTouched",
  });
  // console.log(errors)
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className={classNames("form-control", {
              "is-invalid": errors.FullName
            })}
            id="fullname"
            placeholder="Enter Your Full Name"
            ref={register({
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Please Enter Fullname minimum 3 characters",
              }
            })}
            name="FullName"
          />

          {errors.FullName && (
            <div className="invalid-feedback">
              {errors.FullName.message}
            </div>
          )}
          {/* {errors.FullName?.type === "minLength" && (
            <div className="invalid-feedback"></div>
          )} */}

          {/* <small className="form-text text-danger">{errors.FullName?.type === "required" && "This field is required"}</small>
          <small className="form-text text-danger">{errors.FullName?.type === "minLength" && "Please Enter Fullname minimum 3 characters"}</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className={classNames("form-control", {
              "is-invalid": errors.email
            })}
            id="email"
            placeholder="Enter Your E-mail Address"
            ref={register({
              required: "This field is required",
              pattern:{
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please Enter a Valid e-mail address"
              }
            })}
            name="email"
          />
           {errors.email && (
            <div className="invalid-feedback">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className={classNames("form-control", {
              "is-invalid": errors.phone
            })}
            id="phone"
            placeholder="Enter Your Phone Number"
            ref={register({
              required: "This field is required",
              pattern:{
                value: /^\d{11}$/,
                message: "Please Enter your Valid Phone Number"
              }
            })}
            name="phone"
          />
          {errors.phone && (
            <div className="invalid-feedback">
              {errors.phone.message}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className={classNames("form-control", {
              "is-invalid": errors.password
            })}
            id="password"
            placeholder="Enter Your Password"
            ref={register({
              required: "This field is required",
              pattern:{
                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message: "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)"
              }
            })}
            name="password"
          />
          {errors.password && (
            <div className="invalid-feedback">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="state">Choose Your State</label>
          <select 
            className={classNames("form-control", {
              "is-invalid": errors.state
            })}
            id="state" 
            ref={register({
              required: "This field is required",
            })} 
            name="state">
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
          {errors.state && (
            <div className="invalid-feedback">
              {errors.state.message}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              ref={register({
                required: "This field is required",
              })}
            />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              ref={register({
                required: "This field is required",
              })}
            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
              ref={register({
                required: "This field is required",
              })}
            />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
          {errors.gender && (
            <div className="form-text text-danger">
              {errors.gender.message}
            </div>
          )}
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input 
              className="form-check-input" 
              type="checkbox" 
              id="tnc" 
              ref={register({
                required: "This field is required",
              })}
              name="tnc"
            />
            <label className="form-check-label" htmlFor="tnc">I agree all terms & conditions</label>
          </div>
          {errors.tnc && (
            <div className="form-text text-danger">
              {errors.tnc.message}
            </div>
          )}
        </div>
        <button className="btn btn-primary" type="submit">Create New Account</button>
      </form>
    </div>
  );
}

export default App;
