function ToDoList(){
     const todoList  = [
      {
        id: 1,
        title: 'Complete assignment',
      },
      {
        id: 2,
        title: 'Test one',
      },
      {
        id: 3,
        title: 'Test two',
      },
    ];
    
return(
    
<div>
 
    
    <ul>{todoList.map(function(item){
        return <ol>{item.id} {item.title}</ol>
        
      }    
    
    )}
      
      
      </ul>

    
</div>    
);
}
export default ToDoList

