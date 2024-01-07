function formatTime(dateToFormat) {
    dateToFormat = new Date(dateToFormat);
    let hour = dateToFormat.getHours();
    let minute = dateToFormat.getMinutes();

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    return [hour, minute].join(':');
}

export default formatTime;