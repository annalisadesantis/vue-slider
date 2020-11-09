var app = new Vue({
    el: "#root",
    data: {
        titolo: "Prenota la tua visita",
        paragrafo: "Scopri la più grande collezione di opere di Vincent van Gogh al Museo Van Gogh di Amsterdam, con capolavori come I mangiatori di patate, Mandorlo in fiore e Il seminatore.",
        indice_immagine: 0,
        immagini: ["https://images-na.ssl-images-amazon.com/images/I/71utYjJJf4L._AC_SX450_.jpg", "https://i0.wp.com/www.linkazzato.it/wp-content/uploads/mangiatori-di-patate.jpg?resize=615%2C500", "https://www.psiconline.it/images/van_gogh_il_campo.jpg", "https://artslife.com/wp-content/uploads/2016/07/Vincent-Van-Gogh-Autoritratto-1889.jpg", "https://images-na.ssl-images-amazon.com/images/I/61EL3l0m7nL._AC_SX450_.jpg"]
    },
    methods: {
        prev_image() {
            this.indice_immagine -= 1;
            if(this.indice_immagine < 0) {
                this.indice_immagine = this.immagini.length - 1;
            }
        },
        next_image() {
            this.indice_immagine += 1;
            if(this.indice_immagine > this.immagini.length - 1) {
            this.indice_immagine = 0;
            }
        },
        timing(){
            this.indice_immagine += 1;
        },
        parte(){
            setTimeout(timing, 1000);
        }
    }
});
