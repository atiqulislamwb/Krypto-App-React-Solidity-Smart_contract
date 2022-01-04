import { Footer, Navbar, Services, Transactions, Welcome } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default App;
