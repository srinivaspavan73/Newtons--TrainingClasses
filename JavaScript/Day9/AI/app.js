// In-memory storage for tasks (replaces localStorage)
let tasks = [];
let currentEditId = null;

// DOM elements
const taskForm = document.getElementById('taskForm');
const taskContainer = document.getElementById('taskContainer');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Task class
class Task {
    constructor(title, description, status) {
        this.id = Date.now() + Math.random();
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = new Date().toLocaleDateString();
    }
}

// Create a new task
function createTask(title, description, status) {
    const task = new Task(title, description, status);
    tasks.push(task);
    displayTasks();
    return task;
}

// Read/Display all tasks
function displayTasks() {
    taskContainer.innerHTML = '';
    
    if (tasks.length === 0) {
        taskContainer.innerHTML = '<div class="no-tasks">No tasks yet. Add your first task above!</div>';
        return;
    }

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.status === 'completed' ? 'status-complete' : ''}`;
        
        taskElement.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
            </div>
            <div class="task-description">${task.description || 'No description'}</div>
            <div class="task-meta">
                <span>Status: ${task.status} | Created: ${task.createdAt}</span>
                <div class="task-actions">
                    <button class="btn btn-small btn-edit" onclick="editTask(${task.id})">Edit</button>
                    <button class="btn btn-small btn-delete" onclick="deleteTask(${task.id})">Delete</button>
                </div>
            </div>
        `;
        
        taskContainer.appendChild(taskElement);
    });
}

// Update an existing task
function updateTask(id, title, description, status) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].title = title;
        tasks[taskIndex].description = description;
        tasks[taskIndex].status = status;
        displayTasks();
    }
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        displayTasks();
    }
}

// Edit task (populate form with existing data)
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskStatus').value = task.status;
        
        currentEditId = id;
        formTitle.textContent = 'Edit Task';
        submitBtn.textContent = 'Update Task';
        submitBtn.className = 'btn btn-update';
        cancelBtn.style.display = 'inline-block';
        
        // Scroll to form
        document.querySelector('.task-form').scrollIntoView({ behavior: 'smooth' });
    }
}

// Cancel edit
function cancelEdit() {
    currentEditId = null;
    formTitle.textContent = 'Add New Task';
    submitBtn.textContent = 'Add Task';
    submitBtn.className = 'btn';
    cancelBtn.style.display = 'none';
    taskForm.reset();
}

// Form submission handler
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const status = document.getElementById('taskStatus').value;
    
    if (currentEditId) {
        // Update existing task
        updateTask(currentEditId, title, description, status);
        cancelEdit();
    } else {
        // Create new task
        createTask(title, description, status);
    }
    
    taskForm.reset();
});

// Cancel button handler
cancelBtn.addEventListener('click', cancelEdit);

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayTasks();
});