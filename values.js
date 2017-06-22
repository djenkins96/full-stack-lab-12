function attachTitle(name){
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

// p.then(function(success){
//     return attachTitle(success);
// }).then(function(nameTitle){
//     console.log(nameTitle);
// })

p.then(attachTitle).then(console.log);