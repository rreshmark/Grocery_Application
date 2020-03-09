import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css','./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {
   
  userinput:string;
  todo={
    name:'',
    id:0
  };
  todolist=[];

  onClick(){
    console.log( JSON.stringify(this.todo));
    if(this.todo.id == 0)
    {
    
      this.todolist.push({id:(new Date()).getTime, name: this.todo.name});
      
      console.log("after if")
    }
    this.todo ={
      name:'',
      id:0
    };
  }
        onEdit(item){
        this.todo = item;
      }
      onDelete(item){
        for(var i = 0;i < this.todolist.length; i++){
            if(item.id == this.todolist[i].id){
                this.todolist.splice(i,1);
                break;
            }
        }
    }
  
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
