import React from 'react'
import ArrowLeftIcon from '../../Images/ArrowLeftIcon';
import ArrowRightIcon from '../../Images/ArrowRightIcon';
import './Pagination.css'

const Pagination = ({ changePaginationValue, numberOfPageSelector, actuallySelectPage }) => {

    const position = () => {
        if (actuallySelectPage > 3 && actuallySelectPage <= numberOfPageSelector - 2 && numberOfPageSelector > 4)
            return (actuallySelectPage - 3) * 2.5;
        else if (actuallySelectPage === numberOfPageSelector - 1 && numberOfPageSelector > 4)
            return (actuallySelectPage - 4) * 2.5;
        else if (actuallySelectPage <= 3 && numberOfPageSelector > 4)
            return 0;
    }

    return (
        <div className='pagination'>
            <div className={`page-selector ${actuallySelectPage < numberOfPageSelector ? 'clickable-item' : ''}`} onClick={() => { if (actuallySelectPage > 1) changePaginationValue(actuallySelectPage - 1); document.documentElement.scrollTop = 0 }}><ArrowLeftIcon /></div>
            <div className='wrap'>
                <div className='selectors' style={{ left: `${-position()}rem` }}>
                    {[...new Array(numberOfPageSelector < 5 ? 5 : numberOfPageSelector)].map((item, index) =>
                        <div key={index} className={`page-selector ${actuallySelectPage === index + 1 ? 'active' : ''} ${index < numberOfPageSelector ? 'clickable-item' : 'disable'} `} onClick={() => { if (index < numberOfPageSelector) changePaginationValue(index + 1); window.scrollTo(0, 0) }}>{index + 1}</div>
                    )}
                </div></div>
            <div className={`page-selector ${actuallySelectPage < numberOfPageSelector ? 'clickable-item' : ''}`} onClick={() => { if (actuallySelectPage < numberOfPageSelector) changePaginationValue(actuallySelectPage + 1); document.documentElement.scrollTop = 0 }}><ArrowRightIcon /> </div>
        </div>
    )
}

export default Pagination