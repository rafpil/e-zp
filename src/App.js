import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TrendsView from './Containers/TrendsView/TrendsView'
import RootLayout from './Containers/RootLayout/RootLayout'
import InfoAboutData from './Containers/InfoAboutData/InfoAboutData'
import trendsTypes from './Dictionary/TrendsTyps'
import Users from './Dictionary/Users'
import formatDate from './Utiles/FromatDate'
import formatTime from './Utiles/FormatTime'
import Contact from './Containers/Contact/Contact'
import ErrorPage from './Containers/ErrorPage/ErrorPage'
import fetchCurrentTrends from './Utiles/FetchData/fetchCurrentTrends'
import fetchArchiveTrends from './Utiles/FetchData/fetchArchiveTrends'

function App() {

  const currentTrendsCellName = {
    th: [
      { title: '#', minWidthCol: '1', isSortAble: false, typeToSort: 'number', td: 'id'},
      { title: 'Nazwa postępowania', minWidthCol: '1', isSortAble: true, typeToSort: 'string', td: 'title'},
      { title: 'Tryb', minWidthCol: '9', isSortAble: false, typeToSort: 'string', td: 'tenderType'},
      { title: 'Data składania ofert', minWidthCol: '1', isSortAble: true, typeToSort: 'date', td: 'submissionOffersDate2'},
      { title: 'Data zamieszczenia', minWidthCol: '1', isSortAble: true, typeToSort: 'date', td: 'publicationDate2'}],
    td: ['id', 'title', 'tenderType', 'submissionOffersDate', 'publicationDate'],
  };

  const allTrendsCellName = {
    th: [
      { title: '#', minWidthCol: '1', isSortAble: false, typeToSort: 'number', td: 'id'},
      { title: 'Nazwa postępowania', minWidthCol: '1', isSortAble: true, typeToSort: 'string'},
      { title: 'Tryb', minWidthCol: '9', isSortAble: false, typeToSort: 'string'},
      { title: 'Data zamieszczenia ogłoszenia', minWidthCol: '1', isSortAble: true, typeToSort: 'date'}],
    td: ['id', 'title', 'tenderType', 'publicationDate'],
  };

  // const link1 = 'https://raw.githubusercontent.com/rafpil/Dummy_data/main/activeTenders.json';
  const link2 = 'https://ezamowienia.gov.pl/mp-readmodels/api/Search/SearchTenders?organizationCity=bydgoszcz&organizationName=województwo kujawsko - pomorskie&organizationProvince=kujawsko-pomorskie&SortingColumnName=SubmissionOffersDate&SortingDirection=DESC&PageNumber=1&PageSize=50';

  const link3 = 'https://raw.githubusercontent.com/rafpil/rafpil.github.io/master/Trends_data/trends_2021.json';

  const link4 = 'https://ezamowienia.gov.pl/mo-board/api/v1/Board/Search?noticeType=ContractNotice&publicationDateFrom=2022-12-31T23:00:00.000Z&organizationNationalId=9561969536&SortingColumnName=PublicationDate&SortingDirection=DESC&PageNumber=1&PageSize=10';
  const link5 = 'https://ezamowienia.gov.pl/mo-board/api/v1/notice?noticeType=ContractNotice&publicationDateFrom=2022-12-31T23:00:00.000Z&organizationName=wojew%C3%B3dztwo%20kujawsko%20-%20pomorskie&PublicationDateTo=2024-05-31T23:59:59&PageSize=100';

  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <TrendsView headerTitile={'Postępowania aktualnie prowadzone'} theadTh={currentTrendsCellName} selectYear={false} fetchData={fetchCurrentTrends}/>,
        errorElement: <ErrorPage />
      },
      {
        path: 'ogloszenia-wszystkie',
        element: <TrendsView key={new Date().getTime()} headerTitile={'Ogłoszenia o zamówieniu z roku '} theadTh={allTrendsCellName} selectYear={true} fetchData={fetchArchiveTrends}/>,
        errorElement: <ErrorPage />
        
        // loader: async ({params}) => {

        //   const year = params.year;

        //   const response = await fetch(`https://raw.githubusercontent.com/rafpil/rafpil.github.io/master/Trends_data/trends_${year}.json`);

        //   const resData = await response.json();
        //   const data = [];
        //   resData.map((item, index) => data.push({
        //     id: index + 1,
        //     title: item.orderObject.replace(/\s+/g, ' ').trim(),
        //     tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
        //     // userId: Users.find(Users => Users.id === item.userId) ? Users.find(Users => Users.id === item.userId).name : '',
        //     // submissionOffersDate: formatDate(item.submittingOffersDate),
        //     submissionOffersDate2: null,
        //     publicationDate: formatDate(item.publicationDate),
        //     publicationDate2: item.publicationDate,
        //     tenderId: item.tenderId ? item.tenderId : item.objectId,
        //     link: item.tenderId ? `https://ezamowienia.gov.pl/mp-client/search/list/${item.tenderId}` : `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${item.objectId}`
        //   }));



          // const response2 = await fetch(link3);

          // const resData2 = await response2.json();
          // resData2.map((item, index) => data.push({
          //   id: index + 1,
          //   title: item.orderObject.replace(/\s+/g, ' ').trim(),
          //   tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
          //   // userId: Users.find(Users => Users.id === item.userId) ? Users.find(Users => Users.id === item.userId).name : '',
          //   // submissionOffersDate: formatDate(item.submittingOffersDate) + '\ngodz. ' + formatTime(item.submittingOffersDate),
          //   submissionOffersDate2: null,
          //   publicationDate: formatDate(item.publicationDate),
          //   publicationDate2: item.publicationDate,
          //   tenderId: item.tenderId ? item.tenderId : item.objectId,
          //   link: item.tenderId ? `https://ezamowienia.gov.pl/mp-client/search/list/${item.tenderId}` : `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${item.objectId}`
          // }));


          // let z = [];
          // data.sort((a, b) => b.publicationDate2.localeCompare(a.publicationDate2));
          // z = data.filter((el, index) => index === data.findIndex(d => d.tenderId === el.tenderId));
          // return z;
        //}
      },
      { path: 'informacja-o-danych', element: <InfoAboutData /> },
      { path: 'kontakt', element: <Contact /> },
      { path: '*', element: <ErrorPage /> },
    ]
  }]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
