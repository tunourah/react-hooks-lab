import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [photo, setPhoto] = useState("https://images.pexels.com/photos/403575/pexels-photo-403575.jpeg?auto=compress&cs=tinysrgb&w=1200");
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "https://images.pexels.com/photos/2156925/pexels-photo-2156925.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3611515/pexels-photo-3611515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2564624/pexels-photo-2564624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    
  ];

  const changePhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
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
    <div className="flex flex-col min-h-screen">
    {/* Dark Mode Toggle */}
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`mb-4 py-2 px-4 rounded ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`}
      aria-label="Toggle dark mode"
    >
      Change to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  <div className='flex flex-col  sm:flex-row'>
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} w-full`}>
      <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Calculator</h1>
      <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Result: {result}</h2>
      <div className="flex flex-col space-y-2 mb-4">
        {/* Number 1 Controls */}
        <div className="flex space-x-2 items-center">
          <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Num1: {num1}</span>
          <button 
            onClick={() => setNum1(num1 + 1)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            aria-label="Increment Num1"
          >
            +
          </button>
          <button 
            onClick={() => setNum1(Math.max(num1 - 1, 0))}  
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            aria-label="Decrement Num1"
          >
            -
          </button>
        </div>
        {/* Number 2 Controls */}
        <div className="flex space-x-2 items-center">
          <span className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Num2: {num2}</span>
          <button 
            onClick={() => setNum2(num2 + 1)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            aria-label="Increment Num2"
          >
            +
          </button>
          <button 
            onClick={() => setNum2(Math.max(num2 - 1, 0))}  
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            aria-label="Decrement Num2"
          >
            -
          </button>
        </div>
      </div>
      {/* Calculation Buttons */}
      <div className="flex space-x-2">
        {['+', '-', '*', '/', '%'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleCalculation(operator)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            aria-label={`Calculate ${operator}`}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  
    {/* Image Display Section */}
    <div className={`flex flex-col items-center justify-center w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Image Display</h1>
      <img src={photos[photoIndex]} alt="Display" className="mb-4 w-64 h-64 object-cover" />
      <button 
        onClick={changePhoto}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        aria-label="Change image"
      >
        Change Image
      </button>
    </div>
    </div>
  </div>
  
  );
}

export default App;
