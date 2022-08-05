import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faCircleQuestion, faCircleXmark, faCloudUpload, faEarthAsia, faEllipsisVertical, faMagnifyingGlass, faMessage,  faSpinner, faUser, faCoins, faGears } from '@fortawesome/free-solid-svg-icons'
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import {  useState } from 'react';


import {Wrapper as PopperWrapper} from '~/components/Popper/'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button'
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx= className.bind(styles)
const MEMU_ITEMS=[
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: "Enghlish",
        children:{
            type:"Language",
            data:[
            
                {
                    type:"language",
                    code:"en", 
                    title:"Enghlish",
                },
                {
                    type:"language",
                    code:"vi", 
                    title:"Viet Nam",
                    
                    
                }
            ]
        }
        
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feedback and Help",
        to:"/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: "Keyboard shortcuts",
        
    },
]

function Header() {
    const [searchResult,setSearchResult]=useState([])
    const currentUser=true;
    
    // useEffect(()=>{
        
            
        
    // })


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

    const handleMenuChange =(menuItem) => {
        switch(menuItem.type) {
            case "language":

                break;
            default:    
        }
    }



    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok"  />
            </div>

            <TippyHeadless
                visible={searchResult.length>0}
                render={(attrs)=>(
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PopperWrapper>
                    </div>
                )}
                interactive
            
            >
                <div className={cx('search')}>
                    <input 
                        placeholder="Search accounts and videos" 
                        spellCheck={false}
                        name="search"
                        value={searchResult}
                        onChange={(e)=>setSearchResult(e.target.value)}
                    />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>   
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </TippyHeadless>
            <div className={cx('actions')}>
                {currentUser?(
                    <>
                        <Tippy content="Upload Videos">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload}/>
                            </button>
                        </Tippy>
                        <Tippy content="Message">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage}/>
                            </button>
                        </Tippy>
                        <Tippy content="Help ?">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCircleQuestion}/>
                            </button>
                        </Tippy>
                        
                    </>
                ):(
                    <>
                        <Button  text >Upload</Button>
                        <Button  primary >Log in</Button>
                    
                    </>
                )}
                

                <Menu items={currentUser ? userMenu :MEMU_ITEMS} onChange={handleMenuChange}>
                    {currentUser?(
                            
                            <img className={cx("user-avatar")} src={images.avatar} 
                                alt="Nguyen Quang Dat"/>
                        
                    ):(
                        
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                    )}    
                </Menu>
            </div>
        </div>
    </header>)
}

export default Header;