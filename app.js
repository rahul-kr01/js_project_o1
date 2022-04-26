let data = 
[
    {
        name : 'Sephi',
        age  : '25'
    },
    {
        name : 'Ram',
        age  : '26'
    },
    {
        name : 'Max',
        age  : '27'
    },
    {
        name : 'Dave',
        age  : '28'
    },
    {
        name : 'Lexi',
        age  : '29'
    },
    {
        name : 'Rafi',
        age  : '30'
    }
];

// Shrink all 'div' in to a java script

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' is ' + item.age + ' years old '+'</div>'
});

document.getElementById("demo").onclick = function() {myFunction()};
//document.getElementById("demo").addEventListener("click", myFunction);

function myFunction(){
    info.innerHTML = details.join('\n');
}
// info.innerHTML = details.join('\n');