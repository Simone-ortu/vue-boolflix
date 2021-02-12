var app = new Vue({
    el: '#app',
    data: {
        apiKey: '96b596d61163d8fd4f87683973cabeb5',
        query: '',
        films: [],
        origLang: [],
        flags:[] 
    },
    methods: {
        search() {
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.apiKey,
                        query: this.query,
                        language: 'it-IT'
                    }
                })
                .then((result) => {
                    this.films = result.data.results;
                    console.log(result.data.results);

                    axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key: this.apiKey,
                        query: this.query,
                        language: 'it-IT'
                    }
                })
                .then((resultSeries) => {
                    this.films = [...this.films, ...resultSeries.data.results];
                    console.log(result.data.results);

                })
                


                })
                .catch((error) => alert(error));


            
            },
            getStars(vote){
                return parseInt(vote / 2)
            },
            diffStars(vote){
                return 5 - parseInt(vote/2)
            },

    }
})