import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
interface UserContextType {
  user?: {
		id:number;
    name: string;
    image: string;
		office:string
		locality:"Gravatai" | "Canoas";
  };
  setUser?: (user: UserContextType["user"]) => void;
}

export const useUser = (): UserContextType => {
	return useContext(UserContext);
};