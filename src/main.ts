interface GrupoMusical {
    nombre: string;
    año_fundacion: number;
    activo: boolean;
    genero: string;
}

let pop_rock = "🎵 Pop Rock"
let rock = "🎸 Rock"
let hard_rock = "🤘 Hard Rock"
let clasica = "🎼 Clásica"

const estiloNombre = "font-weight: bold; font-size: 18px; background-color: green;"

const beatles: GrupoMusical = {
    nombre: "The Beatles",
    año_fundacion: 1960,
    activo: true,
    genero: pop_rock
}

const queen: GrupoMusical = {
    nombre: "Queen",
    año_fundacion: 1970,
    activo: false,
    genero: rock
}

const acdc: GrupoMusical = {
    nombre: "AC DC",
    año_fundacion: 1973,
    activo: true,
    genero: hard_rock
}

const beethoven: GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    año_fundacion: 1770,
    activo: false,
    genero: clasica
}

const stones: GrupoMusical = {
    nombre: "The Rolling Stones",
    año_fundacion: 1962,
    activo: true,
    genero: rock
}

console.log(`%c${beatles.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`Año de fundación: ${beatles.año_fundacion}`);
console.log(`Activo: ${beatles.activo}`);
console.log(`Género Musical: ${beatles.genero}`);
console.log('-----------------------'

);

console.log(`%c${queen.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`Año de fundación: ${queen.año_fundacion}`);
console.log(`Activo: ${queen.activo}`);
console.log(`Género Musical: ${queen.genero}`);
console.log('-----------------------'

);

console.log(`%c${acdc.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`Año de fundación: ${acdc.año_fundacion}`);
console.log(`Activo: ${acdc.activo}`);
console.log(`Género Musical: ${acdc.genero}`);
console.log('-----------------------'

);

console.log(`%c${beethoven.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`Año de fundación: ${beethoven.año_fundacion}`);
console.log(`Activo: ${beethoven.activo}`);
console.log(`Género Musical: ${beethoven.genero}`);
console.log('-----------------------'

);

console.log(`%c${stones.nombre}`, "font-weight: bold; font-size: 16px; background-color: green; color: white;");
console.log(`Año de fundación: ${stones.año_fundacion}`);
console.log(`Activo: ${stones.activo}`);
console.log(`Género Musical: ${stones.genero}`);
console.log('-----------------------'

);
