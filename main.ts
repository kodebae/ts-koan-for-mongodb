export class MyClass {
    public name: string;
    private age: number;
    protected isActive: boolean;

    constructor(name: string, age: number, isActive: boolean) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }

    sayHello() {
        return(`Hello, ${this.name}!`);
    }

    displayDetails() {
        return(`Name: ${this.name}, Age: ${this.age}, Is Active: ${this.isActive}`);
    }

    newFeature() {
        // TODO - Implement Feature
    }
}
