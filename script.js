let data=[
    { name:'mohan',age:10},
    { name:'sohan',age:13},
    { name:'rohan',age:14},
    { name:'johan',age:16},
    { name:'samir',age:17},
    { name:'rajan',age:18},
];
const info=document.querySelector('#info');
let datils=data.map(function(item){
    return '<div>'+item.name+' ' +' is '+ item.age + ' year old'+'</div>';
});
info.innerHTML=datils.join('\n');
    
