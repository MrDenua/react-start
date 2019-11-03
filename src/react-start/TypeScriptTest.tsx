import React from 'react'

interface Person {
    name:string;
    age:number;
    sex:Sex;
}
enum Sex {
    male = 1,
    female = 2
}
class Student implements Person{
    age: number = 0;
    name: string = "";
    sex: Sex = Sex.female;
    constructor(age: number, name: string, sex: Sex) {
        this.age = age;
        this.name = name;
        this.sex = sex;
    }
    public getName():string{
        return this.name;
    }
}

class StudentComponent extends React.Component{
    private _student:Student;

    constructor(props: Person, context: any) {
        super(props, context);
        this._student = new Student(props.age, props.name, props.sex);
    }

    render(): any {
        return <p>your name is {this._student.name}, {this._student.sex}</p>;
    }
}

export {Student, Sex}
export default StudentComponent