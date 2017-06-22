var p = first();

p.then(function(secret) {
   return second(secret);
}).then(console.log);