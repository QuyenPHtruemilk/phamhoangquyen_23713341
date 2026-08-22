function author(name: string): string {
  return `Câu, ${name}!`;
}

// 1. Person

console.log(
  author(
    "1. Create a class Person with attributes name and age. Write a method to display this information.",
  ),
);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age >= 0 ? age : 0;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

console.log("\n--- Person Demo ---");
const p1 = new Person("Quyen", 20);
p1.displayInfo();

// 2. Student extending Person

console.log(
  "\n" +
    author(
      "2. Write a class Student extending Person with an additional attribute grade. Add a method to display all info.",
    ),
);

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

console.log("\n--- Student Demo ---");
const s1 = new Student("Quyen", 20, "8.5");
s1.displayAllInfo();

// ------------------------------------------
// 3. Car
// ------------------------------------------
console.log(
  "\n" +
    author(
      "3. Create a class Car with properties brand, model, year. Write a method to show car info.",
    ),
);

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year > 1885 ? year : 2000;
  }

  showInfo(): void {
    console.log(`Car Info: ${this.year} ${this.brand} ${this.model}`);
  }
}

console.log("\n--- Car Demo ---");
const car1 = new Car("Toyota", "Camry", 2024);
car1.showInfo();

// ------------------------------------------
// 4. Rectangle
// ------------------------------------------
console.log(
  "\n" +
    author(
      "4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.",
    ),
);

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width > 0 ? width : 1;
    this.height = height > 0 ? height : 1;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }

  displayDimensions(): void {
    console.log(
      `Rectangle (${this.width}x${this.height}) -> Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`,
    );
  }
}

console.log("\n--- Rectangle Demo ---");
const rect1 = new Rectangle(10, 5);
rect1.displayDimensions();

// ------------------------------------------
// 5. BankAccount
// ------------------------------------------
console.log(
  "\n" +
    author(
      "5. Create a class BankAccount with balance. Add methods deposit() and withdraw().",
    ),
);

class BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance >= 0 ? balance : 0;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log(
          "Insufficient funds. Cannot withdraw more than current balance.",
        );
      }
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance(): number {
    return this.balance;
  }

  displayBalance(): void {
    console.log(`Current balance: $${this.balance}`);
  }
}

console.log("\n--- Bank Account Demo ---");
const account = new BankAccount(1000);
account.displayBalance();
account.deposit(500);
account.deposit(-100);
account.withdraw(200);
account.withdraw(2000);
account.withdraw(-50);
account.displayBalance();

// ------------------------------------------
// 6. Book
// ------------------------------------------
console.log(
  "\n" + author("6. Create a class Book with attributes title, author, year."),
);

class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayDetails(): void {
    console.log(`"${this.title}" by ${this.author} (${this.year})`);
  }
}

console.log("\n--- Book Demo ---");
const book1 = new Book("Lão Hạc", "Nam Cao", 1943);
book1.displayDetails();

// ------------------------------------------
// 7. User
// ------------------------------------------
console.log(
  "\n" +
    author(
      "7. Write a class User with private property name and getter/setter.",
    ),
);

class User {
  private _name: string;

  constructor(name: string) {
    this._name = name.trim().length > 0 ? name : "Default User";
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim().length > 0) {
      console.log(`Updating name from "${this._name}" to "${newName}"`);
      this._name = newName;
    } else {
      console.log("Invalid name: Name cannot be empty.");
    }
  }
}

console.log("\n--- User Demo ---");
const user1 = new User("Quyen");
console.log(`Current Name: ${user1.name}`);
user1.name = "Quyen Nguyen";
user1.name = "";
console.log(`Final Name: ${user1.name}`);

// ------------------------------------------
// 8. Product & Filter
// ------------------------------------------
console.log(
  "\n" +
    author(
      "8. Create a Product class with name, price. Create an array of products and filter products with price > 100.",
    ),
);

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayProduct(): void {
    console.log(`Product: ${this.name} - $${this.price}`);
  }
}

console.log("\n--- Product Filtering Demo ---");
const productsList: Product[] = [
  new Product("Laptop", 1200),
  new Product("Mouse", 25),
  new Product("Keyboard", 80),
  new Product("Monitor", 250),
];

console.log("All Products:");
productsList.forEach((p) => p.displayProduct());

console.log("\nProducts with price > $100:");
const expensiveProds = productsList.filter((p) => p.price > 100);
expensiveProds.forEach((p) => p.displayProduct());

