import React from "react";
import { FaIdBadge, FaEnvelope, FaPhone } from "react-icons/fa";

export const ClientInfo = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          {client.emali}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          {client.phone}
        </li>
      </ul>
    </>
  );
};
