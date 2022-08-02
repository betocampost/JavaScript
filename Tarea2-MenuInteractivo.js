
//MENU DE OPCIONES CON CICLOS
//Tarea 2n

function menu() {

  let opcion=parseInt(prompt("Bienvenido al menu  (1)Obtener media de edades  (2) Obtener media de calificaciones (3)Repetir actividad (4)Salir"));

  do{
    switch (opcion) {
      case 1:
        MediaEdades();
        menu();
        break;

      case 2:
        MediaCalificaciones();
        menu();
        break;

    }
  }while (opcion!=3);
}

menu();


function MediaEdades() {

  let CantidadAlumnos=parseInt(prompt("Ingresa la cantidad de alumnos: "));
  let Edades=0;
  let promedioEdades=0;
  let sumatoriaEdad=0;

  for (i=1;i<=CantidadAlumnos;i++){
    Edades=parseInt(prompt("Ingresa la edad del alumno "+i));

    sumatoriaEdad=sumatoriaEdad+Edades;

  }
  console.log("El promedio de edades de los "+CantidadAlumnos+" es de: "+sumatoriaEdad/CantidadAlumnos);
  alert("El promedio de edades de los "+CantidadAlumnos+" es de: "+sumatoriaEdad/CantidadAlumnos);

}

function MediaCalificaciones() {
  let CantidadMaterias=parseInt(prompt("Ingresa la cantidad de Materias: "));
  let calificaciones=0;
  let promedioCalif=0;
  let sumatoriaFinal=0;

  for(i=1;i<=CantidadMaterias;i++){
    calificaciones=parseFloat(prompt("Ingresa la calificacion numero: "+i));

    sumatoriaFinal=sumatoriaFinal+calificaciones;

  }
  console.log("El promedio de tus calificaciones es de: "+sumatoriaFinal/CantidadMaterias);
  alert("El promedio de tus calificaciones es de: "+sumatoriaFinal/CantidadMaterias);

}




