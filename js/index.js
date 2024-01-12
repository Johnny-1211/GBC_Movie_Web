// change body background by clicking file pic
const chBackgroundPic = (id) => {
    console.log(`${id}`);

    switch (id) {
        case "movie-1":
            document.getElementById("festival-info").style.backgroundImage = "url(/asserts/anatomy-of-a-fall-trailer.gif)";
            break;
        
        case "movie-2":
            document.getElementById("festival-info").style.backgroundImage = "url(/asserts/about-dry-grasses-trailer.gif)";
            break;
        
        case "movie-3":
            document.getElementById("festival-info").style.backgroundImage = "url(/asserts/a-difficult-year-trailer.gif)";
            break;
    }
}