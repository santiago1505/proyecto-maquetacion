/* json-server --watch db.json*/
const API = (`http://localhost:3000/propiedades`)

const apartamentos = async ()=>{

    try {
        const respu = await fetch(API);
    const datos = await respu.json();
    console.log(datos);
    datos.forEach(element => {
        console.log(element);
    
    });
    
    } catch (error) {
        console.log(error);
    }
    

}
apartamentos()