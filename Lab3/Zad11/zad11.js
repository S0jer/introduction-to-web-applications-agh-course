const url = 'https://restcountries.com/v3.1/all'


fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

