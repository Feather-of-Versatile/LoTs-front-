declare module 'types' {
    type LogoComponent = React.ReactElement<React.SVGProps<SVGSVGElement>>;
    export interface LoginForm {
        email: string;
        password: string;
    }
    export interface SignupForm extends LoginForm {
        verify_password: string;
    }

    export interface ListItem {
        id: string;
        logo: LogoComponent;
        state: boolean;
        name: string
    }
}