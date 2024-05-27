import React from 'react'
import S from './_style/login.module.scss'
import Link from 'next/link'
const Page = () => {
    return (
        <div className={S.login_container}>
            <h1>로그인</h1>
            <div className={S.login_input_div}>
                <input type='email' placeholder='이메일 주소' id='text' />
                <input type='password' placeholder='비밀번호' id='text' />
                <div className={S.login_check_div}>
                    <input type='checkbox' id='check' />
                    <p>로그인 상태 유지</p>
                </div>
            </div>
            <button type='button' className={S.login_button}>
                <p>로그인</p>
            </button>
            <Link href='/accounts/signup'>
                <p>계정 생성</p>
            </Link>
            <p>비밀번호 찾기</p>
        </div>
    )
}

export default Page