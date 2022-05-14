// Define a For loop  to print students score :

let newSchool = [
    // Class A
    {
        classInfo: {
            name: "Class A",
            cap: "4",
            teacher: "Tehrani"
        },
        students: [
            {
                name: "Amir Hossein",
                Score: 19,
                Phone: 091200000
            },
            {
                name: "Ali",
                Score: 6,
                Phone: 091500000
            },
            {
                name: "Fatemeh",
                Score: 17,
                Phone: 091700000
            },
            {
                name: "Saeed",
                Score: 20,
                Phone: 091200000
            }
        ]
    },
    // Class B
    {
        classInfo: {
            name: "Class B",
            cap: "3",
            teacher: "Hashemi"
        },
        students: [
            {
                name: "Mahtab",
                Score: 18.5,
                Phone: 091500000
            },
            {
                name: "Reza",
                Score: 19,
                Phone: 091200000
            },
            {
                name: "saber",
                Score: 9.95,
                Phone: 093500000
            }
        ]
    }
]

//  Step 01 : Define variables

let studentScore, studentName ; 

//  Step 02 : Define a for loop for first array

for ( i = 0;  i < newSchool.length ; i++){

    //  Step 03 : Define a for loop for second array

    for ( j = 0; j < newSchool[i].students.length; j++){

        //  Step 04 : Find students data

        studentName = newSchool[i].students[j].name
        studentScore = newSchool[i].students[j].Score

        //  Step 05 : console.log required data

        console.log( studentName + " : " + studentScore);
    }
    
}
