import { useRecoilState } from 'recoil';
import { registerData } from '@/states/userState';

export default function Register({ onRegister }) {
  const [form, setForm] = useRecoilState(registerData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onRegister(form);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex space-x-4 text-white">
        <input
          type="text"
          name="firstName" // Make sure to set the 'name' prop
          placeholder="Prénom(s)"
          value={form.firstName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-[12px]  bg-gray-500 "
        />
        <input
          type="text"
          name="lastName" // Make sure to set the 'name' prop
          placeholder="Nom"
          value={form.lastName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
        />
      </div>
      <input
        type="text"
        name="username" // Make sure to set the 'name' prop
        placeholder="Pseudo"
        value={form.username}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
      />
      <input
        type="email"
        name="email" // Make sure to set the 'name' prop
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
      />
      <input
        type="password"
        name="password" // Make sure to set the 'name' prop
        placeholder="Mot de passe"
        value={form.password}
        onChange={handleInputChange}
        className="w-full px-4 py-2 rounded-[12px] bg-gray-500"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-content text-white justify-center flex "
      >
        <img src='../assets/registerFormBtn.png' className='w-[200px] h-[50px]' />
      </button>
    </form>
  );
}
