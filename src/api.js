const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bdd9d58e04msh44c379e92831fbfp18d12bjsnb582e56cfe95',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}