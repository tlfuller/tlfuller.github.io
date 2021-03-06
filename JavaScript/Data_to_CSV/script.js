let vm = new Vue({
    el: '#app',
    data: {
        userInput: "",
        result: [],
        name: "",
        search: "",
        store: [],
        filtered: []
    },
    methods: {
        getRandomPerson: function() {
            axios({
                method: 'get',
                url: 'https://randomuser.me/api/',
                dataType: 'json',
            }).then(response => this.result = response.data.results);
        },
        getPersonByName: function() {
            axios({
                method: 'get',
                url: `https://randomuser.me/api/`,
                dataType: 'json',
                params: {
                    gender: this.search
                },
            }).then(response => this.result = response.data.results);
        },
        getStore: function() {
            axios({
                method: 'get',
                url: 'https://randomuser.me/api/?nat=us',
                dataType: 'json',
                params: {
                    results: 5000
                },
            }).then(response => this.store = response.data.results);
        },
        getFilter: function(item) {
            return item.location.state.includes(this.userInput);
        },
        getSearch: function() {
            this.filtered = this.store;
            this.filtered = this.filtered.filter(this.getFilter);
            console.log(this.filtered);
        },
    }
});