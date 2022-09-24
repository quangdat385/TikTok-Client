import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';


import { Wrapper as PopperWrapper } from '~/components/Popper/'
import AccountItem from '~/components/AccountItem';
import styles from "./Search.module.scss"
import { SearchIcon } from '~/components/Icons';
import useDebounce from '~/hooks';
import * as searchServices from "~/services/searchServices";

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef()
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return;
        }
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debouncedValue)
            setSearchResult(result)

        }
        fetchApi()
        setLoading(false)
    }, [debouncedValue])

    const handleClear = () => {

        setSearchValue("")
        setSearchResult([])
        inputRef.current.focus()

    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const SearchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(SearchValue);

        }
    };


    return (
        <div>
            <TippyHeadless
                visible={searchResult.length > 0 && showResult}
                appendTo={() => document.body}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result._id}
                                    setShowResult={setShowResult}
                                    data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                interactive
                onClickOutside={handleHideResult}

            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        name="search"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>

    );
}

export default Search;