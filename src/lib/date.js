import moment from 'moment'

export const secToDate = (seconds)=> {
    const day = new Date(seconds*1000).getDate();
    const mont = new Date(seconds*1000).getMonth();
    const year = new Date(seconds*1000).getFullYear();
    return `${day}.${mont}.${year}`
    //return moment(seconds.toString()).format('DD.MM.YY')

}