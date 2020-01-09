lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {

    var input = document.getElementById('direccion');
    var input2 = document.getElementById('desde');
    var input3 = document.getElementById('hasta');
    var input4 = document.getElementById('agregar');

    // let autocomplete = new google.maps.places.Autocomplete($('#direccion')[0], { types: ['geocode']});

    // autocomplete.bindTo('bounds', mapa);
    // autocomplete.setOptions({strictBounds: true});

    

    let areaLimite = new google.maps.Circle(
      {center: posicionCentral, radius: 20000});

      var options = {
      bounds: areaLimite.getBounds()
      };

    new google.maps.places.Autocomplete(input, options);
    new google.maps.places.Autocomplete(input2, options);
    new google.maps.places.Autocomplete(input3, options);
    new google.maps.places.Autocomplete(input4, options)
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
        
        // autocomplete.setBounds(areaLimite.getBounds());

        /*Call setBounds() to change the search area on an existing Autocomplete.
        /*To change the search area for an existing SearchBox, call setBounds() on the
         SearchBox object and pass the relevant LatLngBounds object.*/

  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa);
    autocompletar();
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {

    let request = {
      location: posicion,
      radius: parseInt($('#radioS').text()).toString(),
      type: [$('#tipoDeLugar')[0].value]
    };
        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);

  }
  return {
    inicializar,
    buscarCerca
  }
})()
