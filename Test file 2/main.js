document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const noTasksMessage = document.getElementById('noTasksMessage');
}
    
    function updateNoTasksMessage() {
        if (taskList.children.length === 1 && taskList.children[0].id === 'noTasksMessage') {
            noTasksMessage.style.display = 'block';
        } else {
            noTasksMessage.style.display = 'none';
        } 
    }
