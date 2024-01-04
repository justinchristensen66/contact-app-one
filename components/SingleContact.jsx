import React from 'react';

const SingleContact = ({ item }) => {
  const { fullName, email, phoneNumber, address } = item;
  return (
    <tr className="bg-white/10 h-[3rem] border-b border-black/40 text-center">
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{address}</td>
    </tr>
  );
};

export default SingleContact;
