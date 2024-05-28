import React from 'react'
import S from './_style/nav.module.scss';
import Link from 'next/link';
//href="/team/make_up"
const Nav = () => {
    return (
        <nav className={S.nav_container}>
            <Link href="/main" className={S.logo_font}>LoTs</Link>
            <Link href="/main" id='nav_font'>
                <p>전적 검색</p>
            </Link>
            <Link href="/main/team" id='nav_font'>
                <p>팀 구성</p>
            </Link>
            <Link href="/main" id='nav_font'>
                <p>팀 구하기</p>
            </Link>
            {
                true ?
                    (
                        <Link href="/main/accounts/login" id='nav_login'>
                            <p>로그인</p>
                        </Link>
                    ) :
                    (<button type='button'>
                        <p>로그아웃</p>
                    </button>)
            }
        </nav>
    )
}

export default Nav