import React from "react";
import './register.scss'

export default function Register(){
  return (
    <div className="register">
      <div className="top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/245px-Netflix_2015_logo.svg.png"  alt="" className="logo" />

        <button className="loginButton">Sign In </button>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Wath anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input">
          <input type="text" />
        </div>
      </div>

    </div>
  )
}