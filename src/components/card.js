import React from 'react'
import PropTypes from 'prop-types'
import fb from '../assets/icon/facebook.png'
import ig from '../assets/icon/instagram.png'
import yt from '../assets/icon/youtube.png'

function card({title,imgSource,text}) {
  //console.log(props)
  return (
    <div className="card text-center bg-dark">
      <iframe width="450 "   height="250" src={imgSource} ></iframe>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{text}</p>
        

      </div>
         
        
    </div>
  )
}

card.propTypes = {}

export default card;
