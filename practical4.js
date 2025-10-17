// employeeManager.js

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store employee data
let employees = [];

// Function to display the main menu
function showMenu() {
    console.log('\n=== Employee Management System ===');
    console.log('1. Add Employee');
    console.log('2. List All Employees');
    console.log('3. Remove Employee');
    console.log('4. Exit');

    rl.question('Enter your choice (1-4): ', (choice) => {
        switch (choice) {
            case '1':
                addEmployee();
                break;
            case '2':
                listEmployees();
                break;
            case '3':
                removeEmployee();
                break;
            case '4':
                console.log('Exiting program... Goodbye!');
                rl.close();
                break;
            default:
                console.log('❌ Invalid choice! Please enter a number between 1-4.');
                showMenu();
        }
    });
}

// Function to add a new employee
function addEmployee() {
    rl.question('Enter Employee Name: ', (name) => {
        rl.question('Enter Employee ID: ', (id) => {
            // Check if ID already exists
            const exists = employees.some(emp => emp.id === id);
            if (exists) {
                console.log('❌ Employee ID already exists!');
            } else {
                employees.push({ name, id });
                console.log(`✅ Employee added: ${name} (ID: ${id})`);
            }
            showMenu();
        });
    });
}

// Function to list all employees
function listEmployees() {
    if (employees.length === 0) {
        console.log('No employees found.');
    } else {
        console.log('\n📋 Employee List:');
        employees.forEach((emp, index) => {
            console.log(`${index + 1}. ${emp.name} (ID: ${emp.id})`);
        });
    }
    showMenu();
}

// Function to remove an employee by ID
function removeEmployee() {
    rl.question('Enter Employee ID to remove: ', (id) => {
        const index = employees.findIndex(emp => emp.id === id);
        if (index === -1) {
            console.log('❌ Employee not found!');
        } else {
            const removed = employees.splice(index, 1);
            console.log(`✅ Removed Employee: ${removed[0].name} (ID: ${removed[0].id})`);
        }
        showMenu();
    });
}

// Start the application
showMenu();
