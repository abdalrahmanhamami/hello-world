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



let endPoint = 'https://api.github.com/repos/HackYourFuture/';
let xhr;
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
    xhr.send();
    xhr.onreadystatechange = doingSomething;

};
    
function doingSomething(e){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log("ok");
        let answer = JSON.parse(xhr.responseText);
        console.log(answer);
        let sortResult = document.getElementById("OurLeftDiv");
        sortResult.innerHTML = "";
        sortResult.innerHTML += `<h4></h4>`;
             //  
    }
    document.getElementById("OurLeftDiv").appendChild(answer);
}

})