//  write a class for students it has 
//  properties 
//  name,id,branch,attendance and 
// methods to 
// displayinfo,showattendance.
    class Student{
        constructor(name,id,branch,attendance){
            this.name = name;
            this.id = id;
            this.branch = branch;
            this.attendance = attendance;
        }

        display_info(){
            console.log(`${this.name} studying in ${this.branch} with roll number ${this.id}`);
        }

        showattendance(){
            console.log(`Attendance: ${this.attendance}`);
        }
    }
    const std1 = new Student('srinivaspavan','21JR1A4441','CS',65);
    std1.display_info();
    std1.showattendance();
