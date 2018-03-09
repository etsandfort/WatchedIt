var allShows = require("../db.json");

class Database extends Object{
    constructor(){
        super();
        this.shows = allShows;
    }
}



export default Database;