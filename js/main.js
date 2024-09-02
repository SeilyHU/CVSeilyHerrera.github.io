

$(document).ready(function(){

    if(window.location.href.indexOf('index')>-1){
        //Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false
      });
    }
    



    if(window.location.href.indexOf('index')>-1){
    //Posts
    //Creacion desde Json archivos y enviarlo al html
    var posts =[
        {
            title: 'Quien soy',
            date: 'Publicado el '+ moment().day()+" de "+moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: 'Soy una estudiante apasionada de ingeniería en sistemas, originaria de '+
            'Guatemala. Hace dos años me adentre en el mundo de la programación, un campo que rapidamente se '
            +'convirtió en una de mis mayores pasiones. Me gusta la porgramación porque me brinda la oportunidad '+
            'de crear y construir soluciones innovadoras. A lo largo de mi viaje académico y profesional, he encontrado un '+
            'reto significativo, pero también una fuente de constante aprendizaje y crecimiento personal. '+
            'Siempre estoy en busqueda de nuevas oportunidades para expandir mis conocimientos y habilidades en el desarrollo de '+
            'software, actualmente me interesa mucho el área de front-end pero igual me gustaria tener conocimiento del back-end.'
        },
        {
            title: 'Mis habilidades',
            date: 'Publicado el '+ moment().day()+" de "+moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: '<ul><li><h4>Habilidades Tecnicas:</h4> HTML, CSS, Boostrap, JavaScript, C++ y C# en consola, Angular, TypeScript, base de datos no relacional MongoDB y actualemente estoy aprendiendo Java y SQL-Server</li><br>'+
            '<li><h4>Otras habilidades:</h4> Trabajo en equipo, comunicación, Creatividad, autodidacta</li><br>'+
            '<ul>'
        },
        {
            title: 'Educación',
            date: 'Publicado el '+ moment().day()+" de "+moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: '<ul>'+
            '<li><h4>Universidad Mariano Galvez de Guatemala</h4>2022-Actualmente <br> Ingeniería en sistemas de información y ciencias de la computación.</li><br>'+
            '<li><h4>Instituto Guillermo Putezeys</h4>2019-2020<br> Bachillerato en Ciencias y letras, con orientación en ciencias Biólogicas.</li><br>'+
            '<li><h4>Udemy</h4>2024<br>Master en JavaScript, JQuery, Angular, NodeJS.</li><br>'
            +'</ul>'
        },
        {
            title: 'Mis Sueños',
            date: 'Publicado el '+ moment().day()+" de "+moment().format("MMMM") + ' del '+moment().format("YYYY"),
            content: 'Uno de mis mayores sueños es viajar por el mundo y conocer las culturas de otros países, al igual '+
            'que explorar y conocer más sobre mi propio país. Además, deseo graduarme y convertirme en una '+
            'gran profesional, guiada por principios sólidos y capaz de ser útil en todo lo que hago.'
        },
      
    ];
    posts.forEach((item,index)=>{
        var post=`
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</spn>
                <p>
                    ${item.content}
                </p>
                <a href="about.html" class="button-more">Leer más</a>
            </article>
        `;
        $("#posts").append(post);
    });
    };

    //Selector de tema
    var theme=  $("#theme");

    $("#to-pink").click(function(){
        theme.attr("href","css/pink.css");
    });

    $("#to-violet").click(function(){
        theme.attr("href","css/violet.css");
    });

    $("#to-skyblue").click(function(){
        theme.attr("href","css/skyblue.css");
    });

    //Scroll arriba de la web

    $(".subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop:0
        }, 500);
        return false;
    });

    //Login falso

    $("#login form").submit(function(){
        var FormName = $("#FormName").val();

        localStorage.setItem("FormName", FormName);
    })

    var FormName = localStorage.getItem("FormName");

    if(FormName != null && FormName != "undefined"){
        var aboutP = $("#about p");

        aboutP.html("<br><strong>Bienvenido, "+ FormName+"</strong>");
        aboutP.append("<br><a href='#' id='logout'>Cerrar Sesión</a>");

        $('#login').hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    };

    
    //Seccion sobre mi- acordeon
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    };

    // Seccion Reloj  
    if(window.location.href.indexOf('reloj')>-1){

        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $("#reloj").html(reloj);
        },1000);
        
        
    }

   document.getElementById('CVdescargar').addEventListener('click', function(){
     // Crear un elemento <a> de forma dinámica
     const enlace = document.createElement('a');
     enlace.href = 'img/CV-SeilyMarissaHerreraUmaña.pdf'; // Asegúrate de que la extensión sea .pdf
     enlace.download = 'CV-SeilyMarissaHerreraUmaña.pdf'; // Nombre del archivo que se descargará
 
     // Añadir el enlace al cuerpo del documento y simular un clic
     document.body.appendChild(enlace);
     enlace.click();
 
     // Eliminar el enlace del DOM
     document.body.removeChild(enlace);
   });

   

    //validacion del formulario
    if(window.location.href.indexOf('validacion')>-1){

        

        $("#date").datepicker({
            dateFormat: 'dd-mm-yy'
        });
            
        

      

        $.validate({
            lang: 'es',
            errorMessagePosition:'top',
            scrollToTopOnError: true
        });


        
    };


});