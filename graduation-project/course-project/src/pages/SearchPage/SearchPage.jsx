import './SearchPage.scss'
import { Search } from '../../components/Search/Search'
import { CardMain } from '../../components/CardMain/CardMain'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { fetchNewBooks } from '../../redux/newBooksSlice'

export function SearchPage () {
  const { searchQuery  } = useParams()
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.newBooks)
  console.log(data)

  useEffect(() => {
    dispatch(fetchNewBooks({ query: searchQuery }))
  }, [dispatch, searchQuery])


  function renderSerchResult() {
    return data.map(book => {
      return <CardMain key={book.isbn13} id={book.id} />
    })
  }

  return(
    <div className='search-page'>
      <div className='container'>
        <div className='search-page__inner'>
          <h1 className='search-page__header'>Search results</h1>
          <div className='search-page__cards'>
            {renderSerchResult()}
          </div>
        </div>
      </div>

    </div>
  )
}
