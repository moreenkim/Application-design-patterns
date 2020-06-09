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

const onInput = debounce((event) => { //callback fn
    fetchData(event.target.value);   
});

input.addEventListener('input', debounce(onInput, 500));