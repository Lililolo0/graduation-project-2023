import './Book.scss'
import { SubscribeForm } from '../../components/SubscribeForm/SubscribeForm'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import more from '../../images/more.svg'



export function Book() {

  return (
    <div className='book'>
      <div className='container' style={{ width: '1120px' }}>
        <div className='book-layout'>

          <div className='book-inner'>
            <h1>dddddddddddddddddd</h1>

            <div className='book-inner__info'>
              <div className='col'>
                <img src="#" alt="book" />
              </div>
              <div className='col'>
                <ul style={{ paddingLeft: '0rem' }}>
                  <li>
                    <div>$$$$$</div>
                    <div>*******</div>
                  </li>
                  <li>
                    <div>Authors</div>
                    <div>1111111</div>
                  </li>
                  <li>
                    <div>Publisher</div>
                    <div>1111111</div>
                  </li>
                  <li>
                    <div>Language</div>
                    <div>11111111</div>
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
                  вставить описание книги
                </Tab>
                <Tab eventKey="profile" title="Authors">
                  авторы
                </Tab>
                <Tab eventKey="longer-tab" title="Reviews">
                  обзор/ отзывы
                </Tab>
              </Tabs>
            </div>

            <div className='links'>
              <a href='https://ru-ru.facebook.com/'><img src={ facebook } alt="facebook" /></a>
              <a href='https://twitter.com/?lang=ru'><img src={ twitter } alt="twitter" /></a>
              <a href='https://www.google.by/'><img src={ more } alt="more" /></a>


            </div>
          </div>




          <SubscribeForm />



          <div className='book-similar'>
            <h2>SIMILAR BOOKS</h2>
          </div>

        </div>
      </div>

    </div>
  )
}
