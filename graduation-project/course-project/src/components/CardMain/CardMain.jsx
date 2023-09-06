import React from 'react';
import './CardMain.scss'
import { NavLink } from 'react-router-dom'


export function CardMain({ data }) {

  return (
    <div className='card-main'>

      <div className='card' >
        <div>
          <NavLink to={`/book/${data.isbn13}`} div className='card-img'>
            <img src={data.image} className='card-img__inner' alt='book' />
          </NavLink>
        </div>

        <div className='card-body'>
          <h5 className='card-title'>{data.title}</h5>
          <p className='card-text'>{data.authors}, {data.year}</p>
          <div className='cards-footer'>
            <div className='card-costs'>{data.price}</div>
            <div className='card-rating'></div>
          </div>
        </div>
      </div>

    </div>
  )
}
