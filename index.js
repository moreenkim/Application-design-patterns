const fetchData = async (searchTerm) =>{
    const response  = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '381d0a8a',
            s:searchTerm // string of movie we search
            //i:'tt0848228' //gets ID of the movie
        }
    });

    if(response.data.Error){
        return[];
    }
    
    return response.data.Search;
};

const input =  document.querySelector('input');

const onInput = async (event) => { //callback fn
    const movies = await fetchData(event.target.value);   
    for(let movie of movies) {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
};

input.addEventListener('input', debounce(onInput, 500));