import classNames from "classnames/bind";
import {Link} from 'react-router-dom'
import styles from './Button.module.scss';

const cx= classNames.bind(styles)

function Button({to,href,onClick,children,
                outline=false,primary=false,
                small=false,
                large=false,
                text=false,
                disabled=false,
                rounded=false,
                leftIcon,
                rightIcon,
                className,
                ...passProps}) {
    let Component='button';
    const props={
        onClick
    };
    if (to) {
        props.to=to;
        Component=Link;
    }else if (href) {
        props.href=href;
        Component="a";
    }
    if(disabled) {
        Object.keys(props).forEach(key=>{
            if(key.startsWith('on'&&typeof props[key]==="function")){
                delete props[key]
            }
        })
    }

    const classes=cx('wrapper',{
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]:className
    })

    return (  
        <Component className={classes} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;