
 /* Si algunas de las api no les sale o hay un errror, vuelvan a caragar*/
 /*hay como 3 errores en el sitio, sin embargo, son por la Api de la misma pagina, asi que no hay problema*/  
/*Todo este codigo es la Api, hace falta hacer el html, para que se imprima la informacion en el sitio*/


const title = document.getElementById('title');
const release_date = document.getElementById('release_date');
const director = document.getElementById('director');
const producer = document.getElementById('producer');
const description = document.getElementById('description');
const ghibliData = document.getElementById('ghibliData');

const url ="https://ghibliapi.herokuapp.com/films/"; 
 /* Parte de la Api que dice las localizaciones*/

/*Api Principal*/
const getGhibliDescripcionData = async url =>{
    const response = await fetch(url);
    const ghibliData = await response.json();
  // console.log(ghibilData);

  
    ghibliData.forEach(async element => {
        /*aqui vienen todos los datos de la Api*/
        const {title, director, description, producer, release_date} = element;

        console.log(title);
        console.log(director);
        console.log(producer);
        console.log(description);
        console.log(release_date)
      

        
    title.innerText = title;
    director.innerText = director;
    producer.innerText = producer;
    release_date.innerText = release_date;
    description.innerText = description;
     
        });
    return ghibliData

  
   
};

/*let getGhibilData = async () =>{
    const response = await fetch (`${url}`)
}*/
getGhibliDescripcionData(url);