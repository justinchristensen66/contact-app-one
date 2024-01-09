import React from 'react';

const Input = ({ item }) => {
  const { label, type, name } = item;
  return (
    <div className="flex flex-col gap-2">
      <label className="py-2 text-sm">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`${name}...`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
