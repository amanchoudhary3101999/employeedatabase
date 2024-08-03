let employees = [];
let employeeId = 1;

document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const message = document.getElementById('message');

    if (!name || !profession || !age) {
        message.textContent = 'All fields are required.';
        message.className = 'error';
        return;
    }

    const employee = {
        id: employeeId++,
        name,
        profession,
        age: Number(age),
    };

    employees.push(employee);
    document.getElementById('employeeForm').reset();
    message.textContent = 'Employee added successfully.';
    message.className = 'success';
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <span>${employee.name}, ${employee.profession}, Age: ${employee.age}</span>
            <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}
