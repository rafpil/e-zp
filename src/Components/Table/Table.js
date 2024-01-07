import React, { useState } from 'react'
import './Table.css'


const Table = ({ theadTh, tbodyData, sort }) => {

    const currentData = new Date();
    const [actuallySorted, setSorted] = useState('');

    return (
        <table className='table'>
            <thead className='darkmode-color-transition'>
                <tr>
                    {theadTh.th.map((item, index) =>
                        <th key={index} style={{minWidth: item.minWidthCol + 'rem'}}><span className={`${actuallySorted === item.td ? 'text-success' : ''}`}>{item.title} {item.isSortAble && <svg  onClick={() => {sort(item.typeToSort, item.td); setSorted(item.td)}} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 inline cursor-pointer" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>}</span></th>
                    )}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) =>
                    <tr key={String(item.id)} className={`${(item.submissionOffersDate2 !== null && currentData < new Date(item.submissionOffersDate2)) ? 'font-extrabold text-black dark:text-white' : ""}`} onClick={() => window.open(item.link, "_blank")}>
                        {theadTh.td.map((el) =>
                            <td key={el}><abbr title='Przejdź do strony porowadzonego postępowania na e-zamowienia.gov.pl'>{item[el]}</abbr></td>)}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table