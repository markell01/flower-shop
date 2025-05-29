import axios from 'axios';
import { Registration } from './interface'
import style from './Register.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProps } from '../Login/interface';

const Register = ({confirmToast}: ToastProps) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Registration>({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const result = await axios.post('http://localhost:3000/auth/register', formData)
            if (!result) {
                throw new Error('Something went wrong!')
            }
            confirmToast()
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
      };

    return (
        <>
            <div className={style.main}>
                <div className={style.decorations}>
                    <img
                        src="/nature (1).png"
                        alt=""
                        style={{ position: 'absolute', top: '69%', left: '5%', width: '400px', height: '400px' }} />
                    <img
                        src="/nature (2).png"
                        alt=""
                        style={{ position: 'absolute', left: '84%', width: '400px', height: '400px', transform: 'rotate(180deg)' }} />
                    <img
                        src="/alpine-forget-me-not.png"
                        alt=""
                        style={{ position: 'absolute', top: '69%', left: '64%', width: '400px', height: '400px' }} />
                    <img
                        src="/nature (3).png"
                        alt=""
                        style={{ position: 'absolute', left: '20%', width: '400px', height: '400px', transform: 'rotate(180deg)' }} />
                </div>

                <div className={style.log_window}>
                    <p className={style.main_text}>Register</p>
                    <form onSubmit={handleSubmit} className={style.login_window}>
                        <p className={style.text}>Firstname</p>
                        <input 
                            type="text"
                            name="firstname"
                            className={style.input} 
                            required
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                        <p className={style.text}>Lastname</p>
                        <input 
                            type="text" 
                            className={style.input} 
                            required
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                        <p className={style.text}>Username</p>
                        <input 
                            type="text"
                            name="username"
                            className={style.input}
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <div className={style.password}>
                            <p className={style.text}>Password</p>
                        </div>
                        <input 
                            type="password"
                            name="password"
                            className={style.input}
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit" className={style.button}>
                            Sign up
                        </button>
                    </form>
                    <p className={style.underButton_text}>Already have an account? <a className={style.sign_in} href="/login">Sign in!</a></p>
                </div>
            </div>
        </>
    )}

export default Register 