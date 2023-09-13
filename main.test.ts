import { MyClass } from './main'; // adjust the import to your file structure

describe('MyClass tests', () => {

    let myInstance: MyClass;
  
    beforeAll(() => {
      // Runs once before any tests in this block
    });
  
    beforeEach(() => {
      // Runs before each test in this block
      myInstance = new MyClass('John', 30, true);
    });
  
    test('sayHello should output correct string', () => {
        const response = myInstance.sayHello();
        expect(response).toBe("Hello, John!");
    });
    
    test('display details', () => {
        const response = myInstance.displayDetails();
        expect(response).toBe("Name: John, Age: 30, Is Active: true");
    });

    afterAll(() => {
      // Runs once after all tests in this block are done
    });
  });
  