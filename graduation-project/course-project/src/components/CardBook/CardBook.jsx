import './CardBook.scss'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import more from '../../images/more.svg'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toggleFavorite } from '../../helpers/helpers'
import { useEffect } from 'react'

export function CardBook({ data }) {
  const dispatch = useDispatch()

  const [isFavorite, setIsFavorite] = useState(() => {
    const storedIsFavorite = localStorage.getItem(`isFavorite_${data.isbn13}`)
    return storedIsFavorite ? JSON.parse(storedIsFavorite) : false
  })

  function handleAddFavorite() {
    const newIsFavorite = !isFavorite
    toggleFavorite(data, newIsFavorite, dispatch)
    setIsFavorite(newIsFavorite)
    localStorage.setItem(`isFavorite_${data.isbn13}`, JSON.stringify(newIsFavorite))
  }

  useEffect(() => {
    localStorage.setItem('isFavorite', JSON.stringify(isFavorite))
  }, [isFavorite])


  return (
    <div className='book-inner'>
      <h1>dddddddddddddddddd</h1>

      <div className='book-inner__info'>
        <div className='col'>
          <img src={data.image} alt="book" />
          <button
            className={`book-inner__favorites ${isFavorite ? 'active' : ''}`}
            onClick={handleAddFavorite}>
            Add to favorite
          </button>
        </div>
        <div className='col'>
          <ul style={{ paddingLeft: '0rem' }}>
            <li>
              <div>{data.price}</div>
              <div>{data.rating}</div>
            </li>
            <li>
              <div>Authors</div>
              <div>{data.authors}</div>
            </li>
            <li>
              <div>Publisher</div>
              <div>{data.publisher}</div>
            </li>
            <li>
              <div>Language</div>
              <div>{data.language}</div>
            </li>
            <li>
              <div>Format</div>
              <div>11111111111</div>
            </li>
            <li></li>
          </ul>
          <button className="btn" type="button" id='button-addon2' style={{ width: '100%' }}>add to cart</button>
          <p>Preview book</p>
        </div>
      </div>


      <div className='book-inner__content'>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Description">
            {data.description}
          </Tab>
          <Tab eventKey="profile" title="Authors">
            {data.authors}
          </Tab>
          <Tab eventKey="longer-tab" title="Reviews">
            {data.reviews}
          </Tab>
        </Tabs>
      </div>

      <div className='links'>
        <a href='https://ru-ru.facebook.com/'><img src={facebook} alt="facebook" /></a>
        <a href='https://twitter.com/?lang=ru'><img src={twitter} alt="twitter" /></a>
        <a href='https://www.google.by/'><img src={more} alt="more" /></a>
      </div>
    </div>
  )
}
