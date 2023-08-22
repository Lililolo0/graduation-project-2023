import React from 'react';
import './CardMain.scss'


export function CardMain({ data }) {


  return (
    <div className='card-main'>
      <div className  ='card' >
        <img src={data.image} className='card-img-top' alt='book' />
          <div className='card-body'>
            <h5 className='card-title'>{data.title}</h5>
            <p className='card-text'>{data.authors}, {data.year}</p>
            <div className='cards-footer'>
                  <div className='card-costs'>{data.price}</div>
                  <div className='card-raiting'></div>
            </div>
          </div>
      </div>
    </div>
  )
}
