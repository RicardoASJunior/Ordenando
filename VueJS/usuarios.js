
let app = new Vue({
    el: '#fetch',
    data:{
        users: [],
    },
    created(){
        fetch('https://reqres.in/api/users?per_page=10')
            .then(response => {
                response.json().then(data => {
                    this.users = data;
                })
            }).catch(err => {
                console.log(err);
            })
        console.log("valor selecionado - " + this.valueChoiced)        
    }

})