import Clock from "./Clock";


const Greeting = ({ name }) => {
  return (
    <>
    <h2>Привет, {name}</h2>
    <Clock />
    </>
  )
}

export default Greeting;


