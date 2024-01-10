import { createContext, ReactNode, useState } from "react";

export interface UserContextType {
  client?: {
        id: number;
        name: string;
        image: string;
        office: string;
        locality: "Gravatai" | "Canoas";
  };
  setClient?: (user: UserContextType["client"]) => void;
}

export const SelectedContext = createContext<UserContextType>({});


interface UserProviderProps {
  children: ReactNode;
}

export const SelectedProvider: React.FC<UserProviderProps> = ({ children }) => {
	const [client, setClient] = useState<UserContextType["client"]>();

	return (
		<SelectedContext.Provider value={{ client, setClient }}>
			{children}
		</SelectedContext.Provider>
	);
};