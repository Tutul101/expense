import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TrasanactionList } from "./components/TrasanactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <div className="inc-exp-container">
          <IncomeExpenses></IncomeExpenses>
        </div>
        <TrasanactionList></TrasanactionList>
      </div>
      {/* <AddTransaction></AddTransaction> */}
    </GlobalProvider>
  );
}

export default App;
