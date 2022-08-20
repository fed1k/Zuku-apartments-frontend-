import React from 'react';
import '../css/auth_page.css';
import homeIcon from '../img/icons8-real-estate-96.png';
import doorKey from '../img/icons8-key-96.png';
import loginModal from './auth/loginModal';
import signUpModal from './auth/signupModal';

export default function AuthPage() {
  return (
    <div id="auth_page">
      <header id="auth-header">
        <img src={homeIcon} alt="Home" />
        <img src={doorKey} alt="Keys" />
      </header>
      <section>
        <h1>Welcome to zuku's apartments !</h1>
        <h3>
        Do you dream of comfort, class, luxury and peace ? <br/>
        Do you care about your well-being and privacy ? 
        </h3>
        <p>
        Then entrust your stays and vacations to Zuku Apartments. Whether you are alone, with family or friends, 
        come and enjoy a pleasant and unique experience by choosing one of our apartments in different cities 
        around the world. 
        </p>
        <div className="actions">
          <button onClick={() => signUpModal()} type="button">Sign up</button>
          <button onClick={() => loginModal()} type="button">Sign in</button>
        </div>
      </section>
    </div>
  );
}
