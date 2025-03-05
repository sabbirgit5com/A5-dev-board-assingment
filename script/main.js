function showAlert(button) {
    const taskName = button.getAttribute("data-task");

    const currentTime = new Date().toLocaleString();

    alert(`Task"${taskName}"succesfully clicked`);

    button.disabled = true;

    button.innerText = "Completed";
    button.style.backgroundColor = "gray";

    let taskAssigned = parseInt(document.getElementById('task-assigned').innerText);
    document.getElementById('task-assigned').innerText = taskAssigned - 1;

    let taskCount = parseInt(document.getElementById('task-count').innerText);
    document.getElementById('task-count').innerText = taskCount + 1;

    addToActivityLog(taskName, currentTime);
}

function addToActivityLog(taskName, time) {
    const activityLog = document.getElementById('activity-log');
    const newLog = document.createElement('div');
    newLog.classList.add('activity-item');
    newLog.innerHTML = `<strong>${taskName}</strong> - <span>${time}</span>`;
    activityLog.appendChild(newLog);
}

document.getElementById('clear-history').addEventListener('click', function() {
    const activityLog = document.getElementById('activity-log');
    activityLog.innerHTML = ''; 
        alert('History has been cleared!');
});

const completeButtons = document.querySelectorAll('.complete-btn');
completeButtons.forEach(button => {
    button.addEventListener('click', function() {
        showAlert(this);
    });
});

document.getElementById('discover-new').addEventListener('click', function() {
    window.location.href = 'index.html';
});



