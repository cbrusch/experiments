//create a class for my structure
import makeRandom from '../utilities/makeRandom';
import adjectives from '../data/adjectives.json';
import audience from '../data/audience.json';
import businesses from '../data/businesses.json';
import cities from '../data/cities.json';

let i;


class Brief {
    // const myArray = [];

//create a constructors
    constructor() {
        this.adjectives = [];
        this.audience = makeRandom(audience);
        for (i = 0; i < 3; i++){
            this.adjectives.push(makeRandom(adjectives))
            //ALSO LOOK AT REDUCE
            //LEARN ARRAY ACCESSORS
            // array.slice()
            // array.map()
            // array.push()

            // this.setState(function(prevState,props) {
            //
            // });
            // let item = this.adjective;
            // item = items.push(item);
            // this.setState({items});
            // console.log(this.adjective);
            // myArray = myArray.push(this.adjective);
            // let thisArray = myArray.map((this.adjective) => )
            // this.setState({ arr: [...this.state.arr, ...myArray] });
            // console.log(myArray[1]);
        }
    //Object.keys is a static function that can get a random from an object
    //returns all the keys in an object
        this.businessType = makeRandom(Object.keys(businesses));
        this.businessName = makeRandom(businesses[this.businessType]);
        this.city = makeRandom(cities).city;
    }
}

export default Brief;
