import { useState } from 'react';
import './App.css'; // You can keep this for any additional custom styles if needed.

function App() {
  const  num1 =10 
  const  num2 =3;
  const [result, setResult] = useState(0);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <h2 className="text-xl mb-4">Result: {result}</h2>
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
