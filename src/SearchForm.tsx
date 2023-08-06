import React, { useRef } from 'react'
import arrowIcon from './assets/icon-arrow.svg'

type SearchFormProps = {
    ipQuery: string
    setIpQuery: (ipQuery: string) => void
}

const SearchForm = ({ ipQuery, setIpQuery }: SearchFormProps) => {
    const ipAddressRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIpQuery(ipAddressRef.current?.value ?? ipQuery)
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__input-box">
                <input
                    type="text"
                    className='search__input'
                    placeholder='Search for any IP address or domain'
                    ref={ipAddressRef}
                    defaultValue={ipQuery}
                />
                <button className="search__icon-box">
                    <img src={arrowIcon} alt="search icon" className="search__icon" />
                </button>
            </div>
        </form>
    )
}

export default SearchForm
