import './App.css'

const App = ({name,email,mobile }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <h2>Name: {name}</h2>
      <h2>Email id: {email}</h2>
      <h2>Mobile No: {mobile}</h2>
    </div>
  )
}

export default App

