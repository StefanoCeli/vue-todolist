const app = new Vue({

    el: '#app',
    data: {
        logo:"assets/img/logo.png",
        alertAttivo:false,
        addStrTodo:"",
        toDos:[
            {
                todo:"Ripassare HTML/CSS",
                checked:false
            },
            {
                todo:"Studiare Vue",
                checked:false
            },
            {
                todo:"Amare Vue",
                checked:true
            },
            {
                todo:"Alzarsi presto la mattina per ripassare",
                checked:false
            },
            {
                todo:"Imprecare perchè non funziona il codice",
                checked:false
            }
        ]
      
    },
    methods:{
        addTodo(){

            if(this.addStrTodo.length > 2){
                this.toDos.push(
                    {
                        todo:this.addStrTodo,
                        checked:false
                    }
                )
                this.addStrTodo="";
            }else{

                this.alertAttivo=true;
                setTimeout(()=>{
                    this.alertAttivo=false;
                },2000);
                
                
            }
        },
        removeTodo(index){
            this.toDos.splice(index,1);
        }
    }

})
