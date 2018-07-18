// let xhr = new XMLHttpRequest ();

// //open it 
// xhr.open('GEt','data.json',false);
// //send it
// xhr.send();

// if (xhr.readyState != 4 || xhr.status !=200){
//     throw new error('Go to the park, best wishes')

// }
// let user = JSON.parse(xhr.responseText);

// console.log(user);
// document.getElementById('output').innerHTML = "Hello "+user.name;

let input = document.createElement("input");
input.innerHTML = "";
input.id = ("inputId");
document.getElementById("container").appendChild(input);

let button = document.createElement("button");
button.innerHTML = "searchbtn";
document.getElementById("container").appendChild(button);
button.id = "buttonId";


button.addEventListener('click', function(event){
console.log('you clicked me!');
//

})
let endPoint = 'https://api.github.com/users/';
// let xhr;
let response;
let  searchbutton = document.getElementById("buttonId");
searchbutton.addEventListener('click', search);

function search(){
    let usersInput = document.getElementById("inputId").value;
    console.log(usersInput);
    let theUrl =  endPoint + usersInput;
    console.log(theUrl);
    xhr = new XMLHttpRequest();
    xhr.open('GET', theUrl, true);
    xhr.onreadystatechange =function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log("ok");
            let answer = JSON.parse(xhr.responseText);
            console.log(answer);
            document.getElementById('myJsonGst').innerHTML= `<h4>Result for: ${answer.name}</br>
            ${answer.full_name}</br>
            Id: ${answer.id}</br>
            name: ${answer.name}<br>
            language used:${answer.language}</br>
            
            </h4>
             <img src = '${answer.avatar_url}'`;

             
        }
    };
    xhr.send();
};
