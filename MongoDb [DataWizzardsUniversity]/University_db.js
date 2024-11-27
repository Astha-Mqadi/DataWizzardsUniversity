//Create students collection
db.createCollection("students")
db.students.insertMany(
    [
    {   
        _id:ObjectId("66d702429191b09cd84d4115"),
        firstName:"John",
        lastName: "Doe",
        gender:"Male",
        dob: ISODate("2000-01-01"),
        enrollmentDate: ISODate("2019-02-01")
    },
    {
        _id:ObjectId("66d848209bb55ae4043f3e1d"),
        firstName:"Abigail",
        lastName: "Doe",
        gender:"Female",
        dob: ISODate("2000-01-02"),
        enrollmentDate: ISODate("2019-03-01") 
    },
    {
        _id:ObjectId("66d848209bb55ae4043f3e1e"),
        firstName:"Anthony",
        lastName: "McMan",
        gender:"Male",
        dob: ISODate("2000-04-03"),
        enrollmentDate: ISODate("2020-01-05")
    },
    {
        _id:ObjectId("66d848209bb55ae4043f3e1f"),
        firstName:"Gerald",
        lastName: "Aurgus",
        gender:"Male",
        dob: ISODate("2002-10-08"),
        enrollmentDate: ISODate("2020-05-01")
    },
    {
        _id:ObjectId("66d848209bb55ae4043f3e20"),
        firstName:"Bob",
        lastName: "Smith",
        gender:"Male",
        dob: ISODate("2001-11-22"),
        enrollmentDate: ISODate("2020-02-01")
    },
    {
        _id: ObjectId("66d848209bb55ae4043f3e21"),
        firstName: "Alice",
        lastName: "Johnson",
        gender: "Female",
        dob: ISODate("2002-05-14"),
        enrollmentDate: ISODate("2021-03-15")
    },
    {
        _id: ObjectId("66d848209bb55ae4043f3e23"),
        firstName: "Emma",
        lastName: "Williams",
        gender: "Female",
        dob: ISODate("2000-12-11"),
        enrollmentDate: ISODate("2020-10-20")
    },
    {
        _id: ObjectId("66d848209bb55ae4043f3e25"),
        firstName: "Sophia",
        lastName: "Miller",
        gender: "Female",
        dob: ISODate("2003-02-05"),
        enrollmentDate: ISODate("2022-06-18")
    },
    {
        _id: ObjectId("66d848209bb55ae4043f3e26"),
        firstName: "Daniel",
        lastName: "Wilson",
        gender: "Male",
        dob: ISODate("1998-11-30"),
        enrollmentDate: ISODate("2018-08-24")
    }
])

//Create courses collection
db.createCollection("courses")
db.courses.insertMany(
    
        [
        {   
            _id:ObjectId("66d80d993d4d0e96162710bc"),
            courseName: "Introduction to Computer Science",
            credits: 3 
        },
        { 
            _id:ObjectId("66d84b16e703a4751534073b"),
            courseName: "Data Structures and Algorithms",
            credits: 4 
        },
        { 
            _id:ObjectId("66d84b16e703a4751534073c"),
            courseName: "Operating Systems", 
            credits: 4
        },
        { 
            _id:ObjectId("66d84b16e703a4751534073d"),
            courseName: "Database Systems",
            credits: 3
        },
        {   
            _id:ObjectId("66d8b3e1c37c0ee6c9caabc7"),
            courseName: "Software Engineering", 
            credits: 4 
        },
        { 
            _id:ObjectId("66b84b127706a4751584073a"),
            courseName: "Computer Networks", 
            credits: 2 
        },
        {
            _id: ObjectId("66b84b127706a47515840740"),
            courseName: "Artificial Intelligence",
            credits: 4
        },
        {
            _id: ObjectId("66b84b127706a47515840743"),
            courseName: "Human-Computer Interaction",
            credits: 2
        }
        ]
    
)

