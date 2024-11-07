import React, { useState } from 'react'
import { loginApi } from '../services/allApi'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    const reset = () => {
        setLoginData({
            username: "",
            password: ""
        })
    }

    const login = async () => {
        const { username, password } = loginData
        if (!username || !password) {
            alert('Please fill the form completly')
        }
        else {
            // const user = new 
            try {
                const result = await loginApi(loginData)
                console.log(result.status);
                if (result.status == 200) {
                    alert('login successfull')
                    sessionStorage.setItem('token', JSON.stringify(result.data))
                    navigate('/home')
                }
            } catch (error) {
                alert('Something went wrong')
            }

        }
    }

    return (
        <>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center py-5">
                <h2 className='fw-bold mt-5'>Login Form</h2>
                <form className='p-5 mt-4 border shadow transparent rounded w-25'>
                    <div>
                        <label htmlFor="">Username</label>
                        <input value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} type="text" className="form-control mt-2" placeholder='Username' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Password</label>
                        <input value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type="password" className="form-control mt-2" placeholder='password' />
                    </div>
                    <div className='mt-3 d-flex justify-content-evenly'>
                        <button type='button' onClick={reset} className='btn btn-danger'>Reset</button>
                        <button type='button' onClick={login} className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login