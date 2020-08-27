let villeChoisie = "Paris";
let changerDeVille = document.querySelector('#changer');

function recevoirTemperature(ville){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } else { 
                alert('un problème est survenu');
            }
        }
    }    
}    

changerDeVille.addEventListener('click', () => {
    villeChoisie = prompt('Choisissez une ville : ')
    recevoirTemperature(villeChoisie);
})


recevoirTemperature(villeChoisie);
