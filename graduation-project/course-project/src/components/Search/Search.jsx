import search from '../../images/search.svg'
import './Search.scss'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'

export function Search() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(event) {
   setQuery(event.target.value)
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   navigate(`/search/${query}`)
  // }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   navigate({
  //     pathname: '/search',
  //     search: `?query=${query}`
  //   })
  // }

  function handleSubmit(event) {
    event.preventDefault()
    const pathParts = location.pathname.split('/')

    if (pathParts[1] === 'posts') {
      navigate(`/search/${query}`)
    }
    setQuery('')
  }


  return (
    <div className="input" >
      <form onSubmit={handleSubmit} className="input-group mb-3" >
        <input
          type="search"
          className="form-control"
          value={query}
          onChange={handleSearch}
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          placeholder="Search"
          style={{ borderRadius: '0px' }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ borderRadius: '0px', backgroundColor: 'white', borderLeft: 'none', borderColor: '#dee2e6', height: '37px', width: '45px' }}>
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  )
}
