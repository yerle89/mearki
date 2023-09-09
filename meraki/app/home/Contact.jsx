"use client"
import React, { useState } from 'react'
import Modal from './components/Modal'

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');
  const [formValid, setFormValid] = useState(false);

  const checkFormValidity = () => {
    if (name.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && textArea.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormValidity();
    if (formValid) {
      setShowModal(true);
      setName('');
      setLastName('');
      setEmail('');
      setTextArea('');

    }
  };

  return (
    <section id='contact' className='flex justify-start max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col xl:ml-36 lg:ml-16'>
        <h3 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair text-[#F9F8F5]'>
          Contacto
        </h3>

        <form  className="flex flex-col gap-8 pt-10 w-fit" onSubmit={handleSubmit}>
          <div className="flex gap-8">
            <input
              id='name'
              className="bg-[#2B2B2B] border border-[#F9F8F5] text-[#F9F8F5] rounded-full
              h-10 w-36 sm:h-14 sm:w-64 text-sm sm:text-base
              px-3 placeholder:text-[#F9F8F5] placeholder:text-opacity-70"
              type="text"
              placeholder="Nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              id='lastName'
              className="bg-[#2B2B2B] border border-[#F9F8F5] text-[#F9F8F5] rounded-full
              h-10 w-36 sm:h-14 sm:w-64 text-sm sm:text-base
              px-3 placeholder:text-[#F9F8F5] placeholder:text-opacity-70"
              type="text"
              placeholder="Apellido"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <input
              id='email'
              className="bg-[#2B2B2B] border border-[#F9F8F5] text-[#F9F8F5] rounded-full
              h-10 w-full sm:h-14 sm:w-64 text-sm sm:text-base
              px-3 placeholder:text-[#F9F8F5] placeholder:text-opacity-70"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-8">
            <textarea
              id='textArea'
              className="bg-[#2B2B2B] border border-[#F9F8F5] text-[#F9F8F5] rounded-3xl
              text-sm sm:text-base px-3 py-4 sm:h-64 sm:w-[540px] h-40 w-full
              placeholder:text-[#F9F8F5] placeholder:text-opacity-70"
              placeholder="Escribe un mensaje"
              required
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            />
          </div>
          <div className='flex justify-center'>
            <button className="bg-[#F9F8F5] w-28 h-10 rounded-full
              text-sm" 
              type="submit">
              ENVIAR
            </button>
          </div>
        </form>

      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </section>
  )
}
