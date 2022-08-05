import classNames from 'classnames/bind'
import Button  from "~/components/Button";
import styles  from "./Menu.module.scss"

const cx =classNames.bind(styles)

function MenuItem({data,onClick}) {
    const classes=cx('menu-item',{
        separate:data.separate,
    })
    return (
        <Button  className={classes} 
            onClick={onClick}
            leftIcon={data.icon} 
            to={data.to?data.to:null} >
            {data.title}
        </Button>
    );

    
}

export default MenuItem;