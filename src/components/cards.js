import React from 'react'
import Card1 from './card'
import '../estilos/cards.css'

const cardis=[
{
  id:1,
  title:'Sensor Acelerometro',
  image:"https://thingspeak.com/channels/1754544/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Acelerometro&type=line&xaxis=Tiempo&yaxis=Grados&yaxismax=90&yaxismin=0",
  text:""


},
{
  id:2,
  title:'Sensor Humedad',
  image:"https://thingspeak.com/channels/1754544/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Humedad&type=line&xaxis=Tiempo&yaxis=Porcentaje+de+humedad&yaxismax=100&yaxismin=0",
  text:""
          
},
{
  id:3,
  title:'Sensor Vibracion',
  image:"https://thingspeak.com/channels/1754544/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Vibracion&type=line&xaxis=Tiempo&yaxismax=5&yaxismin=0",
  text:""
        
}

]


function cards() {
  return (
    <div className='container' d-flex justify-content-center bg-info>
        <div className="row">
          {
            cardis.map(car=>(
              <div className="col-md-5" key={car.id}>
            <Card1 title={car.title} imgSource={car.image} text={car.text}/>
          </div>
            ))
          }
          
        </div>
        
    </div>
  )
}

export default cards