import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);  

  const handleCalculation = (operation) => {
    let calculationResult;

    switch (operation) {
      case '+':
        calculationResult = num1 + num2;
        break;
      case '-':
        calculationResult = num1 - num2;
        break;
      case '*':
        calculationResult = num1 * num2;
        break;
      case '/':
        calculationResult = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      case '%':
        calculationResult = num1 % num2;
        break;
      default:
        calculationResult = 0;
    }

    setResult(calculationResult);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        className={`mb-4 py-2 px-4 rounded ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`}
      >
        Change to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Calculator</h1>
      <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Result: {result}</h2>
      <div className="flex flex-col space-y-2 mb-4">
        <div className="flex space-x-2 items-center">
          <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Num1: {num1}</span>
          <button 
            onClick={() => setNum1(num1 + 1)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
             +
          </button>
          <button 
            onClick={() => setNum1(num1 - 1)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
          -
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Num2: {num2}</span>
          <button 
            onClick={() => setNum2(num2 + 1)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
           +
          </button>
          <button 
            onClick={() => setNum2(num2 - 1)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
          -
          </button>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => handleCalculation('+')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => handleCalculation('-')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          -
        </button>
        <button
          onClick={() => handleCalculation('*')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          *
        </button>
        <button
          onClick={() => handleCalculation('/')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          /
        </button>
        <button
          onClick={() => handleCalculation('%')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          %
        </button>
      </div>
    </div>
  );
}

export default App;
