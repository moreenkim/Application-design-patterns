const fetchData = async () =>{
    const response  = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '381d0a8a',
            s:'avengers' // string of movie we search
        }
    });
    console.log(response.data);
};

fetchData();