
   
/*Todo este codigo es la Api, hace falta hacer el html, para que se imprima la informacion en el sitio*/

const apiUrl ="https://ghibliapi.herokuapp.com/films/"; 
 /* Parte de la Api que dice las localizaciones*/
const getLocations = async url =>{
    const response = await fetch(url);
    const dataLocations = await response.json();
    //console.log(dataLocations);
    return dataLocations;
}
/* Parte de la Api que dice las personas que participaron*/
const getPeople = async url =>{
    const response = await fetch(url);
    const dataPeople = await response.json();
    //console.log(dataPeople);
    return dataPeople;
}
/*Api Principal*/
const getGhibilDescripcionData = async url =>{
    const response = await fetch(url);
    const ghibilData = await response.json();
  // console.log(ghibilData);
    ghibilData.forEach(async element => {
        /*aqui vienen todos los datos de la Api*/
        const {title, director, description, people, producer, locations, release_date} = element;

        console.log(title);
        console.log(director);
        console.log(producer);
        console.log(description);
        console.log(release_date)
        //console.log(people);
        //console.log(locations);

      /*Parte de la Api de loacalizaciones que se encuentra al principio del codigo*/
        getLocations(locations).then(
            dataLocations =>{
                dataLocations.forEach(element => {
                    const {climate, name, tarrain} = element;
                   console.log(climate);
                   console.log(name);
                    console.log(tarrain);
                
                });
            }
        );
        
        /*Parte de la Api de loacalizaciones que se encuentra al principio del codigo*/
        getPeople(people).then(
            dataPeople =>{
                dataPeople.forEach(element => {
                    const {name, age, gender, eye_color, } = element;
                   console.log(name);
                   console.log(age);
                console.log(gender);
                    //console.log(eye_color);
                });
            }
        );
           
       
        
       
        });
    return ghibilData;

    
   
};

/*let getGhibilData = async () =>{
    const response = await fetch (`${apiUrl}`)
};*/
getGhibilDescripcionData(apiUrl);