import React, { useState, useEffect } from 'react'
import SeachForm from '../../Components/SearchForm/SeachForm'
import Alert from '../../Components/Alert/Alert';
import Pagination from '../../Components/Pagination/Pagination'
import Table from '../../Components/Table/Table'
import TotalNumberOfRows from '../../Components/TotalNumberOfRows/TotalNumberOfRows';
import Select from '../../Components/Select/select';
import Spinner from '../../Components/Spinner/Spinner';

let reverse = false;

const TrendsView = ({ headerTitile, theadTh, selectYear, fetchData }) => {

  const MAX_SHOWING_ROWS = 10;

  const [trendsJson, setTrendsJson] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(trendsJson.length / MAX_SHOWING_ROWS));

  const [trends, setTrends] = useState(trendsJson.map((item, index) => { item.id = index + 1; return item }));
  const [actualShowingData, setActualShowingData] = useState(trends.slice(0, MAX_SHOWING_ROWS));
  const [paginationActuallyPage, setPaginationActuallyPage] = useState(1);

  const [loading, isLoading] = useState(true);
  const [loading1, isLoading1] = useState(true);

  //const trendsJson = useLoaderData();

  const [yearTrends, setYearTrends] = useState('2022');

  // useEffect(() => {
  //   const data = [];
  //   let z = [];
  //   axios.get(`https://raw.githubusercontent.com/rafpil/rafpil.github.io/master/Trends_data/trends_${yearTrends}.json`)
  //     .then(response => {
  //       (response.data).map((item, index) => data.push({
  //         id: index + 1,
  //         title: item.orderObject.replace(/\s+/g, ' ').trim(),
  //         tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
  //         //userId: Users.find(Users => Users.id === item.userId) ? Users.find(Users => Users.id === item.userId).name : '',
  //         submissionOffersDate: formatDate(item.submittingOffersDate),
  //         submissionOffersDate2: null,
  //         publicationDate: formatDate(item.publicationDate),
  //         publicationDate2: item.publicationDate,
  //         tenderId: item.tenderId ? item.tenderId : item.objectId,
  //         link: item.tenderId ? `https://ezamowienia.gov.pl/mp-client/search/list/${item.tenderId}` : `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${item.objectId}`
  //       }));
  //       data.sort((a, b) => b.publicationDate2.localeCompare(a.publicationDate2));
  //       z = data.filter((el, index) => index === data.findIndex(d => d.tenderId === el.tenderId));
  //       setTrendsJson(z);
  //     })
  //     .catch(error => console.log('błąd'))
  // }, [yearTrends]);

  useEffect(() => {
    fetchData(yearTrends, setTrendsJson, isLoading)
  }, [yearTrends]);

  useEffect(() => {
    isLoading1(true);
    setActualShowingData(trends.slice(0, MAX_SHOWING_ROWS));
    setNumberOfPages(Math.ceil(trends.length / MAX_SHOWING_ROWS));
    isLoading1(false);
  }, [trends])



  const changeTableDataPage = (selectNumberPage) => {
    setPaginationActuallyPage(selectNumberPage);
    setActualShowingData(trends.slice(MAX_SHOWING_ROWS * selectNumberPage - MAX_SHOWING_ROWS, MAX_SHOWING_ROWS * selectNumberPage))
  }

  const changeYear = (year) => {
    setYearTrends(year);
  }

  const sortCol = (typElement, column) => {
    let sortTrends = [...trends];
    if (typElement === 'date') {
      if (reverse) sortTrends.sort((a, b) => a[column].localeCompare(b[column]));
      else sortTrends.sort((a, b) => b[column].localeCompare(a[column]));
      reverse = !reverse;
    }
    if (typElement === 'string') {
      if (reverse) sortTrends.sort((a, b) => a[column] < b[column]);
      else sortTrends.sort((a, b) => a[column] > b[column]);
      reverse = !reverse;
    }
    setTrends(sortTrends);
  }

  return (
    <>
      <div className='flex items-center flex-wrap'>
        <div className='flex basis-full items-center md:basis-2/4'>
          <h1 className='text-2xl py-3 text-center md:text-left dark:text-[#D3D3D3] pr-1'>{headerTitile}</h1>
          {selectYear && <Select selectedVal={yearTrends} eventChange={changeYear} />}
        </div>
        <div className='flex basis-full md:basis-2/4'>
          <SeachForm dataToSeach={trendsJson} seachResult={setTrends} />
        </div>
      </div>
      {loading === false && loading1 === false ? <>
        {actualShowingData.length > 0 ? (<Table tbodyData={actualShowingData} theadTh={theadTh} sort={sortCol} />) : <Alert message='Brak elementów do wyświetlenia' />}
        {numberOfPages > 1 && <div className='flex justify-center md:justify-between items-center flex-wrap dark:text-[#D3D3D3]'>
          <TotalNumberOfRows totalNumberOfRows={trendsJson.length} />
          <Pagination changePaginationValue={changeTableDataPage} numberOfPageSelector={numberOfPages} actuallySelectPage={paginationActuallyPage} />
        </div>}</>
        : <Spinner />}
    </>
  )
}

export default TrendsView