/*
const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', function(event) {
    event.preventDefault()

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value
    const confirmacao = document.querySelector('#confirmacao').value
    const nascimento = document.querySelector('#nascimento').value

    console.log(nome,email,senha,confirmacao,nascimento)

    


})

async function banco(){

    const response = await fetch(' https://api.elephantsql.com/api/instance?db=wuzahclh');
    console.log(response)

}
*/

async function node(){
    var pg = require('pg');
    //or native libpq bindings
    //var pg = require('pg').native

    var conString = "postgres://wuzahclh:yn1arCQgLJRRrdDu-eBttX1uP4roqWsb@babar.db.elephantsql.com/wuzahclh" //Can be found in the Details page
    var client = new pg.Client(conString);
    client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) {
        return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        // >> output: 2018-08-23T14:02:57.117Z
        client.end();
    });
});
}

node()

