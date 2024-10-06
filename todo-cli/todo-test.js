const todoList = () => {
  todo = [];
  const add = (event) => {
    //Added Finished key to store initially false
    event.Finished = false;
    todo.push(event);
    console.log(todo);
  };
  const markAsComplete = (index) => {
    todo[index].Finished = true;
    console.log(todo);
  };
  return { add, markAsComplete };
};

let toto = todoList();

toto.add({ Event: "Gym", Due: "12-10-2024" });
toto.markAsComplete(0);

// const datee = (d) =>{
//   return d.toISOString().split('T')[0]
// }

// let dat = new Date()
// let ds = datee(dat)
// console.log(dat.getDate())
