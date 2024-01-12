// Movie detail here
const movie_detail = [
    {
        movie_name : "Anatomy Of A Fall",
        shows_time : "Fri, Nov 24th, 8:00 PM",
        genre : "Thriller / Crime / Feature Films",
        movie_director : "Justine Triet",
        image : "Anatomy-of-a-Fall.webp"
    },
    {
        movie_name : "About Dry Glasses",
        shows_time : "Sat, Nov 25th, 2:45 PM",
        genre : "Drama / Feature Films",
        movie_director : "Nuri Bilge Ceylan",
        image : "aboutdrygrasses.jpeg"
    },
    {
        movie_name : "A Difficult Year",
        shows_time: "Sun, Nov 26th, 5:30 PM",
        genre : "Drama / Feature Films / Comedy",
        movie_director: "Olivier Nakache, Éric Toledano",
        image : "a_difficult_year.jpeg"
    }
]

//Output Function Here
const showMovieDetail = () => {
    for(currMovie of movie_detail){
        const output = `
            <div class="event-block">
                <div class="container" id="img-col">
                    <img src="./asserts/${currMovie.image}"/>
                </div>
                <div class="container" id="info-col">
                    <div>
                        <h1>Movie Name: </h1>
                        <h2>${currMovie.movie_name}</h2>
                        <h3>By ${currMovie.movie_director}</h3>
                        <p>Genre: <span>${currMovie.genre}</span></p>
                        <p>Show: <span>${currMovie.shows_time}</span></p>
                    </div>                
                </div>
            </div>
            `
        document.querySelector("main").innerHTML += output;
    }
}

//event detect here
document.addEventListener("DOMContentLoaded", showMovieDetail)






