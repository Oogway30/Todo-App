let submit_button = document.querySelector(".todo-content-submission");
let biggest_biggest_div = document.querySelector(".todos");
let tod = document.querySelectorAll(".todos");
let delete_buttons = document.querySelectorAll(".delete");
let todoses = document.querySelector(".todoses");
let all_todos = [];
let pending_todo = [];
let done_todo = [];
let all_filter_div = document.querySelector(".all-div");
let done_filter_div = document.querySelector(".done-div");
let pending_filter_div = document.querySelector(".pending-div");
/* <div class="todos"><div class="todo-all">
          <div class="todo-checkbox">
            <input type="checkbox" class="checkbox">
          </div>
          <div class="todoses">
            <p class="content">walk the dog.</p>
          </div>
          <div class="button-div">
            <input type="button" class="delete" value="Delete" />
          </div>
        </div>
      </div>
    </div> */
all_filter_div.addEventListener("click", () => {
  all_filter_div.classList.add("filters");
  done_filter_div.classList.remove("filters");
  pending_filter_div.classList.remove("filters");
  for (let i = 0; i < biggest_biggest_div.length; i++) {
    const element = biggest_biggest_div[i];
    element.remove();
  }
  let x = [];
    
  all_todos.forEach((e) => {
    if (!x.includes(e)) {
      biggest_biggest_div.append(e);
    } else {
      x.push(e);
    }
  });
});

submit_button.addEventListener("click", () => {
  let todo_content = document.querySelector(".todo-content").value;

  if (todo_content) {
    let checkbox_div = document.createElement("div");

    checkbox_div.setAttribute("class", "todo-checkbox");

    let new_checkbox = document.createElement("input");

    new_checkbox.setAttribute("type", "checkbox");

    new_checkbox.setAttribute("class", "checkbox");

    let biggest_div = document.createElement("div");

    biggest_div.setAttribute("class", "todo-all");

    let new_todo = document.createElement("div");

    new_todo.setAttribute("class", "todoses");

    let new_p = document.createElement("p");

    new_p.innerHTML = todo_content;

    new_p.setAttribute("class", "content");

    new_todo.append(new_p);

    let delete_button_div = document.createElement("div");

    delete_button_div.setAttribute("class", "button-div");

    let input_delete = document.createElement("input");

    input_delete.setAttribute("type", "button");

    input_delete.setAttribute("class", "delete");

    input_delete.value = "Delete";

    checkbox_div.append(new_checkbox);

    biggest_div.append(checkbox_div);

    biggest_div.append(new_todo);

    biggest_div.append(delete_button_div);

    delete_button_div.append(input_delete);

    biggest_biggest_div.append(biggest_div);

    all_todos.push(biggest_div);

    document.querySelector("#input-field").value = "";

    delete_buttons = document.querySelectorAll(".delete");

    tod = document.querySelectorAll(".todo-all");

    // for (let index = 0; index < tod.length; index++) {
    //   const e = tod[index];
    //   const checkbox = e.querySelector(".todo-checkbox input[type='checkbox']");

    //   if (checkbox && checkbox.checked) {
    //     done_todo.push(e);
    //   } else {
    //     pending_todo.push(e);
    //   }}
    
    delete_buttons.forEach((element) => {
      element.addEventListener("click", () => {
        let todo_to_remove = element.parentElement.parentElement
        let index = Array.from(biggest_biggest_div.children).indexOf(todo_to_remove)
        if (index !== -1) {
          all_todos.splice(index, 1); // Remove from the all_todos array
        }
        element.parentElement.parentElement.remove();
      });
    });
  } else {
    alert("Enter the value for the To-Do");
  }
});

// let todo_alls;


done_filter_div.addEventListener("click", () => {
  done_filter_div.classList.add("filters");
  all_filter_div.classList.remove("filters");
  pending_filter_div.classList.remove("filters");

  for (let i = 0; i < all_todos.length; i++) {
    const e = all_todos[i];
    const checkbox = e.querySelector(".todo-checkbox input[type='checkbox']");
    if (checkbox.checked) {
      done_todo.push(e);
      e.remove();
    } else {
      e.remove();
    }
  }
  let x = [];
  done_todo.forEach((e) => {
    if (!x.includes(e)) {
      biggest_biggest_div.append(e);
    } else {
      x.push(e);
    }
  });
});

pending_filter_div.addEventListener("click", () => {
  pending_filter_div.classList.add("filters");
  all_filter_div.classList.remove("filters");
  done_filter_div.classList.remove("filters");
  // let pending_todo = [];
  for (let i = 0; i < all_todos.length; i++) {
    const e = all_todos[i];
    const checkbox = e.querySelector(".todo-checkbox input[type='checkbox']");
    if (!checkbox.checked) {
      pending_todo.push(e);
      e.remove();
    } else {
      e.remove();
    }
  }
  let x = [];
  pending_todo.forEach((e) => {
    if (!x.includes(e)) {
      biggest_biggest_div.append(e);
    } else {
      x.push(e);
    }
  })
 
});

//iterate through the all_todo list with all todos in it and sort it based on the case (pending or done) and write new for loops and delete all comments which are not needed any longer
// let doney_todo = [];

// let tod = document.querySelectorAll(".todo-all");
// for (let idea = 0; idea < tod.length; idea++) {
//   const e = tod[idea];
//   e.remove()
// }
// for (let i = 0; i < all_todos.length; i++) {
//   const e = all_todos[i];
// const checkbox = e.querySelector(".todo-checkbox input[type='checkbox']");
//   if(!doney_todo.includes(e)){
//     if(checkbox.checked){
//       doney_todo.push(e)
//       console.log('task given was finished successfully')
//     }
//   }
// }
// for (let todo = 0; todo < doney_todo.length; todo++) {
//   const e = doney_todo[todo];
//   biggest_biggest_div.append(e)
//   }

// for (let index = 0; index < tod.length; index++) {
//   const e = tod[index];

//   if (checkbox.checked) {
//     if (e in done_todo){
//     done_todo.push(e);
//     }e.remove()
//   } else {
//     pending_todo.push(e);
//     e.remove()
//   }
// }
