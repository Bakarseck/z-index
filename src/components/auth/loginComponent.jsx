import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onLogin({email, password});
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className='text-white'>
        <input
          type="email"
          placeholder="Pseudo/email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 rounded"
        >
         <img src="../assets/loginBtn.png" className='w-[200px] h-[50px]'  />
        </button>
      </div>
    </form>
  );
}
