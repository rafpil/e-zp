function formatDate(dateToFormat) {
    dateToFormat = new Date(dateToFormat);
    let day = dateToFormat.getDate();
    let month = dateToFormat.getMonth() + 1;
    let year = dateToFormat.getFullYear(); 

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return [day, month, year].join('-');
}

export default formatDate;