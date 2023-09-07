export type Role = "ROLE_USER" | "ROLE_ADMIN" | "ROLE_CLEANER";

export interface SignUpInfo {
  loginId: string;
  password: string;
  username: string;
  email: string;
  role: Role;
}

export interface SignInInfo {
  loginId: string;
  password: string;
  expoToken: string;
}

export interface FloorInfo {
  floorNumber: number;
  buildingName: string;
}

export interface Status {
  regular: number;
  bottle: number;
  plastic: number;
  paper: number;
}

export interface TrashCanInfo {
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface FloorInfo {
  floorNumber: number;
  trashCan: TrashCanInfo;
}

export interface BuildingInfo {
  buildingNumber: number;
  buildingName: string;
  floors: FloorInfo[];
}

export interface AddBuildingInfo {
  buildingNumber: number;
  buildingName: string;
}

export interface AddFloorInfo {
  buildingNumber: number;
  buildingName: string;
  floorNumber: number;
}
