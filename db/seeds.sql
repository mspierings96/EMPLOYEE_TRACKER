INSERT INTO department (name)
VALUES ('Marketing'), ('HR'), ('Finance'), ('Maintenace'), ('Reception'), ('IT');

INSERT INTO role (title, salary, department_id)
VALUES
('Marketing Head', 50000, 1),
('HR Manager', 45000, 2),
('Financial Director', 80000, 3),
('Maintenance Technician', 35000, 4),
('Receptionist', 20000, 5),
('Information Tech Solutions Manager', 75000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Giannis", "Antetokounmpo", 6, 2),
("Lebron", "James", 4, 2),
("Tim", "Duncan", 3, 2),
("Eric", "Gordon", 1, 6),
("Gordon", "Hayward", 5, 1),
("Kris", "Middleton", 2, NULL);