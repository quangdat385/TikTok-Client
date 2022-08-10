import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faCircleQuestion, faEarthAsia, faEllipsisVertical, faUser, faCoins, faGears } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import Image from '~/components/Image'
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';

import Button from '~/components/Button'
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import Search from '~/layouts/components/Search'
import config from "~/config"

const cx = className.bind(styles)
const MEMU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Enghlish",
        children: {
            type: "Language",
            data: [

                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
                {
                    type: "language",
                    code: "en",
                    title: "Enghlish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Viet Nam",


                },
            ]
        }

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",

    },
]

function Header() {

    const currentUser = true;



    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MEMU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":

                break;
            default:
        }
    }



    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}> <img src={images.logo} alt="Tiktok" /></Link>
                </div>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Videos">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <Button text >Upload</Button>
                            <Button primary >Log in</Button>

                        </>
                    )}


                    <Menu items={currentUser ? userMenu : MEMU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={images.avatar}
                                alt="Nguyen Quang Dat"
                            />


                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>)
}

export default Header;