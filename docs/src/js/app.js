window.getMovies = (string) => {
let urlData = `http://www.omdbapi.com/?apikey=36585d95&`
 let data = `${urlData}s=${string}`;
      fetch(data)
    .then(response => response.json())
    .then((data) =>{
      let printMovies = getData(data);

});
};

hall.addEventListener('click', (event) => {
  let string = 'halloween'
  getMovies(string);
});
