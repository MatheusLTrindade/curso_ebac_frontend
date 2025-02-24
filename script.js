$(document).ready(function() {
  $('#taskForm').submit(function(e) {
    e.preventDefault();
    let taskText = $('#taskInput').val().trim();
    if (taskText !== '') {
        let newTask = $(`
            <li style="display: none;">
                <span class="task-text">${taskText}</span> 
                <button class="delete-btn">
                    <span class="material-icons">delete</span>
                </button>
            </li>
        `);
        $("#taskList").append(newTask);
        newTask.fadeIn(1000);
        $('#taskInput').val('');
    }
});

$('#taskList').on('click', 'li', function(e) {
  if (!$(e.target).hasClass('delete-btn')) {
    $(this).find('.task-text').toggleClass('completed');
  }
});
  
  $('#taskList').on('click', '.delete-btn', function(e) {
    e.stopPropagation();
    $(this).parent().remove();
  });
});