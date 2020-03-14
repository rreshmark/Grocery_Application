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
  donelist=[];

  onClick(){
    console.log( JSON.stringify(this.todo));
    if(this.todo.id == 0)
    {
       var itemToInsert = {id:(new Date()).getTime(), name: this.todo.name}
      this.todolist.push(itemToInsert);  
      console.log("inserted" + JSON.stringify(itemToInsert) +" with" + itemToInsert.id)
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
        console.log("on delete" + JSON.stringify(item));
        
        for(var i = 0;i < this.todolist.length; i++){
            if(item.id == this.todolist[i].id){
                var todoarray=this.todolist.splice(i,1);
                      console.log(todoarray);
                break;
                
            }
         }
       }
  oncheck(item){
    this.donelist.push(item);
    console.log("oncheck" + JSON.stringify(item));
    this.onDelete(item);
  }

  onClear(){
    this.donelist=[];
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
