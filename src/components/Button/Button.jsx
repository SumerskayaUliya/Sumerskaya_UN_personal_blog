import s from './Button.module.css'

const Button = ({ style, callback, children }) => {
    return (
        <button className={s.btn} onClick={callback} style={style}>
            {children}
        </button>
    );
};

export default Button;