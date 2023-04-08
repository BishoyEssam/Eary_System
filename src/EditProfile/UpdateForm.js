import React from "react";

import "./UpdateFormStyle.css";

function UpdateForm() {


return(
  <div>
<h1 className="Title">Update Your information</h1>
  <div className="form">
      
      <div className="form-body">
          <div className="username">
              <label className="form__label" for="firstName">First Name </label>
              <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
          </div>
          <div className="lastname">
              <label className="form__label" for="lastName">Last Name </label>
              <input  className="form__input" type="text"  id="lastName"  placeholder="LastName"/>
          </div>
          <div className="email">
              <label className="form__label" for="email">Email </label>
              <input  className="form__input" type="email" id="email"  placeholder="Email"/>
          </div>
          <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password"  id="password" placeholder="Password"/>
          </div>
          <div className="confirm-password">
              <label className="form__label" for="confirmPassword">Confirm Password </label>
              <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
          </div>
      </div>
      <div class="UpdateButton">
          <button type="submit" class="btn btn-primary"> Update</button>
          <button type="Cancel" class="btn">Cancel</button>
      </div>
  </div>
  </div>
      
) 
}
export default UpdateForm;
