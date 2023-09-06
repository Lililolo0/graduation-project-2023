import React from 'react'
import './AllBooks.scss'
import { CardMain } from '../../components/CardMain/CardMain'
// import { fetchBooks } from '../../redux/booksSlise'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { RotatingLines } from 'react-loader-spinner'

export function AllBooks() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.newBooks)

  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])


  // здесь сделать пагинацию



  if (loading) {
    return (
      <div className='d-flex justify-content-center' style={{ marginTop: '400px' }}>
      <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />
      </div>
    )
  }

  if (error) {
    return <p>{error}</p>
  }


  function renderBooks() {
    return data.map((book) => <CardMain key={book.isbn13} data={book} />)}


  return (
    <div className='all-books'>
      <div className='container' style={{ width: '1120px' }}>
        <div className='all-books__inner'>
          <h1 className='all-books__header'>New Releases Books</h1>
          <div className='all-books__cards'>
            {renderBooks()}
          </div>
        </div>
      </div>
    </div>
  )
}
