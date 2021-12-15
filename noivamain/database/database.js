

const fs = require('fs');

let student = {
    name: 'Linda',
    age: 64, 
    gender: 'Female',
    department: 'French',
    car: 'Toyota' 
};

let data = JSON.stringify(student, null, 2);  

fs.writeFileSync('./noivamain/database/database.json', data, finished);

function finished(err)
{
    console.log('success');
}