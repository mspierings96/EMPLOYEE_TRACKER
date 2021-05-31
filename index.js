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
      console.log('errr connectiong!!!', err)
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

function viewEmployees() {
  connection.query('SELECT * FROM employees', function(err, results, fields) {
    if (err) throw err
    console.table(res); begin();}
  );
};

