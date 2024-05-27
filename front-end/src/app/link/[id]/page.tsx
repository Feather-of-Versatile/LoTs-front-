'use client'
import React, { useState } from 'react'
import S from '../../accounts/signup/_style/signup.module.scss'
const page = () => {
    const [singCheck, setSingCheck] = useState(false);
    const [riotID, setRiotID] = useState('');
    const onChange = (text: string) => {
        setRiotID(text)
    }
    const emailCheck = () => {
        setSingCheck(!singCheck);
    }
    return (
        <div className={S.signup_info_div} >
            <input type='text' placeholder='Riot ID' id='text' />
            <input type='text' placeholder='tag' id='text' value={`${riotID}`} onChange={(e) => onChange(e.target.value)} />
            <button type='button' className={S.signup_button} onClick={() => emailCheck()} id='clickd'>
                <p>이메일 확인 전송</p>
            </button>
            <button
                type='button'
                className={`${S.signup_button} ${singCheck ? '' : S.signup_button_clickd}`}
                id={`${singCheck ? ('clickd') : (null)}`}
                disabled={!singCheck}
            >
                <p>회원가입</p>
            </button>
        </div>
    )
}

export default page