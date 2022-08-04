//Fetch is Async, so nothing below will wait. So I used '.then' to say what going to happen after receive the api list (a response from request)
//Get method is the native method to fetch
// response.json transform request's body in a json
// Data is the response with json created
// I don't need {} if I didn't having use 'return'

//Atenction

// We don't need "()" when we have only one parameter in a arrow function
//.then((response) => response.json()) will be
//.then(response => response.json())
// I receive the id "fill_list" and create a const to it.

//

// with map i going to navegate to "data"  and return something
// .map has a parameter 'item' and will construct ina loop every item from api
// createElement has the same whe you'd code in HTML
// setAttribute will set something inside that tag html
// innerHTML add html text inside that tag (setAttribute)
// appendChild will send a "child" to a function set before


function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {

        const list = document.querySelector('#fill_list');

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('class', item.id);
            li.innerHTML = "id: " + item.id + "<br/>";
            li.innerHTML += item.completed;

            list.appendChild(li);
        });
    });
}

