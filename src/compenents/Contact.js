import React from 'react'
import "./Contact.css"
function contact() {
  return (
    <div className='contact-form'>
      <h2>Contactez-nous</h2>
      <form className='lo'>
  <label for="name">Nom :</label>
  <input type="text" id="name" name="name" required></input> <br></br>
   <label for="email">Email :</label>
  <input type="email" id="email" name="email" required></input> <br></br>

  <label for="message">Message :</label>
  <p className='gg'>Veuillez saissez le message que vous souhaitez l'envoyer</p>
  <textarea id="message" name="message" required></textarea> <br></br>

  
  <button type="submit">Envoyer</button>

      </form>
    </div>
  )
}

export default contact




 



