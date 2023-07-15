import React, { useState } from 'react';

const APP = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-100 rounded p-4">
        <input
          className="w-full p-2 mb-4 text-right"
          type="text"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white rounded p-2"
            name="clear"
            onClick={clear}
          >
            Clear
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white rounded p-2"
            name="="
            onClick={calculate}
          >
            =
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white rounded p-2"
            name="."
            onClick={handleClick}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default APP;
