"use client"
import React, { useEffect, useRef, useState } from 'react'
import S from './_style/signup.module.scss'
const Page = () => {
    const [singCheck, setSingCheck] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const emailCheck = () => {
        setSingCheck(!singCheck);
    }
    useEffect(() => {
        const refCurrent = cursorRef.current
        const handleMouseMove = (e: any) => {
            if (refCurrent) {
                const rect = refCurrent.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                console.log(x, y)
                setCoords({ x, y });
            }
        };
        if (refCurrent) {
            refCurrent?.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (refCurrent) {
                refCurrent?.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);
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
            <div className={S.signup_item_div} >
                <div className={S.signup_div} ref={cursorRef} id='container' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => { handleMouseLeave() }}>
                    <div className={S.signup_info_div} >
                        <input type='email' placeholder='이메일 주소' id='text' name='email' />
                        <input type='password' placeholder='비밀번호' id='text' name='password' />
                        <input type='password' placeholder='비밀번호 확인' id='text' name='verify_password' />
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
                    {isHovered ? (
                        <div className={S.overlay} style={{ top: `${coords.y}px`, left: `${coords.x}px` }}></div>) : (null)}
                </div>

            </div>

        </div>
    )
}

export default Page