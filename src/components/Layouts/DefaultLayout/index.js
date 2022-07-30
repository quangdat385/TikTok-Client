import className from 'classnames/bind'
import styles from "./DefaultLayout.module.scss"

import Header from "../components/Header";
import SideBar from "./SideBar";

const cx= className.bind(styles)


function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

