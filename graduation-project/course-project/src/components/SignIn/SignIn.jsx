import './SignIn.scss'

export function SignIn() {

  return (
    <div className='sign-in'>
      <div className='container'>
        <div className='sign-in-form'>
          <div className='sign-in-form__inner'>
            <form>
              <div className='form__email'>
                <label className='form__label'>Email address</label>
                <input type='email' className='form-control' placeholder='Your email' id='input-email' />
              </div>

              <div className='form__password'>
                <label className='form__label'>Password</label>
                <input type='email' className='form-control' placeholder='Your password' id='input-password' />
              </div>
              <p>Forgot password?</p>
              <button className="btn" type="button" id='button-addon2' style={{ width: '480px' }}>Sign in</button>
            </form>
          </div>




        </div>
      </div>

    </div>
  )
}
