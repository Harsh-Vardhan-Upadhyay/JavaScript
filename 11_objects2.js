// Object destructuring and introduction to extracting data from JSON-like objects

const course = {
    courseName: "Hindi", // The name of the course
    price: 100           // The price of the course
};

// Object destructuring allows us to extract properties directly into variables
const { courseName: name } = course; // Extracts the 'courseName' property and assigns it to a variable named 'courseName' and we also renamed the name from courseName to name we are getting the value from course 

console.log(name); // Outputs: Hindi


