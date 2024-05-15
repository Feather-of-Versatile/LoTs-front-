"use client"
import React, { useState } from 'react'
import S from './_style/signup.module.scss'
const page = () => {
    const [singCheck, setSingCheck] = useState(false);
    const emailCheck = () => {
        setSingCheck(!singCheck);
    }
    return (
        <div className={S.signup_container}>
            <div className={S.signup_intro_div}>
                <h2>
                    라츠에 합류하여 보다 <br /> 편하게 팀을 구성해보세요!
                </h2>
                <h1>
                    라츠 계정 생성
                </h1>
            </div>
            <div className={S.signup_item_div}>
                <div className={S.signup_div}>
                    <input type='email' placeholder='이메일 주소' id='text' />
                    <input type='password' placeholder='비밀번호' id='text' />
                    <input type='password' placeholder='비밀번호 확인' id='text' />
                    <button type='button' className={S.signup_button} onClick={() => emailCheck()}>
                        <p>이메일 확인 전송</p>
                    </button>
                    <button type='button' className={`${S.signup_button} ${singCheck ? '' : S.signup_button_clickd}`}>
                        <p>회원가입</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page