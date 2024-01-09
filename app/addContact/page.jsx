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
    <div className="w-[90%] md:w-[30rem] mx-auto my-[5rem] border border-gray-500 bg-white/10 rounded-md p-6">
      <span
        onClick={() => router.push('/')}
        className="bg-blue-600/50 p-3 rounded-md hover:bg-blue-700/50 absolute left-[3rem] cursor-pointer"
      >
        Go Back
      </span>
      <h2 className="pb-7 text-center text-2x1">Contact Form</h2>
      <form>
        {inputs.map((item, i) => (
          <Input item={item} key={i} />
        ))}
      </form>
    </div>
  );
};

export default page;
