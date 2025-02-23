editing = false;
firstName = "Tony";
lastName = "Stark";
let userName = "Iron";

//helper to update the header display remembers the 1st state then just updates with it
const header_the = document.getElementsByClassName("main")[0].innerHTML
document.getElementById("userName").value = userName;
const userName_the =document.getElementById("userName").innerHTML= userName


//base function invert editing state say fals -> true then update the header to show stuff accordingly to the state
function set_editing() {
  editing = !editing;
  header_simple_control();
}

//part of the header block when the false is true
let header_block = ` 
    <section class="header"> 
      <h1>Welcome back <br />${firstName}  ${lastName}   ! </h1> 
      <button class="edit-button" onClick="set_editing()">Edit Name</button> 
    </section> `;

    function show_name_welcoming() {
      // function to update the header display when editing is false again
    const header = document.getElementsByClassName("main")[0].innerHTML = header_block + header_the;
    // On rattache la balise, le block maintenant dans le DOM +++ correctioon oui dans le rien du tout
    
  }


    
function header_simple_control() {
  //  function dropDown () {} so function controls the header to show name or edit form

  return (!editing ?
  show_name_welcoming()
  : show_form())
}

header_simple_control();

let form_name_update = `

<form class='profil-header' >
            <h1>Edit user name</h1>
            <label htmlFor="userName">New user name</label>
            <input
                type="text"
                id="userNameVar"
                value=""
                required
            />
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                id="firstName"
                value=${firstName}
                disabled
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id="lastName"
                value=${lastName}
                disabled
            />
            <section class='profil-button'>
              <input class="submit" type="submit" onClick="handleSave()" value="Save" />
              <button type="button" onClick="set_editing()">Cancel</button>
            </section>
            
        </form>`

        function show_form() {
          const header = document.getElementsByClassName("main")[0].innerHTML = form_name_update + document.getElementsByClassName("main")[0].innerHTML;
          // On rattache la balise, le block maintenant dans le DOM +++ correctioon oui dans le rien du tout
          
        }
        function append_name_welcoming() {
          const header = document.getElementsByClassName("main")[0].innerHTML 
          // Création d’une balise dédiée à une visite av id
          const visitElement = document.createElement("figure");
          visitElement.id = visit.id
          // Création des balises
          const imageElement = document.createElement("img");
          imageElement.src = visit.imageUrl;
          const captionElement = document.createElement("figcaption");
          captionElement.innerText = visit.title;
      
          // On rattache la balise article a la section Fiches
          sectionGallery.appendChild(visitElement);
          visitElement.appendChild(imageElement);
          visitElement.appendChild(captionElement);
        }

        function handleSave() {
          userName = document.getElementById("userNameVar").value;
          console.log(userName)
          document.getElementById("userName").innerHTML= userName
          set_editing()
          return userName
        }

  