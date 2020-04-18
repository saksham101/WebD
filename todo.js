var todos =[];
var input = prompt("What you wanna do ?");
while(input !== "quit")
{
    if(input === "list")
    {
        listTodo();
    }
    else if(input === "new")
    {
        addTodo();
    }
    else if(input === "delete")
    {
        deleteTodo();
    }
    else
    {
        console.log("wrong choice");
    }
    var input = prompt("What you wanna do ?");
}
console.log("Okay , You quit");
function listTodo()
{
    console.log("..$..$..$..$..$..")
    todos.forEach
    (function(todo , index)
        {
            console.log(index + ": " +todo);
        }
    );
    console.log("..$..$..$..$..$..")
}
function addTodo()
{
    var newTodo = prompt("Enter new TODO");
    todos.push(newTodo);
    console.log("Added TODO");
}
function deleteTodo()
{
    var index = prompt("Enter index of TODO to delete");
    todos.splice(index,1);
    console.log("Deleted TODO");
}