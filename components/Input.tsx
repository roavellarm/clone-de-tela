import React from "react";

import {
  Input as CharkaInput,
  InputProps as CharkaInputProps,
} from "@chakra-ui/core";

const Input: React.FC<CharkaInputProps> = (props) => {
  return (
    <CharkaInput
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      {...props}
    />
  );
};

export default Input;
