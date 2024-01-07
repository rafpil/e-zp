import trendsTypes from '../Dictionary/TrendsTyps'
import formatDate from '../Utiles/FromatDate'
import formatTime from '../Utiles/FormatTime'

function converteFetchData(source, dataToConverte) {
    const data = [];
    if (source === 'currentProccesing') {
        dataToConverte.map((item, index) => data.push({
            id: index + 1,
            title: item.title.replace(/\s+/g, ' ').trim(),
            tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
            submissionOffersDate: formatDate(item.submissionOffersDate) + '\ngodz. ' + formatTime(item.submissionOffersDate),
            submissionOffersDate2: item.submissionOffersDate,
            publicationDate: formatDate(item.initiationDate) + '\ngodz. ' + formatTime(item.initiationDate),
            publicationDate2: item.initiationDate,
            tenderId: item.objectId,
            link: `https://ezamowienia.gov.pl/mp-client/search/list/${item.objectId}`
        }))
    } 

    if (source === 'oldTrends') {
        dataToConverte.map((item, index) => data.push({
            id: index + 1,
            title: item.orderObject.replace(/\s+/g, ' ').trim(),
            tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
            //userId: Users.find(Users => Users.id === item.userId) ? Users.find(Users => Users.id === item.userId).name : '',
            submissionOffersDate: formatDate(item.submittingOffersDate),
            submissionOffersDate2: null,
            publicationDate: formatDate(item.publicationDate),
            publicationDate2: item.publicationDate,
            tenderId: item.tenderId ? item.tenderId : item.objectId,
            link: item.tenderId ? `https://ezamowienia.gov.pl/mp-client/search/list/${item.tenderId}` : `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${item.objectId}`
        }))
    } 

    if (source === 'mixTimeTrends') {
        dataToConverte.map((item, index) => data.push({
            id: index + 1,
            title: item.orderObject.replace(/\s+/g, ' ').trim(),
            tenderType: trendsTypes.find(trendsIdentifier => trendsIdentifier.identifier === item.tenderType).type,
            //userId: Users.find(Users => Users.id === item.userId) ? Users.find(Users => Users.id === item.userId).name : '',
            submissionOffersDate: formatDate(item.submittingOffersDate),
            submissionOffersDate2: null,
            publicationDate: formatDate(item.publicationDate),
            publicationDate2: item.publicationDate,
            tenderId: item.tenderId ? item.tenderId : item.objectId,
            link: item.tenderId ? `https://ezamowienia.gov.pl/mp-client/search/list/${item.tenderId}` : `https://ezamowienia.gov.pl/mo-client-board/bzp/notice-details/id/${item.objectId}`
        }))
    } 

    return data;
}

export default converteFetchData;