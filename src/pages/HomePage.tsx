import TokenLayout from '../layout/TokenLayout.tsx';
import GreeterLayout from '../layout/GreeterLayout.tsx';
import { useState } from 'react';

const HomePage = () => {
  const [contract, setContract] = useState<string>('greeter');

  return (
    <>
      <div className="grid mt-20 place-items-center">
        <div className="grid place-items-center">
          <h1 className="font-bold text-6xl text-white mb-10">Contract deployer</h1>
          <p className="mb-10 text-white font-light text-2xl">
            This is a simple website to deploy basic contract to zkSync Era
          </p>
          <div className="inline-flex rounded-md shadow-sm mb-6 mt-">
            <button
              onClick={() => setContract('token')}
              className={
                'px-4 py-2 text-sm font-medium border rounded-l-lg bg-gray-700 border-gray-600 text-white hover:text-blue-400 hover:bg-gray-600' +
                (contract === 'token' ? ' text-blue-400' : '')
              }
            >
              Token
            </button>
            <button
              onClick={() => setContract('greeter')}
              className={
                'px-4 py-2 text-sm font-medium border rounded-r-md bg-gray-700 border-gray-600 text-white hover:text-blue-400 hover:bg-gray-600' +
                (contract === 'greeter' ? ' text-blue-400' : '')
              }
            >
              Greeter
            </button>
          </div>
          <div className="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
            {contract === 'token' && <TokenLayout />}
            {contract === 'greeter' && <GreeterLayout />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
