// <!-- 51-dars start -->

// AJAX = Asynchnorous JavaScript And XML

const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts"); // url => endpoint, api
request.send();
request.addEventListener("load", function () {
  //   console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);    
});
console.log('fsdfas');
// console.log(request);
