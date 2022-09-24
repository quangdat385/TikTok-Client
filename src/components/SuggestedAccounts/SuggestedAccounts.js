import PropTypes from "prop-types"
import classNames from 'classnames/bind'
import { useState, useEffect } from "react"
import * as searchServices from "~/services/searchServices"


import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'


const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchApi = async () => {

            const result = await searchServices.show()
            setUsers(result)

        }
        fetchApi()
    }, [])
    console.log(users)
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {users.map(user => (
                <AccountItem key={user.nickname} data={user} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>

    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}
export default SuggestedAccounts;