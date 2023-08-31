import './CardFavorite.scss'



export function CardFavorite() {


  return (
    <div className='card-favorite'>
      <div className='card-favorite__image'>
        <img src='#' alt='book' />
      </div>
      <div className='card-favorite__content'>
        <h5 className='card-favorite__title'>dftghhrt</h5>
        <p className='card-text'>автор и дата</p>
        <div className='card-footer'>
          <div className='card-costs'>10000$</div>
          <div className='card-raiting'>*****</div>
        </div>


      </div>
    </div>
  )
}
