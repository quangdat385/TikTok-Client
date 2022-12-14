import Tippy from "@tippyjs/react/headless";
import className from 'classnames/bind';
import PropTypes from 'prop-types'


import { useState } from 'react'
import styles from './Menu.module.scss'
import Header from './Header'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from "./MenuItem.js";

const cx = className.bind(styles)
const defaultFn = () => { }


function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1]
    console.log(current)

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((pre) => [...pre, item.children])
                        } else {
                            onChange(item)
                        }
                    }}

                />
            )
        }
        )
    }
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.type} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };


    return (
        <Tippy
            offset={[12, 8]}
            delay={[0, 500]}
            hideOnClick={hideOnClick}
            interactive
            placement='bottom-end'
            render={renderResult}


            onHide={handleReset}
        >

            {children}

        </Tippy>


    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,

}


export default Menu;