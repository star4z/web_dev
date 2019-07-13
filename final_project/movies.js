var body;

function init(){
    body = document.getElementById("body");
}

function search(form) {
    var request = new XMLHttpRequest();

    var query = form.elements[0].value.replace(" ", "+");

    console.log(query);

    request.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=1f224e9da2022438784455ffb9a43119&query=" + query + "&page=1", true);

    var movie_container = document.getElementById("container");

    var child = movie_container.firstElementChild;
    while(child) {
        movie_container.removeChild(child);
        child = movie_container.firstElementChild;
    }

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            data.results.forEach(movie => {
                console.log(movie.title);

                var div = document.createElement("div");
                div.className += " row";

                var img = document.createElement("img");
                img.className += " cell";
                img.src = "http://image.tmdb.org/t/p/w92/" + movie.poster_path;

                var date = new Date(movie.release_date);
                date = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});

                var p = document.createElement("p");
                p.className += " cell";
                p.innerHTML =  "<b>" + movie.title + "</b><br>" +
                    movie.overview + "<br><br>" +
                    date + "<br>";

                div.appendChild(img);
                div.appendChild(p);

                movie_container.appendChild(div);
            })
        } else {
            console.log('error')
        }
    };

    request.send();
}

$( function() {
   $(document).tooltip();
});