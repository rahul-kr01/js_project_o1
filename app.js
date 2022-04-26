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

info.innerHTML = details.join('\n');