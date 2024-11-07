import React, { useEffect, useState } from 'react'
import { getAllCompaniesApi } from '../services/allApi'
import { Link } from 'react-router-dom'

function Home() {
    const [allCompanies, setAllCompanies] = useState([])
    const [token, setToken] = useState("")

    const BaseUrl = "http://hawk.ecogo.co.in/"

    const getAllCompanies = async () => {
        const reqHeader = {
            'Authorization' : `${token.token_type} `
        }
        const result = await getAllCompaniesApi()
        console.log(result);
        setAllCompanies(result.data)

    }

    useEffect(() => {
        getAllCompanies()
        if (sessionStorage.getItem('token')) {
            setToken(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [])
    return (
        <>
            {token ?
                <div className="container-fluid">
                    <h1 className='fw-bold mt-5'>Welcome User!</h1>
                    <div className='w-100 d-flex'>
                        <div className="ms-auto border rounded shadow py-5 px-4">
                            <h5 className='text-primary'>Use Data</h5>
                            <hr />
                            <h6>Username : <span></span></h6>
                            <h6>Email : <span></span></h6>
                        </div>
                    </div>

                    <div className="w-100 mt-5">
                        <h3 className='text-center'>All Companies</h3>
                        <div className="row w-100 p-4">

                            {allCompanies.map((item) => (
                                <div className="col-md-4 p-3">
                                    <div className="card p-4 ">
                                        <img src={BaseUrl+item.logo} alt="" width={'100%'} />
                                        <h6>Website : <a href={item.website}>{item.website}</a></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <div style={{ height: '100vh' }} className="container-fluid d-flex align-items-center justify-content-center flex-column">
                    <h3>You are not Logged in</h3>
                    <Link to={'/'} className='btn btn-dark'>Back to Login</Link>
                </div>
            }
        </>
    )
}

export default Home