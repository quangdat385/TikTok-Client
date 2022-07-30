import className from 'classnames/bind'
import styles from "./SideBar.module.scss"

const cx= className.bind(styles)

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SideBar</h2>
        </aside>
    )
}

export default SideBar;