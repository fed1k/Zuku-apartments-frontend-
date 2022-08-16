import React from 'react'
import '../css/auth_page.css'
import homeIcon from '../img/icons8-real-estate-96.png';
import doorKey from '../img/icons8-key-96.png';

export default function AuthPage() {
  return (
    <div id="auth_page">
      <header id="auth-header">
        <img src={homeIcon} alt="Home" />
        <img src={doorKey} alt="Keys" />
      </header>
      <section>
        <h1>Book a comfy apartment</h1>
        <p>
          Vaincu insensé majesté la ce approchons et dit.
          Abondent approchons tes déplore air visage a flanc.
          Qui chaque pleure florentines grâces l'art de un,  tes atrocement
          d'athlete faite son. Le la pleurs fait le tout qui dans, monstre majesté
        </p>
        <div class="actions">
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
      </section>
    </div>
  )
}
