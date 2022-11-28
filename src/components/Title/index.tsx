import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";

import { TitleStyle } from "./styles";

interface AddButtonProps {
  text: string;
}

export const Title: React.FC<AddButtonProps> = ({ text }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <TitleStyle>
      {text}
      <button type="button" onClick={() => signOut()}>
        <FiLogOut size={26} />
      </button>
    </TitleStyle>
  );
};
