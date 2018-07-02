let myarr = [
    "the_qu'ran",
    "outliers",
    "the_7_habits_of_highly_effective_people",
    "start_with_why",
    "the_genius_of_muhammad",
    "1984",
    "zero_to_one",
    "hello",
    "hey",
    "hi"];


let bookObject = {
    "the_qu'ran": {
        title: 'The Noble Qur\'an',
        language: 'Arabic',
        author: '...'
    },
    "the_genius_of_muhammad": {
        title: "The Genius of Muhammad",
        language: 'Arabic',
        author: '...'
    },
    "outliers": {
        title: 'Outliers',
        language: 'English',
        author: 'Malcolm Gladwell'
    },
    "the_7_habits_of_highly_effective_people": {
        title: 'The 7 habits of highly effective people',
        language: 'English',
        author: 'Stephen Richards Covey'
    },
    "the_genius_of_muhammad": {
        title: 'title book_5',
        language: 'eng',
        author: '...'
    },
    "start_with_why": {
        title: 'Start with why',
        language: 'English',
        author: 'Simon Sinek'
    },
    "zero_to_one": {
        title: 'Zero to One',
        language: 'English',
        author: ' Peter Thiel'
    },
    "hello": {
        title: 'title book_8',
        language: 'eng',
        author: '...'
    },
    "hey": {
        title: 'title book_9',
        language: 'eng',
        author: '...'
    },
        "hi": {
        title: 'title book_10',
        language: 'eng',
        author: '...'
    }
    };
let myObjectBook = function createList(Obj) {
    for (let i=0;i<Object.entries(Obj).length;i++){
        let ul = document.createElement('ul');
        document.body.appendChild('ul');
        let li=document.createElement('li');
        ul.appendChild('li');
        let h2 = document.createElement('h2');
        li 
    }
}















//     Object.entries(bookObject)[0][1].title;
// console.log(Object.entries(bookObject)[0][1].title);








// btn.addEventListener('click',function(){
//     console.log(clicked);
// });
// function createList(a){
//     let ul = document.createElement('ul');
//     ul.id ='myUlid';
// for (let i=0;i<a.length;i++){
// let ListViewItem=document.createElement('li');
// ListViewItem.appendChild(document.createTextNode(a[i]));
// ul.appendChild(ListViewItem);
//     li.innerHTML = myarray[i];
//     ul.appendChild(li)
// console.log(creteList(a));
// }
// return ul;
// }
// document.body.getElementById('myUlid').appendChild(bookObject)
// document.getElementById('myDivsId').appendChild(a(bookObject));

// let mydiv=document.createElement('div');
// mydiv.textContent = 'Top 10 favorite books';
// mydiv.id=("myDivsId");
// document.body.appendChild(myDivId);
// document.body.appendChild(bookObject);

// };for(let i = 0; i< myarray.length; i++){
//     let ul = document.createElement('ul')
//     let li = document.createElement('li')
//     li.innerHTML = myarray[i];
//     ul.appendChild(li)
//     //now append the ul to the content div