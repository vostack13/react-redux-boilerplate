export default function formatDate(date: Date): string {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yy = date.getFullYear() % 100;

    const day = dd < 10 ? `0${dd}` : dd;
    const month = mm < 10 ? `0${mm}` : mm;
    const year = yy < 10 ? `0${yy}` : yy;

    return day + '.' + month + '.' + year;
}
