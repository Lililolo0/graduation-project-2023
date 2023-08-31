import React from 'react';
import './SubscribeForm.scss'

export function SubscribeForm() {
  return (
    <div className='subscribe-form'>
      <h2>SUBSCRIBE TO NEWSLETTER</h2>
      <p>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder='Your email' aria-describedby="button-addon2" id='input' />
        <button className="btn" type="button" id='button-addon2'>Subscribe</button>
      </div>
    </div>)
}
