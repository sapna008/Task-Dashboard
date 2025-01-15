import axios from "axios";

const API_BASE_URL = "https://api.trello.com/1";

const apiKey = import.meta.env.VITE_TRELLO_API_KEY;
const apiToken = import.meta.env.VITE_TRELLO_API_TOKEN;

const trello = axios.create({
  baseURL: API_BASE_URL,
  params: {
    key: apiKey,
    token: apiToken,
  },
});

export const getBoards = async () => {
  const response = await trello.get("/members/me/boards");
  return response.data;
};

export const createBoard = async (name: string) => {
  const response = await trello.post("/boards", { name });
  return response.data;
};

export const deleteBoard = async (id: string) => {
  const response = await trello.delete(`/boards/${id}`);
  return response.data;
};

