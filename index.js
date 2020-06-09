const fetchData = async (searchTerm) =>{
    const response  = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '381d0a8a',
            s:searchTerm // string of movie we search
            //i:'tt0848228' //gets ID of the movie
        }
    });
    console.log(response.data);
};

const input =  document.querySelector('input');

input.addEventListener('input', (event) =>{ //callback fn
    fetchData(event.target.value);
});