// ------------------------------------------
// 9. Animal Interface
// ------------------------------------------
console.log(
  "\n" + author("9. Define an interface Animal with name and method sound()."),
);

interface Animal {
  name: string;
  sound(): void;
}

class InterfaceDog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Woof! Woof!`);
  }
}

console.log("\n--- Animal Interface Demo ---");
const dogObj: Animal = new InterfaceDog("DOG");
dogObj.sound();

// ------------------------------------------
// 10. Account Access Modifiers
// ------------------------------------------
console.log(
  "\n" +
    author(
      "10. Create a class Account with public, private and readonly fields.",
    ),
);

class Account {
  public accountNumber: string;
  private pin: number;
  readonly createdAt: Date;

  constructor(accountNumber: string, pin: number) {
    this.accountNumber = accountNumber;
    this.pin = pin;
    this.createdAt = new Date();
  }

  verifyPin(inputPin: number): boolean {
    return this.pin === inputPin;
  }

  displayAccountSummary(): void {
    console.log(
      `Account #: ${this.accountNumber}, Created At: ${this.createdAt.toISOString()}`,
    );
  }
}

console.log("\n--- Account Access Modifiers Demo ---");
const myAcc = new Account("ACC-98765", 4321);
myAcc.displayAccountSummary();
console.log("PIN 1234 correct?:", myAcc.verifyPin(1234));
console.log("PIN 4321 correct?:", myAcc.verifyPin(4321));

// ------------------------------------------
// 11. Base Animal, Dog, Cat
// ------------------------------------------
console.log(
  "\n" +
    author(
      "11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().",
    ),
);

class BaseAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends BaseAnimal {
  bark(): void {
    console.log(`${this.name} barks: Woof!`);
  }
}

class Cat extends BaseAnimal {
  meow(): void {
    console.log(`${this.name} meows: Meow!`);
  }
}

console.log("\n--- Base Animal Inheritance Demo ---");
const myDog = new Dog("Rex");
const myCat = new Cat("Whiskers");
myDog.bark();
myCat.meow();

// ------------------------------------------
// 12. Flyable & Swimmable
// ------------------------------------------
console.log(
  "\n" +
    author(
      "12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.",
    ),
);

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Bird is spreading wings and flying!");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("Fish is swimming smoothly in the ocean.");
  }
}

console.log("\n--- Interfaces Implementation Demo ---");
const eagle = new Bird();
const salmon = new Fish();
eagle.fly();
salmon.swim();

// ------------------------------------------
// 13. Abstract Shape (Square & Circle)
// ------------------------------------------
console.log(
  "\n" +
    author(
      "13. Create an abstract class Shape with method area(). Implement Square and Circle.",
    ),
);

abstract class Shape {
  abstract area(): number;

  displayArea(): void {
    console.log(`Calculated Area: ${this.area().toFixed(2)}`);
  }
}

class Square extends Shape {
  side: number;

  constructor(side: number) {
    super();
    this.side = side > 0 ? side : 1;
  }

  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius > 0 ? radius : 1;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

console.log("\n--- Abstract Shape Demo ---");
const sq = new Square(4);
const cr = new Circle(3);
sq.displayArea();
cr.displayArea();

// ------------------------------------------
// 14. Base Employee, Manager, Developer
// ------------------------------------------
console.log(
  "\n" +
    author(
      "14. Create a base class Employee. Extend Manager and Developer with specific methods.",
    ),
);

class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`Manager ${this.name} is directing team projects.`);
  }
}

class Developer extends Employee {
  writeCode(): void {
    console.log(`Developer ${this.name} is writing TypeScript code.`);
  }
}

console.log("\n--- Employee Subclasses Demo ---");
const mgr = new Manager("Alice", 80000);
const dev = new Developer("Bob", 60000);
mgr.manageTeam();
dev.writeCode();

// ------------------------------------------
// 15. Library
// ------------------------------------------
console.log(
  "\n" +
    author(
      "15. Create a Library class that can store Book and User objects. Add method to add books.",
    ),
);

