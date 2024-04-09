export const get = async (URL: string) => {
    const response = await fetch(URL)
    return await response.json()
}

export const dateFormatterWithDayName = (dateString: string | number | Date) => {
    const options:any = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const formattedDate = date.toLocaleDateString('en-US', options);
    const day = days[date.getDay()];
    return `${formattedDate} (${day})`;
};
