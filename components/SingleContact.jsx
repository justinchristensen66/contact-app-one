import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

const SingleContact = ({ item }) => {
  const { fullName, email, phoneNumber, address } = item;
  return (
    <tr className="bg-white/90 h-[3rem] border-b border-black/40 text-center">
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{address}</td>
      <td className="flex items-center gap-4 text-xl mt-[1rem]">
        <span className="cursor-pointer hover:opacity-60">
          <BsFillTrashFill />
        </span>
        <span className="cursor-pointer hover:opacity-60">
          <AiFillEdit />
        </span>
      </td>
    </tr>
  );
};

export default SingleContact;
