var app = new Vue({
    el:'#app',
    data:{
        apiKey:'96b596d61163d8fd4f87683973cabeb5',
        query:'',
        films: []
    },
    methods:{
        search(){
            axios
            .get('https://api.themoviedb.org/3/search/movie',{
                params:{
                    api_key:this.apiKey,
                    query: this.query,
                    language: 'it-IT'
                }
            })
            .then((result)=> {
                this.films = result.data.results;
                console.log(result.data.results);
                

            })
            .catch((error)=> alert('errore'));
        }

    }
})