//Create enrollments collection
db.createCollection("enrollments")
db.enrollments.insertMany(
    [
    {
        _id:ObjectId("66e02696fe2f062da400d7b0"),
        studentId:ObjectId("66d702429191b09cd84d4115"), //John
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97a62c95b432c5421e802"),
        studentId:ObjectId("66d702429191b09cd84d4115"), //John
        courseId: ObjectId("66b84b127706a4751584073a"),
        grade:"B"
    },
    {
        _id:ObjectId("66d97a9abfd02a6fd3f739d9"),
        studentId:ObjectId("66d702429191b09cd84d4115"), //John
        courseId: ObjectId("66d84b16e703a4751534073c"),
        grade:"A"
    },

    {
        _id:ObjectId("66d97aa996ceff961eeb4d51"),
        studentId:ObjectId("66d848209bb55ae4043f3e1d"), //Abigail
        courseId: ObjectId("66d84b16e703a4751534073c"),
        grade:"C"
    },
    {
        _id:ObjectId("66d97ab8a3cbfa3cab316e1a"),
        studentId:ObjectId("66d848209bb55ae4043f3e1d"), //Abigail
        courseId: ObjectId("66d8b3e1c37c0ee6c9caabc7"),
        grade:"F"
    },
    {
        _id:ObjectId("66d97ac450e643a96a2c8a5f"),
        studentId:ObjectId("66d848209bb55ae4043f3e1d"), //Abigail
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97ace82d7324c2fac1d19"),
        studentId:ObjectId("66d848209bb55ae4043f3e1d"), //Abigail
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade:"B"
    },
    {
        _id:ObjectId("66d97ad81dbf9cdf5d8bf2c8"),
        studentId:ObjectId("66d848209bb55ae4043f3e1e"), //Anthony
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97ae49cd39a3236c60958"),
        studentId:ObjectId("66d848209bb55ae4043f3e1e"), //Anthony
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97af3955283eb393d4371"),
        studentId:ObjectId("66d848209bb55ae4043f3e1e"), //Anthony
        courseId: ObjectId("66d84b16e703a4751534073c"),
        grade:"C"
    },
    {
        _id:ObjectId("66d97b0de7f276a5c6e3efbc"),
        studentId:ObjectId("66d848209bb55ae4043f3e1f"), //Gerald
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97b165a41dcb9897009e2"),
        studentId:ObjectId("66d848209bb55ae4043f3e1f"), //Gerald
        courseId: ObjectId("66b84b127706a4751584073a"),
        grade:"B"
    },
    {
        _id:ObjectId("66d97b1dafd501063c9245f4"),
        studentId:ObjectId("66d848209bb55ae4043f3e20"), //Bob
        courseId: ObjectId("66d8b3e1c37c0ee6c9caabc7"),
        grade:"A"
    },
    {
        _id:ObjectId("66d97b24861920563f570c13"),
        studentId:ObjectId("66d848209bb55ae4043f3e20"), //Bob
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade:"B"
    },
    {
        _id:ObjectId("66d97b2fd7e2750fbf03487c"),
        studentId:ObjectId("66d848209bb55ae4043f3e20"),//Bob
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade:"A"
    },

    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbae"),
        studentId: ObjectId("66d848209bb55ae4043f3e21"), // Alice
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade: "A"
    },
    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbaf"),
        studentId: ObjectId("66d848209bb55ae4043f3e23"), // Emma
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade: "B"
    },
    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbb0"),
        studentId: ObjectId("66d848209bb55ae4043f3e25"), // Sophia
        courseId: ObjectId("66d84b16e703a4751534073c"),
        grade: "A"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b1"),
        studentId: ObjectId("66d848209bb55ae4043f3e26"), // Daniel
        courseId: ObjectId("66d84b16e703a4751534073d"),
        grade: "B"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b2"),
        studentId: ObjectId("66d848209bb55ae4043f3e26"), // Daniel
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade: "A"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b3"),
        studentId: ObjectId("66d848209bb55ae4043f3e26"), // Daniel
        courseId: ObjectId("66b84b127706a47515840743"),
        grade: "B"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b4"),
        studentId: ObjectId("66d848209bb55ae4043f3e21"), // Alice
        courseId: ObjectId("66d84b16e703a4751534073e"),
        grade: "A"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b5"),
        studentId: ObjectId("66d848209bb55ae4043f3e21"), // Alice
        courseId: ObjectId("66b84b127706a47515840740"),
        grade: "C"
    },
    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbb2"),
        studentId: ObjectId("66d848209bb55ae4043f3e21"), // Alice
        courseId: ObjectId("66d8b3e1c37c0ee6c9caabc7"),
        grade: "C"
    },
    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbb3"),
        studentId: ObjectId("66d848209bb55ae4043f3e23"), // Emma
        courseId: ObjectId("66d8b3e1c37c0ee6c9caabc7"),
        grade: "B"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b6"),
        studentId: ObjectId("66d848209bb55ae4043f3e23"), // Emma
        courseId: ObjectId("66d84b16e703a4751534073d"),
        grade: "B"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b7"),
        studentId: ObjectId("66d848209bb55ae4043f3e23"), // Emma
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade: "A"
    },
    {
        _id: ObjectId("66d97a4b04d4ffc8c2a8bbb4"),
        studentId: ObjectId("66d848209bb55ae4043f3e25"), // Sophia
        courseId: ObjectId("66b84b127706a47515840740"),
        grade: "A"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7b8"),
        studentId: ObjectId("66d848209bb55ae4043f3e25"), // Sophia
        courseId: ObjectId("66b84b127706a47515840743"),
        grade: "A"
    },
    {
        _id: ObjectId("66e027cffe2f062da400d7ba"),
        studentId: ObjectId("66d848209bb55ae4043f3e25"), // Sophia
        courseId: ObjectId("66d8b3e1c37c0ee6c9caabc7"),
        grade: "A"
    },
    {
        _id: ObjectId("66e02696fe2f062da400d7e9"),
        studentId: ObjectId("66d848209bb55ae4043f3e26"), // Daniel
        courseId: ObjectId("66d80d993d4d0e96162710bc"),
        grade: "A"
    },
    {
        _id: ObjectId("66e027cffe2f062da400d7bc"),
        studentId: ObjectId("66d848209bb55ae4043f3e26"), // Daniel
        courseId: ObjectId("66d84b16e703a4751534073b"),
        grade: "C"
    }
    
    

])

