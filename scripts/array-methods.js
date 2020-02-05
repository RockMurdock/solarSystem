const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const section = document.createElement("section")
section.id = 'planets'
document.body.appendChild(section)
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    planetEl.innerHTML += `
    <h4>${planet}</h4>
    `
    planetEl.innerHTML += "<hr/>"
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capPlanets = planets.map(planet => planet.charAt(0).toUpperCase() + planet.substr(1).toLowerCase())

capPlanets.forEach(planet => {
    planetEl.innerHTML += `
    <h4>${planet}</h4>
    `
    planetEl.innerHTML += "<hr/>"
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(planet =>{
    let string = false
    if(planet.includes('e') === true) {
        string = true
    }
    return string
})
ePlanets.forEach(planet => {
    planetEl.innerHTML += `
    <h4>${planet}</h4>
    `
    planetEl.innerHTML += "<hr/>"
})