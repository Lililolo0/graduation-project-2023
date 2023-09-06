import './SignUp.scss'

export function SignUp() {


  return (
    <div className='sign-up'>

      <div className='sign-un-form'>
        <div className='sign-in-form__inner'>
          <form>
            <div className='form__name'>
              <label className='form__label'>Name</label>
              <input type='text' className='form-control' placeholder='Your name' style={{ width: '480px' }}/>
            </div>

            <div className='form__email'>
                <label className='form__label'>Email address</label>
                <input type='email' className='form-control' placeholder='Your email' style={{ width: '480px' }}/>
              </div>

              <div className='form__password'>
                <label className='form__label'>Password</label>
                <input type='email' className='form-control' placeholder='Your password' style={{ width: '480px' }}/>
              </div>

              <div className='form__confirm-password'>
                <label className='form__label'>Confirm password</label>
                <input type='email' className='form-control' placeholder='Confirm your password' style={{ width: '480px' }}/>
              </div>

              <button className="btn" type="button" id='button-addon2' style={{ width: '480px' }}>Sign up</button>

          </form>
        </div>
      </div>


    </div>

  )
}
