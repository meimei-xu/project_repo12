function handleFormSubmit(event) {
    
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    
    const fs = require('fs');

    let formdata = JSON.stringify(formJSOn, null, 2);  

    fs.writeFileSync('./noivamain/database/datab.json', formdata, finished);

    function finished(err) {
    console.log('success');
    }
}
  
// const fs = require('fs');

const form =  document.getElementById('contact-form');

form.addEventListener('submit', handleFormSubmit);