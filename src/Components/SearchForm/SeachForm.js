import React, { useEffect, useState } from 'react'
import CloseIcon from '../../Images/CloseIcon'
import SeachIcon from '../../Images/SearchIcon'

import './SeachForm.css'

const SeachForm = ({ dataToSeach, seachResult }) => {

    const [inputVal, setInputVal] = useState('');
    const handleInputVal = event => {
        setInputVal(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputVal !== '') {

                let foundTrends = [];

                const regexp = new RegExp(`${inputVal}`, 'gi');

                for (let i = 0; i < dataToSeach.length; i++) {

                    if (dataToSeach[i].title.match(regexp))

                        foundTrends.push(dataToSeach[i]);
                }
                seachResult(foundTrends);
            }
            else seachResult(dataToSeach);
        }, 500);
        return () => clearTimeout(timer);
    }, [inputVal, seachResult, dataToSeach]);


    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <label forhtml="search" className="search-label">Search</label>
            <div className="relative">
                <div className="search-icon">
                    <SeachIcon />
                </div>
                <input value={inputVal || ''} onChange={e => handleInputVal(e)} type="search" id="search" className="input-text search-input" placeholder="Nazwa postępowania..." required />
                {inputVal && <button type="button" className="search-close" aria-label="Close" onClick={() => setInputVal('')}>
                    <span className="sr-only">Close</span>
                    <CloseIcon />
                </button>}
            </div>
        </form>
    )
}

export default SeachForm