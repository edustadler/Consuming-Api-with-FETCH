//Fetch is Async, so nothing below will wait. So I did use ".then" to say what going to happen after receive the api list (to response from request);
//GET method is the native method to fetch;
// response.json transform request's body in a json;
// Data is the response with json created;
// I don't need "{}" if I don't having used "return";

//Atenction

// We don't need "()" when we have only one parameter in a arrow function;
//.then((response) => response.json()) will be;
//.then(response => response.json()).

//

// I took the id "fill_list" and create a const for it;
// with ".map" I going to navegate to "data"  and return something;
// ".map" has a parameter 'item' and will construct in a loop every item from api;
// createElement has the same which you'd code in HTML;
// setAttribute will set something inside that tag html;
// innerHTML add html text inside that tag (setAttribute);
// appendChild will send a "child" to a function set before.


function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {

        const list = document.querySelector('#list');

        data.map((item) => {
            const li = document.createElement('li');

            li.setAttribute('class', item.id);
            li.innerHTML = "id: " + item.id + "<br/>";
            li.innerHTML += item.completed;

            list.appendChild(li);
        });
    });
}

