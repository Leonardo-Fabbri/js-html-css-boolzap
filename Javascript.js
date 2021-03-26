var boh=1;
var boh2= {
    name:"michele",
    boh: function() {
        this.ciao()

    },
    ciao: function() {

    }

}
boh2.boh()

var app = new Vue ( {
    el: "#root",
    data:{
        newMessage:"",

        contactActive: 0,
        contacts: [
            //MICHELE
            {
                name:"Michele",
                avatar: "./img/avatar_1.jpg",
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent' 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            //FABIO
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            //SAMUELE
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages:[
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                ],
            },
            //LUISA
            {
                name: 'Luisa',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    }, 
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    }
                ],
            },
        ]
    },  
    methods:  {
        WHO:function(index) {
            this.contactActive = index;
        },

        addtochat: function(){

           //creo il nuovo messaggio con la struttura dei messaggi
           let nuovoMessaggio = {
            date: '10/01/2020 15:30:55',
            text: this.newMessage ,           
            status: 'sent', 
            //attenzione ricordarsi, messaggio inviato (status)
           }
           let nuovarisposta = {
               text:"ok",
               status: "received",
           }
          
           //sapere a quale chat mi devo riferire --> indice contanctActive
           //aggiungo l'oggetto creato precedentemente dentro la lista dei messaggi di quel contatto
           this.contacts[this.contactActive].messages.push(nuovoMessaggio);
           this.testoNuovoMessaggio = " ";
           this.contacts[this.contactActive].messages.push(nuovarisposta);
           
           
           
           
        }

          

    }
})



