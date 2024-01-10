import { createContext, ReactNode, useState } from "react";

interface UserContextType {
  user?: {
		id:number;
    name: string;
    image: string;
		office:string;
		locality:"Gravatai" | "Canoas";
		
  };
  setUser?: (user: UserContextType["user"]) => void;
}

export const UserContext = createContext<UserContextType>({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<UserContextType["user"]>({id:1, name: "Alison", image: "https://media.licdn.com/dms/image/C4E03AQFiGeebtX5Ymw/profile-displayphoto-shrink_800_800/0/1638359048171?e=1708560000&v=beta&t=vcdUK9dv2bYXz6fOeUU9d1w_EM4EGX2CLM6VucIx4NQ", office: "Gerente", locality: "Gravatai"});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};