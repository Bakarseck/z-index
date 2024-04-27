import { useState } from 'react';
import { postData } from '@/lib/utils';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onLogin({email, password});
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Pseudo/email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded"
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 rounded"
        >
          <i className="mr-2 fas fa-sign-in-alt"></i>Se connecter
        </button>
      </div>
    </form>
  );
}
