'use client'
import React from 'react'
import S from './_style/lol.module.scss'
import TeamNav from '../../_compoents/team-nav/team-nav'
import { copyToClipboard } from '../../_compoents/modal/modal'
const Page = () => {
    return (
        <div className={S.lol_container}>
            <div className={S.lol_team_div}>
                <TeamNav />
                <div className={S.lol_team_list}>
                    <div className={S.lol_team_list_item}>
                        너와나버찌너와나버찌너와나버찌#KR1
                    </div>
                </div>
                <button type='button' id='link' onClick={() => copyToClipboard('1')}>
                    <p>링크 복사</p>
                </button>
                <button type='button' id='team'>
                    <p>팀 구성</p>
                </button>
            </div>
            <div className={S.lol_result_div}>
                <div className={S.lol_result_list}>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>B TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>                    <fieldset className={S.lol_result_fieldset}>
                        <legend>A TEAM</legend>
                        <p>asdasdas</p>
                    </fieldset>
                </div>
                <button>
                    <p>
                        팀 구성 공유
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Page