"use client"
import React, {FormEventHandler, useState} from 'react'
import S from './_style/login.module.scss'
import Link from 'next/link'
import axios from 'axios'

const onLogin = async (values:{email:string; password:string;}) => {
    const result = await axios.post("url"+"/user/auth/login", values)
    console.log(JSON.stringify(result))
    alert(JSON.stringify(result))

    localStorage.setItem("aToken", result.data.accessToken)
    localStorage.setItem("rToken", result.data.refreshToken)
}

const onLogout = () => {
    localStorage.removeItem("aToken")
    localStorage.removeItem("rToken")
}

const Page = () => {
    const [values, setValues] = useState({email: "", password: ""});
    const handleChange = (e:any) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        //e.preventDefault()
        alert(JSON.stringify(values, null, 2))
        onLogin(values)
    }

    return (
        <div className={S.login_container}>
            <form onSubmit={handleSubmit}>
                <h1>로그인</h1>
                <div className={S.login_input_div}>
                    <input type='email' name="email" placeholder='이메일 주소' id='email' value = {values.email} onChange={handleChange} />
                    <input type='password' name="password" placeholder='비밀번호' id='password' value = {values.password} onChange={handleChange} />
                    
                    <div className={S.login_check_div}>
                        <input type='checkbox' id='check'/>
                        <p>로그인 상태 유지</p>
                    </div>
                </div>
                <button type='submit' className={S.login_button}>
                    <p>로그인</p>
                </button>
            </form>
            <Link href='/accounts/signup'>
                <p>계정 생성</p>
            </Link>
            <p>비밀번호 찾기</p>
        </div>
    )
}

export default Page