import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 text-center">
        <main className="form-signin w-50 m-auto shadow-lg p-5">
          <form>
            <img
              className="mb-4"
              src="./logo512.png"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Register</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingfname"
                placeholder="first name"
              />
              <label for="floatingfname">First Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatinglname"
                placeholder="last name"
              />
              <label for="floatinglname">Last Name</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                id="floatingdob"
                placeholder="date of birth"
              />
              <label for="floatingdob">Date Of Birth</label>
            </div>
            <div className="form-floating">
              <div className="form-control d-flex justify-content-evenly">
                <div>
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male" className="ms-2">
                    Male
                  </label>
                </div>
                <div className="">
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female" className="ms-2">
                    Female
                  </label>
                </div>
                <div className="">
                  <input type="radio" name="gender" id="others" />
                  <label htmlFor="others" className="ms-2">
                    Others
                  </label>
                </div>
              </div>
              <label>Gender</label>
            </div>
 <div className="form-floating">
   <select className="form-control">
     <option>Kathmandu</option>
     <option>Bhaktapur</option>
     <option>Lalitpur</option>
     <option>Chitwan</option>
     <option>Pokhara</option>
   </select>
   <label>Address</label>
 </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingcPassword"
                placeholder="cPassword"
              />
              <label for="floatingcPassword">Confirm Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" />I agree to terms
                and conditions.
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Register
            </button>
            Already have an account? <Link to={"/signin"}>Sign in</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
