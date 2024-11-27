-- CREATE DATABASE studentsDB;
-- DROP TABLE Students;
-- DROP TABLE Courses;
-- DROP TABLE Enrollments;
-- USE studentsdb;
-- truncate table Students;
-- truncate table Courses;
-- truncate table Enrollments;
-- select * from Students;
-- select * from Courses;
-- select * from Enrollments;

-- Creating tables with auto-incrementing primary keys
CREATE TABLE Students (
    StudentID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DOB DATE,
    EnrollmentDate DATE 
);

CREATE TABLE Courses (
    CourseID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(40),
    Credits INT
);

CREATE TABLE Enrollments (
    EnrollmentID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    StudentID INT,
    CourseID INT,
    Grade CHAR(1),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- Insert sample data
INSERT INTO Students (FirstName, LastName, DOB, EnrollmentDate) VALUES
('Olivia', 'Martinez', '2005-01-08', '2021-06-29'),
('Mary', 'Thomas', '1998-05-04', '2021-07-25'),
('Mia', 'Davis', '2003-11-21', '2020-03-23'),
('Chloe', 'Lee', '1997-01-02', '2021-11-16'),
('Emma', 'Anderson', '2004-09-30', '2021-05-21'),
('James', 'Jackson', '2000-05-19', '2022-04-15'),
('Sophia', 'Moore', '2001-12-17', '2020-08-02'),
('Michael', 'Harris', '1999-03-05', '2023-02-11'),
('Daniel', 'Garcia', '2002-10-11', '2022-06-27'),
('Emily', 'Johnson', '2003-07-25', '2021-01-20'),
('John', 'Wilson', '2004-12-13', '2022-09-15'),
('Ava', 'Taylor', '1999-09-28', '2023-05-12'),
('Ethan', 'White', '2000-02-06', '2020-11-07'),
('Jacob', 'Martinez', '2001-06-23', '2021-12-03'),
('Matthew', 'Brown', '1998-04-09', '2022-08-01'),
('Alexander', 'Thompson', '1997-11-20', '2021-03-19'),
('Isabella', 'Davis', '1995-01-14', '2020-05-24'),
('Emma', 'Garcia', '1999-09-17', '2023-07-19'),
('Phoenix', 'Greene', '2000-10-31', '2021-04-30'),
('Brian', 'Moore', '2003-02-25', '2022-01-14'),
('Sophia', 'Brown', '2005-03-12', '2023-03-08'),
('Ava', 'Smith', '1996-07-29', '2020-04-21'),
('Jacob', 'Johnson', '1998-10-10', '2022-10-13'),
('Chloe', 'Taylor', '2004-09-30', '2021-05-22'),
('Daniel', 'Martinez', '1999-11-04', '2021-12-30'),
('Matthew', 'White', '2003-05-19', '2022-07-26'),
('Alexander', 'Thompson', '2001-07-23', '2023-01-03'),
('Emily', 'Davis', '2002-02-27', '2021-10-16'),
('James', 'Martinez', '2000-08-11', '2022-11-20'),
('Sophia', 'Moore', '2001-09-09', '2020-05-06'),
('Mia', 'Wilson', '2002-04-04', '2023-08-14'),
('Olivia', 'Anderson', '1999-01-25', '2021-04-18'),
('John', 'Thompson', '2004-05-10', '2022-09-27'),
('Phoenix', 'Taylor', '2001-06-18', '2020-12-12'),
('Mary', 'Greene', '2005-11-15', '2023-02-28'),
('Michael', 'Harris', '1997-12-22', '2020-10-09'),
('Ethan', 'Johnson', '2000-03-09', '2022-04-01'),
('Daniel', 'Martinez', '2001-06-30', '2021-11-08'),
('Ava', 'White', '2004-07-26', '2020-06-10'),
('Emily', 'Brown', '1995-05-20', '2021-05-15'),
('Mia', 'Garcia', '2002-01-13', '2023-07-03'),
('Phoenix', 'Walker', '1998-06-07', '2020-09-21'),
('Olivia', 'Smith', '2005-09-05', '2022-10-04'),
('Matthew', 'Lee', '2003-12-28', '2023-01-29'),
('Jacob', 'Taylor', '1996-02-03', '2020-08-16'),
('Chloe', 'Davis', '1999-03-12', '2021-02-25'),
('Brian', 'Anderson', '2000-08-22', '2022-06-05'),
('Emily', 'Moore', '2001-04-11', '2021-10-02'),
('Michael', 'Greene', '1997-07-21', '2022-05-19'),
('Emma', 'Brown', '2002-09-08', '2023-03-30'),
('Ava', 'Martinez', '2004-01-18', '2021-06-11'),
('Phoenix', 'Thompson', '2003-06-06', '2022-12-09'),
('Sophia', 'Smith', '1998-05-23', '2020-01-26'),
('John', 'Wilson', '2005-10-10', '2021-07-20'),
('Brian', 'Jackson', '2000-07-05', '2023-04-06'),
('Mia', 'White', '1999-11-29', '2020-03-15'),
('Emily', 'Garcia', '2001-12-02', '2021-08-23'),
('Phoenix', 'Harris', '1995-06-08', '2022-02-04'),
('Olivia', 'Walker', '2003-05-18', '2023-11-01'),
('Ava', 'Anderson', '2002-02-11', '2020-06-14'),
('Mia', 'Taylor', '1997-09-06', '2021-09-29'),
('Emma', 'Davis', '2000-04-28', '2021-04-24'),
('Brian', 'Smith', '1998-07-15', '2023-12-03'),
('James', 'Moore', '2003-09-21', '2020-11-27'),
('Sophia', 'Greene', '1999-08-30', '2022-10-02'),
('Chloe', 'Johnson', '1995-03-11', '2021-06-09'),
('Jacob', 'Wilson', '2000-07-01', '2020-08-11'),
('Emily', 'Lee', '2004-03-08', '2022-03-15'),
('Ava', 'Brown', '2002-06-13', '2023-04-25'),
('Emma', 'Thompson', '2001-05-09', '2021-10-30'),
('Olivia', 'Martinez', '2004-08-19', '2020-04-19'),
('John', 'Davis', '1996-10-27', '2022-09-14'),
('Sophia', 'Johnson', '1997-11-30', '2023-05-22'),
('Matthew', 'Walker', '1999-06-25', '2020-07-10'),
('Phoenix', 'Smith', '2000-03-15', '2022-12-12'),
('Mia', 'Wilson', '1995-04-20', '2021-08-31'),
('Jacob', 'Garcia', '2005-07-27', '2022-06-17'),
('Michael', 'Moore', '2003-12-09', '2020-10-12'),
('Brian', 'Jackson', '2000-09-24', '2021-07-13'),
('Emily', 'Greene', '2001-05-30', '2022-01-08'),
('Chloe', 'Harris', '1998-08-02', '2021-02-05'),
('Phoenix', 'Martinez', '1997-10-15', '2022-03-12'),
('Daniel', 'White', '1999-11-22', '2020-09-03'),
('Mia', 'Johnson', '2002-08-07', '2022-04-18'),
('Matthew', 'Taylor', '2000-09-29', '2021-03-10'),
('Jacob', 'Davis', '2003-10-20', '2020-06-06'),
('John', 'Anderson', '1995-07-14', '2021-08-17'),
('Emily', 'Moore', '1996-12-23', '2022-05-10');

INSERT INTO Courses (CourseName, Credits)
VALUES 
('Mathematics', 60),
('Physics', 60),
('English', 45),
('Computer Science', 60),
('Biology', 60),
('Chemistry', 60),
('Economics', 45),
('Psychology', 45),
('History', 45),
('Philosophy', 30),
('Sociology', 30),
('Political Science', 45),
('Mechanical Engineering', 60),
('Electrical Engineering', 60),
('Business Administration', 45),
('Art History', 30),
('Environmental Science', 45),
('Statistics', 45),
('Accounting', 60),
('Marketing', 45);

INSERT INTO Enrollments (StudentID, CourseID, Grade)
VALUES
(1, 1, 'A'),
(2, 1, 'B'),
(3, 2, 'A'),
(4, 3, 'C'),
(5, 2, 'B'),
(6, 4, 'A'),
(7, 5, 'C'),
(8, 6, 'B'),
(9, 7, 'A'),
(10, 8, 'B'),
(11, 9, 'C'),
(12, 10, 'A'),
(13, 11, 'B'),
(14, 12, 'A'),
(15, 13, 'C'),
(16, 14, 'B'),
(17, 15, 'A'),
(18, 16, 'C'),
(19, 17, 'B'),
(20, 18, 'A'),
(21, 19, 'B'),
(22, 20, 'A'),
(23, 1, 'C'),
(24, 2, 'A'),
(25, 3, 'B'),
(26, 4, 'A'),
(27, 5, 'C'),
(28, 6, 'B'),
(29, 7, 'A'),
(30, 8, 'B'),
(31, 9, 'C'),
(32, 10, 'A'),
(33, 11, 'B'),
(34, 12, 'A'),
(35, 13, 'C'),
(36, 14, 'B'),
(37, 15, 'A'),
(38, 16, 'C'),
(39, 17, 'B'),
(40, 18, 'A'),
(41, 19, 'B'),
(42, 20, 'A'),
(43, 1, 'C'),
(44, 2, 'A'),
(45, 3, 'B'),
(46, 4, 'A'),
(47, 5, 'C'),
(48, 6, 'B'),
(49, 7, 'A'),
(50, 8, 'B'),
(51, 9, 'C'),
(52, 10, 'A'),
(53, 11, 'B'),
(54, 12, 'A'),
(55, 13, 'C'),
(56, 14, 'B'),
(57, 15, 'A'),
(58, 16, 'C'),
(59, 17, 'B'),
(60, 18, 'A'),
(61, 19, 'B'),
(62, 20, 'A'),
(63, 1, 'C'),
(64, 2, 'A'),
(65, 3, 'B'),
(66, 4, 'A'),
(67, 5, 'C'),
(68, 6, 'B'),
(69, 7, 'A'),
(70, 8, 'B'),
(71, 9, 'C'),
(72, 10, 'A'),
(73, 11, 'B'),
(74, 12, 'A'),
(75, 13, 'C'),
(76, 14, 'B'),
(77, 15, 'A'),
(78, 16, 'C'),
(79, 17, 'B'),
(80, 18, 'A'),
(81, 19, 'B'),
(82, 20, 'A'),
(83, 1, 'C'),
(84, 2, 'A'),
(85, 3, 'B'),
(86, 4, 'A'),
(87, 5, 'C'),
(88, 6, 'B');


-- Create the view
CREATE VIEW StudentGrades AS
SELECT 
    s.StudentID,
    s.FirstName,
    s.LastName,
    e.CourseID,
    e.Grade
FROM 
    Students s
JOIN 
    Enrollments e
ON 
    s.StudentID = e.StudentID;
    
Select * from StudentGrades;


-- Create the stored procedure
DELIMITER $$

CREATE PROCEDURE GetStudentGrades(IN StudentID INT)
BEGIN
    SELECT 
        s.FirstName,
        s.LastName,
        e.CourseID,
        e.Grade
    FROM 
        Students s
    JOIN 
        Enrollments e ON s.StudentID = e.StudentID
    WHERE 
        s.StudentID = StudentID;
END $$

DELIMITER ;

-- Running the stored procedure
CALL GetStudentGrades(1);


-- Creating the bonus stored procedure
DELIMITER $$

CREATE PROCEDURE AddEnrollment(IN StudentID INT, IN CourseID INT, IN Grade CHAR(1))
BEGIN
    -- Insert a new record into the Enrollments table
    INSERT INTO Enrollments (StudentID, CourseID, Grade)
    VALUES (StudentID, CourseID, Grade);
END $$

DELIMITER ;

-- Example of calling the stored procedure to add an enrollment
CALL AddEnrollment(1, 2, 'A');

SELECT * FROM courses WHERE CourseID = 1;

