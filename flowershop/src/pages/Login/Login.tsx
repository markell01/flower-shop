import { useNavigate } from 'react-router'
import { ToastProps } from './interface'
import style from './Login.module.css'

const Login = ({confirmToast}: ToastProps) => {
    const navigate = useNavigate();

    const confirmLogin = (e: any) => {
        e.preventDefault()
        confirmToast()
        navigate('/')
    }

    return (
        <>
            <div className={style.main}>
                <div className={style.decorations}>
                    <img src="/nature (1).png" alt="" style={{ position: 'absolute', top: '69%', left: '5%', width: '400px', height: '400px' }} />
                    <img src="/nature (2).png" alt="" style={{ position: 'absolute', left: '84%', width: '400px', height: '400px', transform: 'rotate(180deg)' }} />
                    <img src="/alpine-forget-me-not.png" alt="" style={{ position: 'absolute', top: '69%', left: '64%', width: '400px', height: '400px'}} />
                    <img src="/nature (3).png" alt="" style={{ position: 'absolute', left: '20%', width: '400px', height: '400px', transform: 'rotate(180deg)' }} />
                </div>

                <div className={style.log_window}>
                    <p className={style.main_text}>Login</p>
                    <form onSubmit={confirmLogin} action="" className={style.login_window}>
                        <p className={style.text}>Username</p>
                        <input type="text" className={style.input} />
                        <div className={style.password}>
                            <p className={style.text}>Password</p>
                            <a href="/login" className={style.forgot_password}>Forgot password?</a>
                        </div>
                        <input type="password" className={style.input} />
                        <button type={'submit'} className={style.button}>
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login