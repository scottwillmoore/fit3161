import { InputHTMLAttributes } from "react";

import css from "./input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

// export function Input({ label, name, ...props }: InputProps) {
//     return (
//         <div className={css.inputGroup}>
//             <label htmlFor={name}>{label}</label>
//             <input id={name} name={name} {...props} />
//         </div>
//     );
// }

export function TextInput({ label, name, ...props }: InputProps) {
    return (
        <div className={css.inputGroup}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} {...props} />
        </div>
    );
}

export function PasswordInput({ label, name, ...props }: InputProps) {
    return (
        <div className={css.inputGroup}>
            <label htmlFor={name}>{label}</label>
            <input type="password" id={name} name={name} {...props} />
        </div>
    );
}
