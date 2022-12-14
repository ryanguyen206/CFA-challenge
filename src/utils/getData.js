
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


export const searchData = async (url, options) => {
    const res = await fetch(url, options)
	if (!res.ok) {
		return;
	} else {
		const data = await res.json();
		return data;
	 }
    
}