class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Added book "${book.title}" to library.`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`Registered user "${user.name}" to library.`);
  }

  listLibraryContent(): void {
    console.log(
      `Total Books: ${this.books.length}, Total Registered Users: ${this.users.length}`,
    );
  }
}

console.log("\n--- Library System Demo ---");
const lib = new Library();
lib.addBook(new Book("Clean Code", "Robert C. Martin", 2008));
lib.addUser(new User("Quyen"));
lib.listLibraryContent();

// ------------------------------------------
// 16. Generic Box
// ------------------------------------------
console.log(
  "\n" +
    author("16. Create a generic class Box that can store any type of value."),
);

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

console.log("\n--- Generic Box Demo ---");
const numBox = new Box<number>(100);
console.log("Number Box Value:", numBox.getValue());

const strBox = new Box<string>("Hello TS");
console.log("String Box Value:", strBox.getValue());

// ------------------------------------------
// 17. Singleton Logger
// ------------------------------------------
console.log(
  "\n" +
    author("17. Write a singleton Logger class that logs messages to console."),
);

class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    console.log(`[LOG - ${new Date().toLocaleTimeString()}]: ${message}`);
  }
}

console.log("\n--- Singleton Logger Demo ---");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("App initialized.");
console.log("Is logger1 identical to logger2?:", logger1 === logger2);

// ------------------------------------------
// 18. Static MathUtil
// ------------------------------------------
console.log(
  "\n" +
    author(
      "18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().",
    ),
);

class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      console.log("Error: Division by zero.");
      return NaN;
    }
    return a / b;
  }
}

console.log("\n--- Static MathUtil Demo ---");
console.log("10 + 5 =", MathUtil.add(10, 5));
console.log("10 - 5 =", MathUtil.subtract(10, 5));
console.log("10 * 5 =", MathUtil.multiply(10, 5));
console.log("10 / 0 =", MathUtil.divide(10, 0));

// ------------------------------------------
// 19. Polymorphism Method Overriding
// ------------------------------------------
console.log(
  "\n" +
    author(
      "19. Demonstrate method overriding using polymorphism with Animal and subclasses.",
    ),
);

abstract class PolyAnimal {
  abstract makeSound(): void;
}

class PolyDog extends PolyAnimal {
  makeSound(): void {
    console.log("PolyDog says: Woof! Woof!");
  }
}

class PolyCat extends PolyAnimal {
  makeSound(): void {
    console.log("PolyCat says: Meow! Meow!");
  }
}

console.log("\n--- Polymorphism Demo ---");
const animalList: PolyAnimal[] = [new PolyDog(), new PolyCat()];
animalList.forEach((a) => a.makeSound());

// ------------------------------------------
// 20. Vehicle Interface (Car & Bike)
// ------------------------------------------
console.log(
  "\n" +
    author(
      "20. Write a Vehicle interface and implement it in Car and Bike classes.",
    ),
);

interface Vehicle {
  speed: number;
  drive(): void;
}

class VehicleCar implements Vehicle {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  drive(): void {
    console.log(`Driving car on highway at ${this.speed} km/h`);
  }
}

class Bike implements Vehicle {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  drive(): void {
    console.log(`Riding bicycle on lane at ${this.speed} km/h`);
  }
}

console.log("\n--- Vehicle Interface Demo ---");
const vCar = new VehicleCar(120);
const vBike = new Bike(25);
vCar.drive();
vBike.drive();

// ------------------------------------------
// 21. Generic Repository
// ------------------------------------------
console.log(
  "\n" +
    author(
      "21. Create a generic Repository class with methods add(), getAll().",
    ),
);

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

console.log("\n--- Generic Repository Demo ---");
const strRepo = new Repository<string>();
strRepo.add("TypeScript");
strRepo.add("JavaScript");
console.log("Repository String Items:", strRepo.getAll());

// ------------------------------------------
// 22. Stack
// ------------------------------------------
console.log(
  "\n" +
    author("22. Create a class Stack with push, pop, peek, isEmpty methods."),
);

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
    console.log(`Pushed item: ${item}`);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log("Stack is empty. Cannot pop.");
      return undefined;
    }
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

console.log("\n--- Stack Demo ---");
const myStack = new Stack<number>();
myStack.push(10);
myStack.push(20);
console.log("Top Item (Peek):", myStack.peek());
console.log("Popped Item:", myStack.pop());
console.log("Is Stack Empty?:", myStack.isEmpty());

// ------------------------------------------
// 23. Payment Interface
// ------------------------------------------
console.log(
  "\n" +
    author(
      "23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.",
    ),
);

interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid $${amount} using cash.`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid $${amount} using credit card.`);
  }
}

console.log("\n--- Payment Interface Demo ---");
const cashPay = new CashPayment();
const cardPay = new CardPayment();
cashPay.pay(50);
cardPay.pay(120);

// ------------------------------------------
// 24. Abstract Appliance
// ------------------------------------------
console.log(
  "\n" +
    author(
      "24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.",
    ),
);

abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Fan turned on: Blades start spinning.");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Air Conditioner turned on: Cooling mode activated.");
  }
}

console.log("\n--- Abstract Appliance Demo ---");
const fanApp = new Fan();
const acApp = new AirConditioner();
fanApp.turnOn();
acApp.turnOn();

// ------------------------------------------
// 25. Class Shape Static Describe
// ------------------------------------------
console.log(
  "\n" + author("25. Create a class Shape with a static method describe()."),
);

class ShapeStatic {
  static describe(): void {
    console.log("Shape is a geometry concept representing 2D/3D figures.");
  }
}

console.log("\n--- Static Method Describe Demo ---");
ShapeStatic.describe();

// ------------------------------------------
// 26. Order Total Price Calculation
// ------------------------------------------
console.log(
  "\n" +
    author(
      "26. Create a class Order with list of products. Add method to calculate total price.",
    ),
);

class Order {
  products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Added "${product.name}" ($${product.price}) to order.`);
  }

  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }

  displayOrderSummary(): void {
    console.log(`Order Total Amount: $${this.calculateTotal()}`);
  }
}

