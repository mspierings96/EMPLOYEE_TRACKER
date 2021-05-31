const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6Pointer!',
    database: 'employee_tracker'
  });

  connection.connect(function(err) {
         if (err) {
         console.log('errr connectiong!!!', err)
     };
       begin();
     });

  function begin () {
    inquirer.prompt ([
      {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all employees', 'View all departments','View all roles','Add employee','Add department', 'Add role','Update employee role']
      }
    ])
    .then(data => {
      switch(data.begin){
        case "View all employees":
          viewEmployees();
          break;
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        default:
      }
    })
};

function viewDepartments() {
  connection.query('SELECT * FROM departments', function(err, results, fields) {
    if (err) throw err
    console.table(); begin();}
  );
};

function addEmployee() {
  console.log("about to view all employees");
  inquirer.prompt([
      {
      name:'first_name',
      type:'input',
      message:'Whats the employees first name',
      },
      {
      name: "last_name",
      type: 'input',
      message: 'What is the employees last name?',
      },
      {
      name: 'role_id',
      type: 'input',
      message: 'Role ID Number',
      },
      {
      name: 'manager_id',
      type: 'input',
      message: "If the employee has a manager, what is their ID number?"
      }
  ]).then(data =>{
      connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)',[data.firstName, data.lastName, data.id, data.managerID], function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
  })
 
}


function addDepartment() {
  console.log("about to add new department");
  inquirer.prompt([{
      name:'department',
      type:'input',
      message:'Whats the departments name',

  }]).then(data =>{
      connection.query('INSERT INTO departments (name) VALUES(?)',[data.department], function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
  })
 
}


function addRole() {
  console.log("about to add new role");
  inquirer.prompt([
      {
          name: 'title',
          type: 'input',
          message: 'Title of role:'

      },
      {
          name: 'salary',
          type: 'input',
          message: 'Salary of role:'
      },
      {
          name: 'role_id',
          type: 'input',
          message: 'Department ID Number'
          
      }
  
  
  ]).then(data =>{
      connection.query('INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)',[data.title, data.salary, data.department_id], function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
  })
 
}

function updateEmployeeRole() {
  console.log("about to update new employee");
  inquirer.prompt([
      {
          name: 'name',
          type: 'input',
          message: 'Enter the first name of the employee you wish to update:'
      },
      {
          name: 'id',
          type: 'input',
          message: 'Enter the fole id you wish the employee to have.'
      }
]).then(data =>{
      connection.query('UPDATE employee SET role_id = ?',[data.id, data.name], function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
    );
  })
 
}

