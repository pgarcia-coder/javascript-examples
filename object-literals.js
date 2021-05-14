/* 
  Como alternativa a if-elseif-else o switch tenemos los object literal. Un objeto que hace la función de mapa
  en función del literal que se le pasa.
*/

const CAPITALS = {
    SPAIN: 'Madrid',
    FRANCE: 'Paris',
    GERMANY: 'Berlin',
    ITALY: 'Rome',
    // ...
};

console.log(CAPITALS['spain'.toUpperCase()]);
