import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <form
      action="https://formspree.io/f/mzbylbdr"
      method="POST"
      className="flex justify-center pt-4 flex-wrap"
    >
      <p className='text-lg'>Formularz kontaktowy</p>
      <div className="flex w-full justify-center m-3">
        <input
          type="text"
          name="Imię i nazwisko: "
          className="input-text w-11/12 md:w-3/6 max-w-md"
          placeholder="Imię i nazwisko"
          aria-label="Imię i nazwisko"
          required
        />
      </div>
      <div className="flex w-full justify-center m-3">
        <input
          type="email"
          name="Adres e-mail: "
          className="input-text w-11/12 md:w-3/6 max-w-md"
          placeholder="Adres e-mail do kontaktu"
          aria-label="Adres e-mail do kontaktu"
          required
        />
      </div>

      <div className="flex w-full justify-center m-3">
        <textarea
          name="Wiadomość: "
          className="input-text w-11/12 md:w-3/6 max-w-md"
          placeholder="Twoja wiadomość"
          aria-label="Twoja wiadomość"
          required
        ></textarea>
      </div>
      <div className="flex w-full justify-center">
        <button type="submit" className='hover:bg-success hover:text-white hover:shadow-[0px_0px_30px_5px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_0px_30px_5px_rgba(255,255,255,0.2)] flex justify-center items-center p-3 border-2 border-primary dark:border-[#D3D3D3] dark:text-[#D3D3D3] rounded-lg dark:hover:text-primary'>Wyślij wiadomość</button>
      </div>
    </form>
  )
}

export default Contact