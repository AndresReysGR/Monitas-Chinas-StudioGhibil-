const ghibil ={
    name : document.getElementById(`ghibil-name`),
    sprite : document.getElementById(`ghibil-sprite`),
    descripcion: document.getElementById(`ghibil-descripcion`)
   
};

const apiUrl ="https://ghibliapi.herokuapp.com/films/"; 

const getVehicles = async url =>{
    const response = await fetch(url);
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
   console.log(ghibilData);
    ghibilData.forEach(async element => {
        const {title, director, description, people, producer, locations, release_date, vehicles} = element;

        console.log(title);
        console.log(director);
        console.log(producer);
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
        console.log(description);
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
        console.log(release_date)
        //console.log(people);
        //console.log(locations);
        //console.log(vehicles);

       
     
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
        });
    return ghibilData;
}

/*let getGhibilData = async () =>{
    const response = await fetch (`${apiUrl}`)
};*/
getGhibilDescripcionData(apiUrl);