import React, { useState } from 'react'

const Select = ({eventChange, selectedVal}) => {    

    return (
            <select id="year" value={selectedVal} onChange={e => eventChange(e.target.value)} className="input-text !text-2xl !py-3">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
    )
}

export default Select