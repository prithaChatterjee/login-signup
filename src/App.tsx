import './App.css';
import Input from './Components/Input/Input';

function App() {
  return (
    <div className="App">
      <Input value={''} type="text" name='firstname' label="firstname" error={true} />
      <Input value={""} type="number" name='lastname' label="lastname" />
    </div>
  );
}

export default App;
