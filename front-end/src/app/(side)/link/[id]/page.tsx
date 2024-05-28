'use client'
import React, { useState } from 'react'
import S from '../../../main/accounts/signup/_style/signup.module.scss'
const Page = () => {
    const [singCheck, setSingCheck] = useState(false);
    const [riotID, setRiotID] = useState('');
    const onChange = (text: string) => {
        setRiotID(text)
    }
    const emailCheck = () => {
        setSingCheck(!singCheck);
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh' }}>
            <div className={S.signup_info_div}>
                <input type='text' placeholder='Riot ID' id='text' />
                <input type='text' placeholder='tag' id='text' value={`${riotID}`} onChange={(e) => onChange(e.target.value)} />
                <button type='button' className={S.signup_button} onClick={() => emailCheck()} id='clickd'>
                    <p>팀 참가</p>
                </button>
            </div>
        </div>
    )
}

export default Page