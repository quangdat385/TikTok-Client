import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


import styles from './AccountItem.module.scss'


const cx =classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}  alt="Hoaaa" src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1659283200&x-signature=g3JTkgZ1ZIls3qKGpVt93FryFNs%3D"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span >Nguyen Thi Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenthihoa</span>
            </div>
        </div>
    );
}

export default AccountItem;