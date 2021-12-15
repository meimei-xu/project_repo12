'use strict';

const fs = require('fs');

let student = {
    name: 'Linde',
    age: 64, 
    gender: 'Female',
    department: 'French',
    car: 'Toyota' 
};

let data = JSON.stringify(student, null, 2);  

fs.writeFileSync('database.json', data, finished);

function finished(err)
{
    console.log('success');
}