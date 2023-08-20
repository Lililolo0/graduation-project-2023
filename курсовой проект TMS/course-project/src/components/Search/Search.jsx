import search from '../../images/search.svg'
import './Search.scss'

export function Search() {


  return (
    <div className="input" >
      <div className="input-group mb-3" >
        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" placeholder="Search" style={{ borderRadius: '0px' }}/>
        <button className="btn btn-outline-secondary" type="button" style={{ borderRadius: '0px', backgroundColor: 'white', borderLeft: 'none', borderColor: '#dee2e6' }}>
          <img src={ search } alt="search" />
        </button>
      </div>
    </div>
  )
}
