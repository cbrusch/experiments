import React from 'react';

//destructured
const Brief = ({brief}) => (
    <article>
        <h1>Your Design Brief</h1>
        <p>Design a website for <span class="generated-text">{brief.businessName}</span>, a {brief.businessType} in {brief.city}.</p>
        <p>They want a website that is {brief.adjectives[0]}, {brief.adjectives[1]}, and {brief.adjectives[2]} and will appeal to {brief.audience}.</p>
    </article>
)

export default Brief;


// this.audience = makeRandom(audience);
// this.adjective = makeRandom(adjectives);
// //Object.keys is a static function that can get a random from an object
// //returns all the keys in an object
// this.businessType = makeRandom(Object.keys(businesses));
// this.businessName = makeRandom(businesses[this.businessType]);
// this.city = makeRandom(cities).city;
