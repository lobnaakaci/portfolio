import React from 'react'
import "./Projet.css"
function Projets({}) {
   
  return (
    <div className='g'>
      <h1>Les projets</h1>
      <div className='pr1'>
      <p className='lolo'>1.Site d'une agence de voyage</p>
      <p className='lom'>Ce projet est réaliser en groupe . Ce site a deux acteurs un <span>administrateur et voyageur</span>.Le voyageur permet de réserver 
      un voyage en entrant ses données professionnelles et bancaires , et l'agence fait tout pour lui, et l'administrateur organise les 
      lieux et gère les listes de clients aussi. </p>
      <p className='k'>Les environnement de développement </p>
      <p> Visual Studio Code </p>
      <p className='m'>Les langages et Framework utilisé</p>
      <p>HTML, JAVASCRIPT,Vue.js</p>

      <p className='lolo'>2.Calculatrice</p>
      <p className='lom'>Ce projet est réaliser en groupe . Cette application permet de faire des opérations l'addition , la soustraction , la division ,la multiplication
      en respectant des règles
      </p>
      <p className='k'>Les environnement de développement </p>
      <p> Visual Studio </p>
      <p className='m'>Les langages  utilisé</p>
      <p>C#</p>


</div>
    </div>
  )
}

export default Projets

