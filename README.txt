Hello, I created a short tutorial about consume json from api with fetch.
- Why?

Because I need improve my english (as can you see it hahaha) and also because I did want to something new in my github studying JS.
I hope you Enjoy! :)



Fetch is Async, so nothing below will wait. So I did use ".then" to say what going to happen after receive the api list (to response from request);
GET method is the native method to fetch;
 response.json transform request's body in a json;
 Data is the response with json created;
 I don't need "{}" if I don't having used "return";

*Atenction*

 We don't need "()" when we have only one parameter in a arrow function;
.then((response) => response.json()) will be;
.then(response => response.json()).

**

 I took the id "#list" and create a const for it;
 with ".map" I going to navegate to "data"  and return something;
 ".map" has a parameter 'item' and will construct in a loop every item from api;
 createElement has the same which you'd code in HTML;
 setAttribute will set something inside that tag html;
 innerHTML add html text inside that tag (setAttribute);
 appendChild will send a "child" to a function set before.
 https://edustadler.github.io