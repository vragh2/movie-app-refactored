class Movie {
	constructor() {
		console.log('hello constructor');
		this.submitButton = document.querySelector('#submit-button');
		this.favouriteMovieList = [];
		//this.divElement = document.querySelector("#content");
}

	movieData(url) {
		fetch(url)
			.then(res => {
				if(res.status == 200) {
					res.json()
					.then(data => {
						console.log(data);
						this.insertContent(data);

					})
				}
			})
	}

	insertContent(data) {
		let markup;
		data.results.forEach(element => {
			if(element.title !== undefined && element.poster_path != 'undefined') {

					markup = `
						<div class="col-3 d-flex" style="flex-direction: column; padding-bottom: 45px;align-items: flex-start;">
							  <img class="card-image" style="width: 209px; height: 100%;" src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="Card image cap">
							  <div class="card-body d-flex" style="flex-direction: column; padding-left: 0; padding-bottom: 60px;">
							    <p class="card-text">${element.title}</p>
							    <p class="">${element.release_date}</p>
							  </div>
							  <button id="add-button" class="btn btn-primary" type="submit">ADD</button>
						</div>
					`;
					document.querySelector("#content").insertAdjacentHTML('afterbegin', markup);
			}
		});
		const addButton = document.querySelector('#add-button');
		addButton.addEventListener('click', function(e) {
 	
						let movieName = e.target.parentNode.querySelector('.card-body .card-text').innerHTML;
						console.log('vimal');
						//moviedata.saveToLocalStorage();
					})

	}

	// saveToLocalStorage() {
	// 	console.log(movieName);
	// 	favouriteMovieList.push(movieName);
	// 	localStorage.setItem("movieList", JSON.stringify(favouriteMovieList));
 //        RetrieveFromLocalStorage();
	// }

 //    retrieveFromLocalStorage() {
 //        retrivedValue = JSON.parse(localStorage.getItem("movieList"));
        
 //        console.log(retrivedValue);
 //    }
	

}	

let moviedata = new Movie();


(moviedata.submitButton).addEventListener('click', function() {
	let movieName = document.getElementById("movie-name").value;
		let url1 = `https://api.themoviedb.org/3/search/multi?api_key=66d76f2eb4fea298fa553e7ba3f3baa1&language=en-US&query=`;
		let url2 = `&page=1&include_adult=false`;
		let url = url1 + movieName + url2;

moviedata.movieData(url);


})

 

