'use client';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();
  const inputs = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'fullName',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Phone No',
      type: 'text',
      name: 'phoneNumber',
    },
    {
      label: 'Address',
      type: 'text',
      name: 'address',
    },
  ];
  return (
    <div className="w-[90%] md:w-[30rem] mx-auto my-[5rem] border border-gray-300 shadow bg-white/10 rounded-md p-6">
      <span
        onClick={() => router.push('/')}
        className="text-white bg-blue-600/85 p-3 rounded-md hover:bg-blue-700/70 absolute left-[3rem] cursor-pointer "
      >
        Go Back
      </span>
      <h2 className="pb-7 text-center text-2x1">Contact Form</h2>
      <form className=" rounded">
        {inputs.map((item, i) => (
          <Input item={item} key={i} />
        ))}
        <button className="text-white mt-[2rem] bg-blue-600/90 w-full p-3 rounded-md hover:bg-blue-700/70">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
