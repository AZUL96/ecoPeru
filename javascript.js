//primero se declara un objeto
var country = {};

//luego se definen propiedades con las coordenadas para cada país
//se utilizan códigos de dos letras para cada país
country.GU = {
   desc: 'GUAM',
   coord: [ [new GLatLng(13.235, 144.7094), new GLatLng(13.42778, 144.6552), new GLatLng(13.65229, 144.8761), new GLatLng(13.235, 144.7094)]]
};
country.PT = {
   desc: 'PORTUGAL',
   coord: [ [new GLatLng(37.25319, -7.431854), new GLatLng(37.00889, -7.897779), new GLatLng(37.02631, -8.9892369), new GLatLng(38.71722, -9.118473)], [new GLatLng(37.70555, -25.45611), new GLatLng(37.88389, -25.85417), new GLatLng(37.70555, -25.45611)], [new GLatLng(32.6375, -16.94361), new GLatLng(32.6375, -16.94361)]]
   }; 

   var coordenadas_portugal = country.PT.coord; 

   for (i=0; i<coordenadas_portugal.length; i++){
    map.addOverlay(new GPolygon(coordenadas_portugal[i],"#669933", 2, 0.7, "#669933", 0.4));
 } 





 