import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
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
        title: "English",
        to:null,
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: "Feedback and Help",
        to:"/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: "Keyboard shortcuts",
        to:null,
    },
]

function Header() {
    const [searchResult,setSearchResult]=useState([])

    // useEffect(()=>{
        
            
        
    // })
    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok"  />
            </div>

            <Tippy
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
            </Tippy>
            <div className={cx('actions')}>
                <Button  text >Upload</Button>
                <Button  primary >Log in</Button>

                <Menu items={MEMU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </header>)
}

export default Header;