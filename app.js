/* creo gli oggetti */
/* Ho diversi oggetti dello stesso tipo quindi userei una classe con un costruttore.*/

class TeamMember {
    constructor(name, role, url) {
        this.name = name;
        this.role = role;
        this.picture = url;
    }
}

/* creo l'array in cui inserire gli oggetti */
const listMembers = [
    /* creo gli oggetti passando i parametri corretti nel costruttore  */
    new TeamMember("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"),
    new TeamMember("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"),
    new TeamMember("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"),
    new TeamMember("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"),
    new TeamMember("Scott Estrada", "Developer", "scott-estrada-developer.jpg"),
    new TeamMember("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"),
];

console.log(listMembers);

/* prendo un elemento in cui inserire le card che andrò a generare */
let root = document.getElementById("wrapper");

/* attraverso l'array e interpolo i dati degli oggetti con index che varia */
for (let index = 0; index < listMembers.length; index++) {
    root.innerHTML += ` 
    <div class="card">
    <figure>
        <img src="img/${listMembers[index].picture}" alt="Elephant at sunset" />
        <figcaption class='name'>${listMembers[index].name}</figcaption>
        <figcaption class='role'>${listMembers[index].role}</figcaption>
    </figure>
    </div>
    `;

    /*    Stampo anche in console  */
    console.log(listMembers[index].picture);
    console.log(listMembers[index].name);
    console.log(listMembers[index].role);
    console.log("_________________________");
}
