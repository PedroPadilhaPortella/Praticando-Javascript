//Usando Promise e XMLHttpRequest
var promise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/PedroPadilhaPortella')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição')
                }
            }
        }
    });
}
promise()
    .then(response => console.log(response))
    .catch(reject => console.warn(reject))

//Usando axios, via CDN

axios.get('https://api.github.com/users/PedroPadilhaPortella')
    .then(response => console.log(response))
    .catch(reject => console.warn(reject))