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

let agenda = {
    rubrica: [
        Nicola = {nome: "Nicola", telefono: "3331111111"},
        Carlo = {nome: "Carlo", telefono: "3333333333"},
        Roberta = {nome: "Roberta", telefono: "3333333333"},
        Valentina = {nome: "Valentina", telefono: "3334444444"}
    ],
    mostra_contatti: function() {
        console.log(this.rubrica);
    },
    mostra_contatto: function() {
        console.log();
    },
    elimina_contatto: function(contatto_rimosso) {
        let i = this.rubrica.indexOf(contatto_rimosso);
        if (i >= 0) {
            this.rubrica.splice(i, 1);
        }else {
            console.log(`${contatto_rimosso} non è nell'elenco dei contatti.`);
        }       
        console.log(this.rubrica);
        
    },
    aggiungi_contatto: function(contatto_aggiunto) {
        this.rubrica.push(contatto_aggiunto);
    },
    modifica_contatto: function() {
        console.log();
    }
}

agenda.mostra_contatti();
agenda.aggiungi_contatto(Test = {nome: "name", telefono: "number"});
agenda.elimina_contatto(Marco = {});
