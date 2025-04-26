class Employee {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    applyBonus(percent) {
        let increaseSalaryPercent = this.salary * (percent / 100)

        this.salary += increaseSalaryPercent
        return this.salary

    }
}


const emp1 = new Employee("Biswajit", "Manager", 50000)
// console.log(emp1.salary)
// console.log(emp1.applyBonus(20))

class Library {
    constructor() {
        this.books = []
    }

    addBook(...book){
      this.books.push(...book)
      return this.books
    }

    findBook(title){
     if(this.books.includes(title)){
        console.log(`Book found`)
     }else{
        console.log(`Not found`)
     }
    }
}

const library = new Library()

library.addBook("Train to bushan", "Khuswant singh", "Godan")
console.log(library.books)

library.findBook("Train to bushan")
