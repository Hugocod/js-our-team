/* creo gli oggetti */
/* Ho diversi oggetti dello stesso tipo quindi userei una classe con un costruttore.*/

class TeamMember {
    constructor(name, role, url) {
        this.name = name;
        this.role = role;
        this.picture = url;
    }
}

/* creo gli oggetti passando i parametri corretti nel costruttore  */
const listMembers = [
    /* another */
    new TeamMember("Wayne Barnett", "Founder & CEO", "wayne-barnett-founder-ceo.jpg"),
    new TeamMember("Angela Caroll", "Chief Editor", "angela-caroll-chief-editor.jpg"),
    new TeamMember("Walter Gordon", "Office Manager", "walter-gordon-office-manager.jpg"),
    new TeamMember("Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"),
    new TeamMember("Scott Estrada", "Developer", "scott-estrada-developer.jpg"),
    new TeamMember("Barbara Ramos", "Graphic Designer", "barbara-ramos-graphic-designer.jpg"),
];

console.log(listMembers);
