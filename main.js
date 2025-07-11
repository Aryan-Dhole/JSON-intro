const inputTask = document.getElementById('input');
const addbtn = document.getElementById('addbtn');
const tasklist = document.getElementById('taskslist');

// ❌ Incorrect: JSON.parse(localStorage.getItem(tasks)) — 'tasks' is undefined here
// ✅ FIXED:
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function rendertasks() {
    tasklist.innerHTML = "";

    tasks.forEach((task, index) => {  // ❌ You had syntax error here too
        const li = document.createElement('li');

        // ❌ You wrote: `${tasks}` → you're printing entire array every time
        // ✅ FIXED: Use `task` here
        li.innerHTML = `${task} <button onclick="deletetask(${index})">Delete</button>`;

        tasklist.appendChild(li);
    });
}

function deletetask(index) {
    tasks.splice(index, 1);
    savetasks();
    rendertasks();
}

addbtn.addEventListener("click", () => {
    // ❌ You wrote: inputTask.Value → JS is case-sensitive!
    const task = inputTask.value.trim();

    // ❌ You wrote: if (tasks !== "") → this checks the whole array
    // ✅ FIXED:
    if (task !== "") {
        tasks.push(task);
        savetasks();
        rendertasks();
        inputTask.value = "";
    }
});

// ❌ You wrote: renderTasks() → JS is case-sensitive
// ✅ FIXED:
rendertasks();
