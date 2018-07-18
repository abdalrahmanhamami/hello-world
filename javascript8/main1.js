//step3 SPA
document.getElementById('btn')
.addEventListener('click',()=>{
    console.log("You clicked me");
});
let url='https://api.github.com/orgs/HackYourFuture/repos';
let xhr=new XMLHttpRequest();
xhr.open('GET',url,true);
xhr.onreadystatechange= function(){
    if(xhr.readyState===4 && xhr.status===200){
        let info=JSON.parse(xhr.responseText);
        let repos=info.map(linkName=>`${linkName.name}`);
        document.getElementById('btn')
        .addEventListener('click',myFunction);
        function myFunction(){
            document.getElementById('btn').innerHTML=`<h1>Available for searching: </h1>${repos}`;
        
        }
    }
};
xhr.send();

// document.getElementById('btn1')
// .addEventListener('click',()=>{
//     console.log("You clicked me");
// });
let url1 ='https://api.github.com/repos/HackYourFuture/';
function search(){
    let usersInput = document.getElementById("esm").value;
    console.log(usersInput);
    let theUrl =  url1 + usersInput;
    console.log(theUrl);


let xhr1 =new XMLHttpRequest();
xhr1.open('GET',theUrl,true);
xhr1.onreadystatechange= function(){
    if(xhr1.readyState===4 && xhr1.status===200){
        let info1 =JSON.parse(xhr1.responseText);
        let repos1 =info1.map(linkName=>`${linkName.name}`);
        document.getElementById('btn1')
        .addEventListener('click',myFunction);
        function myFunction(){
            document.getElementById('btn1').innerHTML=`<h4>Available for searching: </h4>${repos1}`;
        
        }
    }
};

xhr1.send();
};
// // //

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
let endPoint = 'https://api.github.com/repos/HackYourFuture/';
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
            Description: ${answer.description}
            language used:${answer.language}</br>
            </h4>
            <img src = '${answer.owner.avatar_url}'`;
            // sortResult.innerHTML = "";
            // sortResult.innerHTML += `<h4></h4>`;
             
        }
        // document.getElementById("OurLeftDiv").appendChild(answer);
    };
    xhr.send();
};
    

