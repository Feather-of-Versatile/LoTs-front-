"use client"
import React, { useState } from 'react'
import S from './_style/team-nav.module.scss'
import LolSvg from '@public/images/lol_icon.svg'
import ValSvg from '@public/images/val_icon.svg'
import TftSvg from '@public/images/tft_icon.svg'
import { ListItem } from 'types'
import { initialList } from '../../_data/data'

const TeamNav = () => {
    const [list, setList] = useState(initialList);

    const button_change = (index: number) => {
        const newList = list.map((item, i) => {
            if (i === index) {
                return { ...item, state: true };
            }
            return { ...item, state: false };
        });
        setList(newList);
    }

    return (
        <div className={S.team_nav_div}>
            {list.map((e, i) => {
                return (
                    <button onClick={() => button_change(i)} type='button' key={e.id} className={S.team_nav_button} style={e.state ? ({ backgroundColor: '#454545' }) : ({})}>
                        <div className={S.team_nav_button_div}>
                            {e.logo}
                            <p>{e.name}</p>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default TeamNav;