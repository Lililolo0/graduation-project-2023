import './Book.scss'
import { SubscribeForm } from '../../components/SubscribeForm/SubscribeForm'
import { CardBook } from '../../components/CardBook/CardBook'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBook } from '../../redux/bookSlice'
import { useParams } from 'react-router-dom'


export function Book() {
  const { isbn13 } = useParams()
  const dispatch = useDispatch()

  const { bookDetails } = useSelector(state => state.bookDetails)

  useEffect(() => {
    if (isbn13)
    dispatch(fetchBook({ isbn13 }))
  }, [dispatch, isbn13])

  return (
    <div className='book'>
      <div className='container' style={{ width: '1120px' }}>
        <div className='book-layout'>

          <CardBook data={bookDetails} />
          <SubscribeForm />

          <div className='book-similar'>
            <h2>SIMILAR BOOKS</h2>

          </div>

        </div>
      </div>
    </div>
  )
}
