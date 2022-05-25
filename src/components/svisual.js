import React from 'react'

function svisual() {
  return (
    <div >
        
    <div className="card text-center bg-dark">
    <iframe
            width="541"   height="260"
            src="https://thingspeak.com/channels/1729242/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Humedad&type=line"
          ></iframe>
      <div className="card-body text-light">
        <h4 className="card-title"></h4>
        <p className="card-text text-secondary"></p>
        

      </div>
         
        
    </div>
    </div>
  )
}

export default svisual