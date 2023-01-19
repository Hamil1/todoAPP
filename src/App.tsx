import { Todos } from "./Components/Todos";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl mb-3 font-black">
        Todo APP with React and Spring Boot
      </h1>
      <Todos />
    </div>
  );
}

export default App;
