import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  SignUpInfo,
  SignInInfo,
  BuildingInfo,
  FloorInfo,
  TrashCanInfo,
  Status,
} from "./dto";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tokenState } from "../store";

const useSignUpMutation = () => {
  const fetcher = (props: SignUpInfo) => {
    return axios.post("/users", props);
  };

  return useMutation(fetcher);
};

const useSignInMutation = () => {
  const setTokenState = useSetRecoilState(tokenState);
  const fetcher = (signInInfo: SignInInfo) => {
    return axios.post("/auth/signIn", signInInfo).then(({ data }) => data);
  };

  return useMutation(fetcher, {
    onSuccess: ({ access_token }) => {
      setTokenState(access_token);
    },
  });
};

const useGetBuildingQuery = () => {
  const fetcher = () => {
    return axios.get(`/buildings`).then(({ data }) => {
      const array2Over50 = data.map((item: any) => {
        if (item.floors.length > 0) {
          const over50Floors: number[] = [];
          const over80Floors: number[] = [];

          item.floors.forEach((floor: any) => {
            const status = floor.trashCan.status;
            const floorNumber = floor.floorNumber;

            if (
              status.bottle > 80 ||
              status.paper > 80 ||
              status.plastic > 80 ||
              status.regular > 80
            ) {
              over80Floors.push(floorNumber);
            }

            if (
              (status.bottle > 50 ||
                status.paper > 50 ||
                status.plastic > 50 ||
                status.regular > 50) &&
              over80Floors.indexOf(floorNumber) === -1
            ) {
              over50Floors.push(floorNumber);
            }
          });

          return {
            buildingId: item.buildingNumber,
            buildingName: item.buildingName,
            over50: over50Floors,
            over80: over80Floors,
          };
        }
      });
      const filteredArray2 = array2Over50.filter(
        (item: any) => item !== undefined
      );

      return filteredArray2;
    });
  };

  return useQuery(["trashCan"], fetcher);
};

const useGetTrashCanQuery = ({
  buildingNumber,
}: {
  buildingNumber: number;
}) => {
  const fetcher = () => {
    return axios.get(`/buildings/${buildingNumber}`).then(({ data }) => data);
  };

  return useQuery(["trashCan"], fetcher);
};

const useAddBuildingMutation = () => {
  const getTokenState = useRecoilValue(tokenState);
  const queryClient = useQueryClient();

  const fetcher = ({
    buildingNumber,
    buildingName,
  }: {
    buildingNumber: number;
    buildingName: string;
  }) => {
    return axios.post(
      "/buildings",
      { buildingNumber, buildingName },
      {
        headers: {
          Authorization: `Bearer ${getTokenState}`,
        },
      }
    );
  };
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries(["trashCan"]);
    },
  });
};

const useAddFloorMutation = () => {
  const getTokenState = useRecoilValue(tokenState);
  const queryClient = useQueryClient();

  const fetcher = ({
    buildingNumber,
    floorNumber,
  }: {
    buildingNumber: number;
    floorNumber: number;
  }) => {
    return axios.post(
      `/buildings/${buildingNumber}/floors`,
      { floorNumber },
      {
        headers: {
          Authorization: `Bearer ${getTokenState}`,
        },
      }
    );
  };

  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries(["trashCan"]);
    },
  });
};

const useAddTrashCanMutation = () => {
  const getTokenState = useRecoilValue(tokenState);

  const queryClient = useQueryClient();

  const fetcher = ({
    buildingNumber,
    floorNumber,
  }: {
    buildingNumber: number;
    floorNumber: number;
  }) => {
    return axios.post(
      `/buildings/${buildingNumber}/floors/${floorNumber}/can`,
      null,
      {
        headers: {
          Authorization: `Bearer ${getTokenState}`,
        },
      }
    );
  };

  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries(["trashCan"]);
    },
  });
};

export {
  useSignUpMutation,
  useSignInMutation,
  useGetBuildingQuery,
  useGetTrashCanQuery,
  useAddBuildingMutation,
  useAddFloorMutation,
  useAddTrashCanMutation,
};
