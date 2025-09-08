function addTask(){
            if(inputBox.value === ''){
                alert('You must add some task');
            } else{
                let li = document.createElement("li");
                li.innerHTML = `
                    <div class="task-content">${inputBox.value}</div>
                    <div class="task-actions">
                        <button class="edit-btn" onclick="editTask(this)">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(this)">×</button>
                    </div>
                `;
                listContainer.appendChild(li);
                inputBox.value = '';
                saveData();
            }
        }

        function editTask(button) {
            const li = button.parentElement.parentElement;
            const taskContent = li.querySelector('.task-content');
            const taskActions = li.querySelector('.task-actions');
            const currentText = taskContent.textContent;
            
            // Create edit input and buttons
            taskContent.innerHTML = `<input type="text" class="task-input" value="${currentText}">`;
            taskActions.innerHTML = `
                <button class="save-btn" onclick="saveTask(this)">Save</button>
                <button class="cancel-btn" onclick="cancelEdit(this, '${currentText}')">Cancel</button>
            `;
            
            // Focus on input
            const input = taskContent.querySelector('.task-input');
            input.focus();
            input.select();
            
            // Add enter key listener
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    saveTask(taskActions.querySelector('.save-btn'));
                }
            });
        }

        function saveTask(button) {
            const li = button.parentElement.parentElement;
            const taskContent = li.querySelector('.task-content');
            const taskActions = li.querySelector('.task-actions');
            const input = taskContent.querySelector('.task-input');
            const newText = input.value.trim();
            
            if (newText === '') {
                alert('Task cannot be empty');
                return;
            }
            
            // Update task content
            taskContent.innerHTML = newText;
            taskActions.innerHTML = `
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">×</button>
            `;
            
            saveData();
        }

        function cancelEdit(button, originalText) {
            const li = button.parentElement.parentElement;
            const taskContent = li.querySelector('.task-content');
            const taskActions = li.querySelector('.task-actions');
            
            // Restore original content
            taskContent.innerHTML = originalText;
            taskActions.innerHTML = `
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">×</button>
            `;
        }

        function deleteTask(button) {
            const li = button.parentElement.parentElement;
            li.remove();
            saveData();
        }

        listContainer.addEventListener('click', function(e){
            if(e.target.tagName === "LI" || e.target.classList.contains('task-content')){
                const li = e.target.tagName === "LI" ? e.target : e.target.parentElement;
                li.classList.toggle("checked");
                saveData();
            }
        }, false);

        button.addEventListener('click', addTask);

        // Add Enter key support for adding tasks
        inputBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        function saveData(){
            const tasks = [];
            const taskItems = listContainer.querySelectorAll('li');
            
            taskItems.forEach(li => {
                const taskContent = li.querySelector('.task-content');
                const isChecked = li.classList.contains('checked');
                tasks.push({
                    text: taskContent.textContent,
                    checked: isChecked
                });
            });
            
            // Store as JSON for better data structure
            const data = JSON.stringify(tasks);
            // Using a simple variable instead of localStorage for this environment
            window.taskData = data;
        }

        function showTask(){
            // Get data from variable instead of localStorage
            const data = window.taskData;
            if (data) {
                const tasks = JSON.parse(data);
                listContainer.innerHTML = '';
                
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    if (task.checked) {
                        li.classList.add('checked');
                    }
                    
                    li.innerHTML = `
                        <div class="task-content">${task.text}</div>
                        <div class="task-actions">
                            <button class="edit-btn" onclick="editTask(this)">Edit</button>
                            <button class="delete-btn" onclick="deleteTask(this)">×</button>
                        </div>
                    `;
                    
                    listContainer.appendChild(li);
                });
            }
        }

        