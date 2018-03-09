var allShows = [{
    number: 1,
    image: "images/highground.jpg",
    title: "Star Wars Episode 3: Revenge of the Sith",
    myScore: 9.2,
    globalScore: 6.9,
    friendScore: 9.5,
    type: "Movie",
    genres: ["Sci-Fi", "Fantasy"],
    onMyList: false
  },
  {
    number: 2,
    image: "images/duel.jpg",
    title: "Yu-Gi-Oh! The Dark Side of Dimensions",
    myScore: 10,
    globalScore: 10,
    friendScore: 10,
    type: "Movie",
    genres: ["Lit", "Children's Card Games"],
    onMyList: false
  },
  {
    number: 3,
    image: "images/jojo.jpg",
    title: "JoJo's Bizarre Adventure",
    myScore: 10,
    globalScore: 9.5,
    friendScore: 9.8,
    type: "TV",
    genres: ["Baby Stand", "Nani"],
    onMyList: true
  }];

class Database extends Object{
    constructor(){
        super();
        this.shows = allShows;
    }
}



export default Database;