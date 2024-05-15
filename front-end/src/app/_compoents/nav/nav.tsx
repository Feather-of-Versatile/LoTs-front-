import React from 'react'
import S from '../nav/_style/nav.module.scss';
import Link from 'next/link';
//href="/team/make_up"
const Nav = () => {
    return (
        <div className={S.nav_container}>
            <Link href="/" className={S.logo_font}>LoTs</Link>
            <Link href="/">
                <p>전적 검색</p>
            </Link>
            <Link href="/">
                <p>팀 구성</p>
            </Link>
            <Link href="/">
                <p>팀 구하기</p>
            </Link>
            {
                true ?
                    (
                        <Link href="/accounts/login">
                            <p>로그인</p>
                        </Link>
                    ) :
                    (<button type='button'>
                        <p>로그아웃</p>
                    </button>)
            }
        </div>
    )
}

export default Nav