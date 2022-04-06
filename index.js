const baseUrl="https://restduathlon.azurewebsites.net/api/Duathletes"

const app = Vue.createApp({
    data(){
        return{
            //properties
            duathletes:[],//array 
            error:null, //ingen ting ikke nogle objekt

        }
    },
    methods:{
        getAllDuathletes(){
            this.getAllDuathleteshelper(baseUrl)
        },
       async getAllDuathleteshelper(url){
            try {//fejl håndtering 
                const result = await axios.get(url)
                this.duathletes= result.data
                console.log(this.duathletes)
                //console.writeline udskriver nogle
            } catch (ex) {//exception
                alert(ex.message) 
            }
        },
        async postDuathletes(){
            try {
                const result = await axios.post(baseUrl, this.postData)
                this.duathleteMessage ="Response: " + result.status + " " + result.statusText
                //efter den har postet, kaldes metoden get, så listen opdateres med det nye
                this.getAllDuathletes()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteDuathletes(deleteBib){
            const url = baseUrl + "/" + deleteBib
            try {
                 const result = await axios.delete(url)
                 this.duathleteMessage = result.status + " " + result.statusText
                 this.getAllDuathletes()
            }catch(ex){
                //message will be shown if error
                alert(ex.message)
            }
        },
        

    }
}).mount("#app")