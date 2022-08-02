import Tippy from "@tippyjs/react/headless";
import className from 'classnames/bind';
import styles from './Menu.module.scss'

import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItem from "./MenuItem";

const cx= className.bind(styles)

function Menu({children,items=[]}) {
    
    const renderItems= () => {
        return items.map((item, index)=>(
            <MenuItem key={index} data={item}/>
        )    
        )
    }
    
    return ( 
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs)=>(
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        > 

            {children}

        </Tippy> 


    );
}

export default Menu;