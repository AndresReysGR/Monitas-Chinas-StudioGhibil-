
    const ghibilTitle = document.getElementById("ghibil-title");
    const ghibilfronttitle = document.getElementById("ghibil-fronttitle");
    const ghibilSprite = document.getElementById(`ghibil-sprite`);
    const ghibilDirector = document.getElementById(`ghibil-director`);
    const ghibilDescripcion = document.getElementById(`ghibil-descripcion`);
    const ghibilPeople = document.getElementById(`ghibil-people`);
    const ghibilProducer = document.getElementById(`ghibil-producer`);
    const ghibilLocations = document.getElementById(`ghibil-locations`);
    const ghibilRelease_Date= document.getElementById(`ghibil-releasedate`);
    const ghibilDirectorVehicles = document.getElementById(`ghibil-vehicles`);


const apiUrl ="https://ghibliapi.herokuapp.com/films/"; 

const getVehicles = async url =>{
    const response = await fetch(url); //${apiUrl}
    const dataVehicles = await response.json();
    //console.log(dataVehicles);
    return dataVehicles;
}

const getLocations = async url =>{
    const response = await fetch(url);
    const dataLocations = await response.json();
    //console.log(dataLocations);
    return dataLocations;
}

const getPeople = async url =>{
    const response = await fetch(url);
    const dataPeople = await response.json();
    //console.log(dataPeople);
    return dataPeople;
}

const getGhibilDescripcionData = async url =>{
    const response = await fetch(url);
    const ghibilData = await response.json();
  // console.log(ghibilData);
    ghibilData.forEach(async element => {
        const {title, director, description, people, producer, locations, release_date, vehicles} = element;

        console.log(title);
        console.log(director);
        console.log(producer);
        console.log(description);
        console.log(release_date)
        //console.log(people);
        //console.log(locations);
        //console.log(vehicles);
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
        getVehicles(vehicles).then(
            dataVehicles =>{
                dataVehicles.forEach(element => {
                    const {name, vehicle_class} = element;
                   console.log(vehicle_class);
                   console.log(name);
                    //console.log(tarrain);
                
                });
            }
        );
       
        ghibilfronttitle.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
       
       /* ghibilSprite.innerText = `Conoce sobre `;
        ghibilDirector .innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilDescripcion.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilPeople.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilProducer.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilLocations.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilRelease_Date.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
        ghibilDirectorVehicles.innerText = `Conoce sobre las peliculas de Estudio Ghibil`;
*/
        title.forEach(element => {
            ghibilTitle.innerHTML = `<li>${element.title.title}</li>`;
            
        });
        
       
        });
    return ghibilData;

    
    //pokemonNumber.innerText= `Numero de Pokedexs: ${pokemon.id}`;
    //pokemonWeight.innerText=`El peso es de: ${pokemon.weight}`
    //pokemonFrontImg.src = frontImg;
};

/*let getGhibilData = async () =>{
    const response = await fetch (`${apiUrl}`)
};*/
getGhibilDescripcionData(apiUrl);