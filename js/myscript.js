// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp, ref } = Vue

  createApp({
    data() {
      return {
        messaggio: "VUE HELLO!",
      }
    }
  }).mount('#app')