import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const DeleteBlock = () => {
  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:text-red-200 " />
  );
};
