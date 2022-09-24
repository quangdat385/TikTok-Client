import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless';



import Image from "~/components/Image"
import images from "~/assets/images";
import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy

            interactive delay={[800, 0]}
            offset={[-20, 0]}
            placement="bottom"
            render={renderPreview}
        >

            <div className={cx('account-item')} >


                <Link key={data.nickname} to={`/@${data.nickname}`} className={cx('item')}

                >
                    <Image className={cx('avatar')} alt={data.full_name} src={data.avatar || images.noImg} />
                    <div className={cx('info')}>
                        <span className={cx('username')}>
                            {data.nickname}
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </span>
                        <p className={cx('name')}>
                            <span >{data.full_name} </span>
                        </p>

                    </div>
                </Link>
            </div>


        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;