import { useState } from 'react';
import greeterContract from './contracts/Greeter.json';
import { Contract, ContractFactory, Web3Provider } from 'zksync-web3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GreeterLayout = () => {
  const [greeting, setGreeting] = useState<string>('');
  const [deploying, setDeploying] = useState<boolean>(false);
  const handleClick = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x144' }] });

    const signer = new Web3Provider(window.ethereum).getSigner();
    const factory = new ContractFactory(greeterContract.abi, greeterContract.bytecode, signer, 'create');

    let contract: Contract;

    setDeploying(true);
    try {
      contract = await factory.deploy(greeting);
      toast.success('Deploying contract at ' + contract.address, {
        autoClose: 10000,
        onClick: () => window.open('https://explorer.zksync.io/address/' + contract.address),
      });
    } catch (e) {
      setDeploying(false);
      toast.error('Failed to deploy contract');
      return;
    }
    await contract.deployTransaction.wait();
    setDeploying(false);
  };

  return (
    <div className="grid place-items-center">
      <h1 className="font-bold text-4xl text-white mb-2">Greeter</h1>
      <h1 className="text-xl text-white mb-8">~2$ fees</h1>
      <div className="grid place-items-center">
        <div className="mb-6 w-80">
          <label htmlFor="" className="block mb-2 text-sm font-normal text-white">
            Default greeting
          </label>
          <input
            type="text"
            id="text"
            onChange={(e) => setGreeting(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 outline-0"
            placeholder="hello world"
            required
          />
        </div>
        <button
          onClick={handleClick}
          disabled={deploying}
          className="text-white disabled:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          {!deploying && 'Deploy'}
          {deploying && (
            <div>
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 mr-2 animate-spin text-gray-600 fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Loading...
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default GreeterLayout;
