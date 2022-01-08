const fs = require('fs')

const student = {
    name: "Ally",
    age: 20,
    gender: "Female",
    department: "French",
    car: "Toyota"
}

const data = JSON.stringify(student, null, 2);  

fs.writeFileSync('./noivamain/database/writeJSON.json', data, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
});

