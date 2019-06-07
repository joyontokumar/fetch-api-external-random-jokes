// get jokes fetch api json data
document.querySelector('#GetJokes').addEventListener('click', loadjsondata);

function loadjsondata(e) {
    const mydata = document.querySelector('input[type="number"]').value;

    fetch(`http://api.icndb.com/jokes/${mydata}`)
        .then(responseData => {
            return responseData.json();
        })
        .then(data => {
            let output = '';
            console.log(data);
            if (data.type === 'success') {
                output += `<ul class="list-group mt-5"> 
                         <li class="list-group-item">${data.value.joke}</li>
                    </ul>`;

            } else {
                output += '';
            }
            document.getElementById('multiplejson').innerHTML += output;
        })
        .catch(err => {
            console.log(err);
        })
    e.preventDefault();
}