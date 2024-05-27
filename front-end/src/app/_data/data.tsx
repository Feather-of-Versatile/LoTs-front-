import LolSvg from '@public/images/lol_icon.svg'
import ValSvg from '@public/images/val_icon.svg'
import TftSvg from '@public/images/tft_icon.svg'
import { ListItem, LoginForm, SignupForm } from 'types'

export const loginForm: LoginForm = {
    email: '',
    password: '',
}

export const signupForm: SignupForm = {
    email: '',
    password: '',
    verify_password: ''
}

export const initialList: ListItem[] = [
    {
        id: 'lol',
        logo: <LolSvg />,
        state: true,
        name: '리그오브레전드',
    },
    {
        id: 'val',
        logo: <ValSvg />,
        state: false,
        name: '발로란트',
    },
    {
        id: 'tft',
        logo: <TftSvg />,
        state: false,
        name: '전략적 팀전투',
    }
]
