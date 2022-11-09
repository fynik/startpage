import Clock from "./Clock";


const Greeting = ({ name }) => {
  return (
    <div className="greeting">
      <h2>Привет, {name}</h2>
      <Clock />
    </div>
  )
}

export default Greeting;


