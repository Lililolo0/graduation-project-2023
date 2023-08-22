import React from 'react'
import './AllBooks.scss'
import { CardMain } from '../../components/CardMain/CardMain'
// import { fetchBooks } from '../../redux/booksSlise'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

export function AllBooks() {
  const dispatch = useDispatch()
  const { data, loading, error} = useSelector((state) => state.newBooks)
console.log(data)

  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className='all-books'>
      <div className='container'>
        <div className='all-books__inner'>
        {data.map((post) => (
          <CardMain key={post.isbn13} data={post} />
        ))}
        </div>
      </div>
    </div>
  )
}
