const ghibil ={
    name : document.getElementById(`ghibil-name`),
    sprite : document.getElementById(`ghibil-sprite`),
    descripcion: document.getElementById(`ghibil-descripcion`)
   
};

const apiUrl ="https://ghibliapi.herokuapp.com/films/";

const getGhibilDescripcionData = async url =>{
    const response = await fetch(url);
    const ghibilData = await response.json();
    console.log(ghibilData);
    return ghibilData;
};

let getGhibilData = async () =>{
    const response = await fetch (`${apiUrl}58611129-2dbc-4a81-a72f-77ddfc1b1b49`)


};
getGhibilDescripcionData(apiUrl);