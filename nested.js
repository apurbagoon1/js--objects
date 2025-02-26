const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

// console.log(college.unique.color)
college.unique.result.merit = 'top top top most'; // Modify nested property
console.log(college['unique'].result.merit); // Access modified property
college.events[1] = '16 December'; // Modify an event
console.log(college.events[1])

delete college.class;
console.log(college);