import { DetailedHTMLProps, ButtonHTMLAttributes, FunctionComponent } from 'react';
import classes from './Button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FunctionComponent<ButtonProps> = (props) => <button {...props} className={`${props.className} ${classes.button}`}>Holi</button>
