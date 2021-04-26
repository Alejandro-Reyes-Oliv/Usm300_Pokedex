
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const pokemones = []; //esto genera una constante, lo que hace que no pueda ser sobreescrito / definir un arreglo
  const cargarTabla = ()=>{
    //1.- Obtener una referencia a la tabla
    let tbody = document.querySelector("#tbody-tabla");
    //Eliminar el contenido de tbody
    tbody.innerHTML = "";
    //2.- Recorrer la lista de pokemones
    for (let i=0; i < pokemones.length; ++i){
      let p = pokemones[i];
      //3.- Por cada pokemon generar una fila de la tabla (tr)
      let tr = document.createElement("tr");
      //4.- Por cada atributo generar un rd de la tabla
      let tdNro= document.createElement("td");
      let tdNombre= document.createElement("td");
      let tdTipo = document.createElement("td");
      let tdDescripcion = document.createElement("td");
      let tdAcciones = document.createElement("td");
      
      //Definir lo que va en la tabla
      tdNro.innerText = i + 1;
      tdNombre.innerText = p.nombre;
      let tipo = document.createElement("i");
      if(p.tipo == "1"){
      // tipo <i class="fas fa-leaf"></i>
        tipo.classList.add("fas", "fa-leaf", "text-success", "fa-3x");
      }else if( p.tipo == "2"){
      // <i class="fas fa-leaf"></i> 
        tipo.classList.add("fas", "fa-fire", "text-danger", "fa-3x");
      }else if(p.tipo == "3"){
        tipo.classList.add("fas","fa-tint", "text-primary", "fa-3x");
      }else if(p.tipo == "4"){
        tipo.classList.add("fas", "fa-bolt", "text-warning", "fa-3x");
      }else{
        tipo.classList.add("fas", "fa-bullseye", "text-info", "fa-3x");
      }
      tdTipo.classList.add("text-center");
      tdTipo.appendChild(tipo);
      //Cuando quiero agregar un elemento dentro de otro: appendChild
      //Cuando quiero definir texto, innerText
      //Cuando quiero

      tdDescripcion.innerHTML = p.descripcion;
      //TO-DO: que hago con la acciones!
    
      //5.- Agregar los td al tr
      tr.appendChild(tdNro);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdDescripcion);
      tr.appendChild(tdAcciones);
      //6.- Agregar el tr a la tabla
      tbody.appendChild(tr);

    }
  };

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let descripcion = tinymce.get("descripcion-txt").getContent();   //Solo para el tinymce

    let pokemon = {}; //con esto se declara que es un objeto
    pokemon.nombre = nombre; //Esto le da un atributo al objeto
    pokemon.tipo = tipo;
    pokemon.legendario = legendario;
    pokemon.descripcion = descripcion;
    pokemones.push(pokemon);
    cargarTabla(); //Funcion
    Swal.fire("Resultado exitoso!", "Pokemon registrado", "info");
    //console.log("Hola Mundo!", nombre, " ", tipo, " ", legendario, " ", descripcion);

    
});

