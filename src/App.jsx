import { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(null);

  const calculateResult = () => {
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "x") return a * b;
    if (operation === "÷") return b !== 0 ? a / b : "∞";
    return "";
  };

  return (
    <div className="calculator-container flex flex-col items-center p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg w-80 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-700">Calculadora</h1>
        <div className="flex space-x-4">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="border p-2 rounded w-24 text-center text-lg shadow-sm"
            />
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="border p-2 rounded w-24 text-center text-lg shadow-sm"
            />
        </div>
      <div className="flex space-x-4">
        {["+", "-", "x", "÷"].map((op) => (
          <button
            key={op}
            onClick={() => setOperation(op)}
            className={`p-3 rounded-lg text-lg font-semibold shadow-md transition-all duration-200 ${operation === op ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
          >
            {op}
          </button>
        ))}
      </div>
      <div className="result-box p-4 border rounded-lg text-xl font-bold bg-white shadow-md w-full text-center">
        Resultado: {calculateResult()}
      </div>
    </div>
  );
}
