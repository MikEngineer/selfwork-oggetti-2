// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

// Suggerimento:

// let rubrica = {
//   'contacts': [
//       {'nome': 'Nicola', 'telefono': '3331111111'},
//       {'nome': 'Lorenzo', 'telefono': '3332222222'},
//       {'nome': 'Paola', 'telefono': '3333333333'},
//       {'nome': 'Jenny', 'telefono': '3334444444'}
//   ],
//   ...
// }

let nome;
let telefono;

let check = Number(prompt("Premi 1 se vuoi eliminare o aggiungere il contatto;\nPremi 2 se vuoi modificare un contatto."))

let agenda = {
    rubrica: [
        {nome: "Nicola", telefono: 3331111111},
        {nome: "Carlo", telefono: 3333333333},
        {nome: "Roberta", telefono: 3333333333},
        {nome: "Valentina", telefono: 3334444444}
    ],
    mostra_contatti: function() {
        this.rubrica.forEach(contatto => {
            console.log(`${contatto.nome}: ${contatto.telefono}`);
        });
    },
    mostra_contatto: function(nome) {
        let contatto = this.rubrica.find(contatto => contatto.nome == nome)

        if(contatto) {
            console.log(`Contatto trovato! ${contatto.nome}: ${contatto.telefono}.`);
        }else {
            console.log("Contatto non trovato!");
        }
    },
    elimina_aggiungi_contatto: function(name, number) {
        let contatto = this.rubrica.find(contatto => contatto.nome == nome)
        let i = this.rubrica.indexOf(contatto);
        if (contatto) {
            this.rubrica.splice(i, 1);
            console.log("Contatto rimosso.");
        }else {
            this.rubrica.push({nome: name, telefono: number});
            console.log("Contatto aggiunto.");
        }       
        console.log(this.rubrica);
        
    },
    modifica_contatto: function(nome, newTelefono) {
        let contatto = this.rubrica.find(contatto => contatto.nome == nome)
        if(contatto){
            console.log("Contatto modificato.");
            contatto.telefono = newTelefono; 
        }else{
            console.log("Contatto non trovato.");
        }
    }
}

agenda.mostra_contatto(nome)
// agenda.elimina_aggiungi_contatto(nome, telefono);
// agenda.modifica_contatto("Mario", 3216549870)
// agenda.mostra_contatti();

// check per consentire all'utente di scegliere che operazione compiere, senza sovrapporre le varie funzioni


switch (check) {
    case 1:
       nome = prompt("Inserisci il nome del contatto.");
       telefono = prompt("Inserisci il numero del contatto.");
       agenda.elimina_aggiungi_contatto(nome, telefono);
    break;
    case 2:
        nome = prompt("Inserisci il nome del contatto.");
        telefono = prompt("Inserisci il numero del contatto.");
        agenda.modifica_contatto(nome, telefono);
}


agenda.mostra_contatti()
