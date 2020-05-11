function comprobar()
{
    var nombre = document.formu.user_name.value ;
    var edad = document.formu.user_edad.value ;
    if (edad >= 18)
    {
        alert(nombre + " eres mayor de edad");
    }
    else
    {
        alert(nombre + " eres menor de edad") ;
    }
        
}