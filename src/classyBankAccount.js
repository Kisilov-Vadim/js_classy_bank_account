class Person {
  constructor(name, date, amount) {
    this.name = name; 
    this.date = date; 
    this.age = Person.getAge(date); 
    this.amount = amount; 
    this.accountHistory = [`Initial: ${amount}`]; 
  }

  static getAge(date) {
    const birthDay = date.split('.')[0]; 
    const birthMonth = date.split('.')[1]; 
    const birthYear = date.split('.')[2]; 
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();

    if (monthNow === birthMonth && dayNow < birthDay || monthNow < birthMonth) {
      return yearNow - birthYear - 1;
    } else {
      return yearNow - birthYear;
    }
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`); 
  }

  addMoney(money, info) {
    this.amount += money; 
    this.accountHistory.push(`${info}: ${money}`); 
  }

  withdrawMoney(money, info) {
    this.amount -= money;
    this.accountHistory.push(`${info}: -${money}`);
  }

  getAccountHistory() {
    console.log(this.accountHistory.join(', ')); 
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$