import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Image from "~/components/Image"
import styles from './AccountItem.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(styles);

function AccountItem({ data, setShowResult }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}
            onClick={() => setShowResult(false)}
        >
            <Image className={cx('avatar')} alt={data.full_name} src={data.avatar || images.noImg} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span >{data.full_name} </span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    setShowResult: PropTypes.func,
}
export default AccountItem;