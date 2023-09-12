let p = new Promise(function(cumpriPromessa){
    cumpriPromessa(['Ana', 'Beatriz','Daniel'])

})

p
.then(valor => valor[0])
.then(valor => console.log(valor))  