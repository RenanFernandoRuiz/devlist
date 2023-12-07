import "./App.css"
import CreateNewTask from "./components/CreateNewTask/CreateNewTask"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="container">
      <Header />
      <section className="content">
        <CreateNewTask />
      </section>
    </div>

  );
};

export default App