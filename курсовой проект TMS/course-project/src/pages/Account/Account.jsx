import './Account.scss'

export function Account() {

  return (
    <div className='account'>
      <div className='container'>
        <div className='account-inner'>
          <h1>ACCOUNT</h1>
          <form>
            <div className='profile'>
              <h4>Profile</h4>
              <div className='profile__form'>
                <div className="col-md-6">
                  <label className='form-label'>Name</label>
                  <input type='text' className='form-control' placeholder='Ivan Ivanov' />
                </div>
                <div className="col-md-6">
                  <label className='form-label'>Email</label>
                  <input type='email' className='form-control' placeholder='IvanIvamov@mail.ru' />
                </div>
              </div>
            </div>
            <div className='password'>
              <h4>Password</h4>
              <div className='password__form' style={{ alignItems: 'flex-end' }}>
                <div className='col'>
                  <div className="col-md-12">
                    <label className='form-label'>Password</label>
                    <input type='password' className='form-control' />
                  </div>
                  <div className="col-md-12">
                    <label className='form-label'>New password</label>
                    <input type='password' className='form-control' />
                  </div>
                </div>
                <div className='col' >
                  <label className='form-label'>Confirm new password</label>
                  <input type='password' className='form-control' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
