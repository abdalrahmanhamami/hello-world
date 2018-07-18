class Movie {
    constructor(title, director) {
      this.title = title;
      this.director = director;     
      this.stars = [];
      this.Writer = [];
      this.rating= [];
     }
  
    getTitle() {
      return this.title;
    }
  
    getDirector() {
    return this.director
    }
  
    addStar(star) {
      // add your code here
      this.stars.push(star);
    }
  
    getStars() {
      // add your code here
      return this.stars;
    }
  
    addWriter(writer) {
      // add your code here
      this.writer.push(writer);
    }
  
    getWriters() {
      // add your code here
      return this.writer;
    }
  
    addRating(rating) {
      // add your code here
      this.rating.push(rating);
    }
  
    getAverageRating() {
      // add your code here
      return this.rating;
    }
  
    // ... Add yours :-) Look to IMDB for inspiration
  }
  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      // add your code here
      this.name = name;
      this.role = role;
      this.dateOfBirth = dateOfBirth;
    }
  
    addMovie(movie) {
    this.movie.push(movie);
    }
  
    getName() {
      // add your code here
    return this.name;
    }
  
    getRole() {
      // add your code here
      return this.role;
    }
  
    getAge() {
      // add your code here
      // return this.age;
      let currentYear = 2018;
      return currentYear - this.dateOfBirth;
    }
  }
  
  // Pick your favorite movie from http://www.imdb.com/
  
  const myMovie = new Movie("The Pursuit of Happiness",
  new StaffMember("Gabriele Muccino","director",1980));

  
  const WillSmith = new StaffMember("Will Smith","Chris Gardner",1968);
  myMovie.addStar(WillSmith);
  // create and add more staff members
  const JadenSmith = new StaffMember("Jaden Simth","Christopher",1998)
  myMovie.addStar(JadenSmith);
  // const JadenSmith = new StaffMember("Jaden Simth","Christopher",1998)
  // myMovie.addStar(JadenSmith);
  // Make sure that the following actions work.
  
  console.log(myMovie.title)
  console.log(`Star: ${WillSmith.name}`)
  console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
  const director = myMovie.getDirector();
  console.log(`Director: ${director.getName()}`);
   
