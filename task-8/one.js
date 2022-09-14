class Movie{
    constructor(title, studio, rating="PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(Movie)
    {
        if(this.rating == "PG")
        {
            return Movie; 
        }
        else{
            return `No PG rated movie`
        }
    }
}

const CR = new Movie("Casino Royale", "Eon Productions", "PG13" )
console.log(CR)
console.log(CR.getPG("Casino Royale"))

