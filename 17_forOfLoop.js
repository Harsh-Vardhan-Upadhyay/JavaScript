const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}


// Maps 

const map = new Map()
map.set('In', "India")
map.set('In', "India")


console.log(map)

for (const i of map){
    console.log(i)
}

// For in loops for objects

const Languages = {
    js : "JavaScript",
    cpp : "C++",
    swift : "Swift by apple"
}

for (const key in Languages) {
    console.log(`${key} is the file name for ${Languages[key]}`)
}

// For in loops for Arrays

const newArray = ["Harsh", "Is ", "The", "Best"]

for (const key in newArray) {
    console.log()
}