//Aggregate : Finds and combines Records for students
db.students.aggregate(
    [
    {
        $match: 
        {
            firstName:"Bob", 
            lastName: "Smith" 
        }  
    },
    {
        $addFields: 
        {
        "age": {
            "$dateDiff": {
                "startDate": "$dob",
                "endDate": "$$NOW",
                "unit": "year"
                }
            }   
        }    
    },
    { //Returns Documents where age <= 25
        $match: 
        {
            age: { $lte: 25 }  
        }
    },
    {
        $lookup: 
        {
            from: "enrollments",                        
            localField: "_id",                          
            foreignField: "studentId",                  
            as: "enrollments"                           
        }
    },
    {
        $unwind: "$enrollments"                         
    },
    {
        $lookup: 
        {
            from: "courses",                            
            localField: "enrollments.courseId",         
            foreignField: "_id",                        
            as: "courseDetails"                         
        }
    },
    {
        $unwind: "$courseDetails"                       
    },
    {
        $group: 
        {
            _id: { firstName: "$firstName", lastName: "$lastName" , age:"$age", gender:"$gender" },
            courses: { $push: "$courseDetails.courseName" }
        }
    },
    {
        $project: 
        {
            _id: 0,                      
            firstName: "$_id.firstName",
            lastName: "$_id.lastName",
            age: "$_id.age",
            gender: "$_id.gender",
            courses: 1              
                 
        }
    }
]).sort({firstName:1})


//Bonus Query : Count No. of students enrolled in each course
db.enrollments.aggregate([
    {
        $group: 
        {
            _id: "$courseId",         
            studentCount: { $sum: 1 } 
        }
    },
    {
        $lookup: 
        {
            from: "courses",          
            localField: "_id",        
            foreignField: "_id",      
            as: "courseDetails"       
        }
    },
    {
        $unwind: "$courseDetails"     
    },
    {
        $project: 
        {
            _id: 0,                   
            courseName: "$courseDetails.courseName", 
            studentCount: 1            
        }
    }
]);