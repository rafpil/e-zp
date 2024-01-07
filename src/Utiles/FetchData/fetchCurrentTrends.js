import axios from 'axios';
import converteFetchData from '../ConverteFetchData';


function fetchCurrentTrends(yearTrends = 2023, setTrendsJson, isLoading) {
    isLoading(true);
    const data = [];
    axios.get('https://ezamowienia.gov.pl/mp-readmodels/api/Search/SearchTenders?organizationCity=bydgoszcz&organizationName=województwo kujawsko - pomorskie&organizationProvince=kujawsko-pomorskie&SortingColumnName=SubmissionOffersDate&SortingDirection=DESC&PageNumber=1&PageSize=50')
        .then(response => setTrendsJson(converteFetchData('currentProccesing', response.data)))
        .then(() => {
            setTimeout(() => {
              isLoading(false)
            }, 3000)
          });
}

export default fetchCurrentTrends;