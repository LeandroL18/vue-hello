// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

  createApp({
    data() {
      return {
        messaggio: "VUE HELLO!",
        src: "img/01.webp"
      }
    }
  }).mount('#app')