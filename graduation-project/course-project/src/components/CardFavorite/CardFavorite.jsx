import './CardFavorite.scss'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../helpers/helpers'



export function CardFavorite({ data }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useDispatch()

  function handleAddFavorite() {
    const newIsFavorite = !isFavorite
    toggleFavorite(data, newIsFavorite, dispatch)
    setIsFavorite(newIsFavorite)
    localStorage.setItem(`isFavorite_${data.isbn13}`, JSON.stringify(newIsFavorite))
  }

  useEffect(() => {
    const storedIsFavorite = localStorage.getItem('isFavorite')
    if (storedIsFavorite) {
      setIsFavorite(JSON.parse(storedIsFavorite))
    }
  }, [])

  if (!isFavorite) {
    return <></>
  }

  return (
    <div className='card-favorite'>
      <div className='card-favorite__image'>
        <img src={data.image} alt='book' />
      </div>
      <div className='card-favorite__content'>
        <h5 className='card-favorite__title'>{data.title}</h5>
        <p className='card-text'>{data.authors}, {data.year}</p>
        <div className='card-footer'>
          <div className='card-costs'>{data.price}</div>
          <div className='card-raiting'>{data.rating}</div>
        </div>
      </div>
      <div className='card-favorite__button'>
        <button onClick={handleAddFavorite}>Add to favorites</button>
      </div>
    </div>
  )
}
