import { useState } from "react";

export interface Message {
	index: number;
	sender: "client" | "attendant";
	content: string;
	time: string;
}

export const messagesArray: Message[] = [
	{
		index: 0,
		sender: "client",
		content: "Olá, preciso de ajuda com meu pedido",
		time: "10:00",
	},
	{
		index: 1,
		sender: "attendant",
		content: "Claro, posso ajudar. Qual é o problema?",
		time: "10:01",
	},
	{
		index: 2,
		sender: "client",
		content: "Meu pedido ainda não chegou",
		time: "10:01",
	},
	{
		index: 3,
		sender: "attendant",
		content: "Vou verificar o que aconteceu",
		time: "10:01",
	},
	{
		index: 4,
		sender: "attendant",
		content: "Seu pedido foi extraviado, vou fazer o reembolso",
		time: "10:02",
	},
	{
		index: 5,
		sender: "client",
		content: "Ok, obrigado",
		time: "10:02",
	},
	{
		index: 6,
		sender: "client",
		content: "Já vou",
		time: "10:05",
	},
];

type UseMessages = {
  messages: Message[];
  addMessage: (newMessage: Message) => void;
};

export const useMessages = (): UseMessages => {
	const [messages, setMessages] = useState<Message[]>(messagesArray);

	const addMessage = (newMessage: Message) => {
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	return { messages, addMessage };
};