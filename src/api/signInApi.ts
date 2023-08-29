import axios from "axios";
import { useMutation } from "react-query";
import { SignInInfo } from "./dto";

const useSignInMutation = () => {
  const fetcher = (signInInfo: SignInInfo) =>
    axios.post("/auth/signIn", signInInfo);

  return useMutation(fetcher);
};

export { useSignInMutation };