console.log("\n--- Order Calculation Demo ---");
const myOrder = new Order();
myOrder.addProduct(new Product("Laptop", 1200));
myOrder.addProduct(new Product("Mouse", 25));
myOrder.displayOrderSummary();

// ------------------------------------------
// 27. Teacher extending Person
// ------------------------------------------
console.log(
  "\n" +
    author(
      "27. Create a class Teacher that extends Person. Add subject attribute and introduce method.",
    ),
);

class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  introduce(): void {
    console.log(
      `Hello, I'm ${this.name}, ${this.age} years old, and I teach ${this.subject}.`,
    );
  }
}

console.log("\n--- Teacher Extension Demo ---");
const teacher1 = new Teacher("Mr. David", 35, "Computer Science");
teacher1.introduce();

// ------------------------------------------
// 28. Protected Method makeSound
// ------------------------------------------
console.log(
  "\n" +
    author(
      "28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.",
    ),
);

class ProtectedAnimal {
  protected makeSound(): void {
    console.log("Generic protected animal sound.");
  }
}

class ProtectedDog extends ProtectedAnimal {
  public makeSound(): void {
    console.log("Protected Dog Overridden Sound: Woof!");
  }
}

class ProtectedCat extends ProtectedAnimal {
  public makeSound(): void {
    console.log("Protected Cat Overridden Sound: Meow!");
  }
}

console.log("\n--- Protected Method Overriding Demo ---");
const pDog = new ProtectedDog();
const pCat = new ProtectedCat();
pDog.makeSound();
pCat.makeSound();

// ------------------------------------------
// 29. Movable Interface
// ------------------------------------------
console.log(
  "\n" +
    author(
      "29. Create an interface Movable with method move(). Implement it in Car and Robot.",
    ),
);

interface Movable {
  move(): void;
}

class MovableCar implements Movable {
  move(): void {
    console.log("Car moves forward on four wheels.");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot walks forward using bipedal legs.");
  }
}

console.log("\n--- Movable Interface Demo ---");
const mCar = new MovableCar();
const mRobot = new Robot();
mCar.move();
mRobot.move();

// ------------------------------------------
// 30. School
// ------------------------------------------
console.log(
  "\n" +
    author(
      "30. Create a class School with list of Students and Teachers. Add method to display info.",
    ),
);

class School {
  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displaySchoolInfo(): void {
    console.log("=== School Faculty & Students ===");
    console.log("--- Teachers ---");
    this.teachers.forEach((t) => t.introduce());
    console.log("--- Students ---");
    this.students.forEach((s) => s.displayAllInfo());
  }
}

console.log("\n--- School System Demo ---");
const mySchool = new School();
mySchool.addTeacher(new Teacher("Mr. David", 35, "Computer Science"));
mySchool.addStudent(new Student("Quyen", 20, "8.5"));
mySchool.displaySchoolInfo();
