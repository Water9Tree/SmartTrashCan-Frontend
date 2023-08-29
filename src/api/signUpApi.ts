import axios from "axios";
import { useMutation } from "react-query";
import { SignUpInfo } from "./dto";

const useSignUpMutation = () => {
  const fetcher = (signUpInfo: SignUpInfo) => axios.post("/users", signUpInfo);

  return useMutation(fetcher);
};

export { useSignUpMutation };
