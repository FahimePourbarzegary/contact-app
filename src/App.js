import './App.css';
import ContactForm from './Components/Contact/ContactForm';
import ContactList from './Components/Contact/ContactList';

function App() {
  return (
    <div className="container">
     <header>Contact App</header>
     <ContactForm/>
     <ContactList/>
    </div>
  );
}

export default App;
