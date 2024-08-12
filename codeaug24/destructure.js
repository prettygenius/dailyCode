//problem : two salaries 
//destructure object with alias 
//destructure object within object

function App() {
  const employee = {
    name: 'John',
    age: 30,
    department: 'Engineering',
    salary: 50000,
    address :{
      salary: 200,
      street : '123 Main Street',
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }

  }
  
  const {name,salary: employeeSalary, address:{salary}} = employee;
  
  return (
    <div>
      <button className='appButton'>AppButton</button>
      <ButtonOne />
      <ButtonTwo />
      <h2>Hi my name is {name} I have a salary of {employeeSalary} {salary}</h2>
    </div>
  )
}
