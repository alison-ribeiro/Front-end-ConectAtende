import { useContext } from "react";

import { SelectedContext, UserContextType } from "../contexts/SelectedContext";



export const useSelected = (): UserContextType => {
	return useContext(SelectedContext);
};