import axios from 'axios'

export const mymixin = {
    data(){
        return{
            error:false,
            localStURL:[]
        }
    },
    methods:{
        checkURLValidity(){
            var url = document.querySelector('.user-input').value
            var regex = new RegExp('(https?:\\/\\/)|(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', 'ig');
            if (url.match(regex)) {
                this.error = false
                axios({
                    method: "post",
                    url: "http://localhost:3000/shorten",
                    data: {
                        url
                    }
                }).then((data) => {
                    this.getOrSetLocalStorage(data)
                })
            }
            else {
                this.error = true
            }
        },
        getOrSetLocalStorage(data){
            if(localStorage.getItem("URLs")){
                var allUrls = JSON.parse(localStorage.getItem("URLs"))
                allUrls.push({
                    original:data.data.originalURL,
                    shorten:"localhost:3000/" + data.data._id
                })
                this.localStURL = allUrls
                localStorage.setItem("URLs",JSON.stringify(allUrls))
            }
            else{
                localStorage.setItem("URLs",JSON.stringify([{
                    original:data.data.originalURL,
                    shorten:"localhost:3000/" + data.data._id
                }]))
                this.localStURL = [{
                    original:data.data.originalURL,
                    shorten:"localhost:3000/" + data.data._id
                }]
            }
        },
        getLocalStorage(){
            this.localStURL = JSON.parse(localStorage.getItem("URLs"))
        }
    },
    created() {
       this.getLocalStorage()
    }
}