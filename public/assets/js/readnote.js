var URL = "data/catatan.txt";
var JSON = "data/catatan.json";

// fetchTEXT
fetch(URL)
    .then(function(response) {
        if (response.status !== 200) {
            console.log('Ada Masalah. Status Code: '+response.status);
            throw response.statusText;
        }
        return response.text();
    })
    .then(text=>{
        let t =document.getElementById('hasil');
        t.textContent = text;
    })
    .catch(err=> console.log(err));


    // fetchJSON
    fetch(JSON)
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Ada Masalah. Status Code: ' + response.status);
                throw response.statusText;
            }
            return response.json();
        })
        .then(function(res) {
            // console.log(res.body);
            let title = document.getElementById('title');
            title.textContent = res.title;
            let created_at = document.getElementById('created_at');
            created_at.textContent = res.created_at;
            let body = document.getElementById('body');
            body.textContent = res.body;
        })
        .catch(err => console.log(err));