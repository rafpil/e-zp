import axios from 'axios';
import converteFetchData from '../ConverteFetchData';

function fetchArchiveTrends(yearTrends, setTrendsJson, isLoading) {
  isLoading(true)
  console.log('pobieram')
  let data = [];
  let z = [];
  if (new Date(yearTrends).getFullYear() !== new Date().getFullYear()) {
    axios.get(`https://raw.githubusercontent.com/rafpil/rafpil.github.io/master/Trends_data/trends_${yearTrends}.json`)
      .then(response => data = converteFetchData('mixTimeTrends', response.data))
      .then(() => data.sort((a, b) => b.publicationDate2.localeCompare(a.publicationDate2)))
      .then(() => z = data.filter((el, index) => index === data.findIndex(d => d.tenderId === el.tenderId)))
      .then(() => setTrendsJson(z))
      .then(() => {
        setTimeout(() => {
          isLoading(false)
        }, 200)
      });
  } else {
    axios.get('https://ezamowienia.gov.pl/mo-board/api/v1/notice?noticeType=ContractNotice&publicationDateFrom=2022-12-31T23:00:00.000Z&organizationName=wojew%C3%B3dztwo%20kujawsko%20-%20pomorskie&PublicationDateTo=2024-05-31T23:59:59&PageSize=100')
      .then(response => setTrendsJson(converteFetchData('oldTrends', response.data)))
      .then(() => {
        setTimeout(() => {
          isLoading(false)
        }, 200)
      });
  }
}

export default fetchArchiveTrends;