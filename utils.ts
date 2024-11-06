import {GetCharacterResponse} from "@/types/interface";
import moment from "moment";

const DISNEY_API_MAX_PAGE: number = 149;
const BASE_URL: string = 'https://api.disneyapi.dev'

const fetchCharacters = async (
  numberOfChars: number,
  randomized: boolean = true,
  query: string = '') =>
{
  const randomPage = randomized ? Math.floor(Math.random() * DISNEY_API_MAX_PAGE) : 1;
  const response = await fetch(`${BASE_URL}/character?page=${randomPage}&pageSize=${numberOfChars}&name=${query}`);
  return await response.json();
}

const fetchCharacter = async(id: string): Promise<GetCharacterResponse> => {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  return await response.json();
}

const computeAge = (date: string) => {
  const now = new Date().getFullYear();
  const d = new Date(date).getFullYear();

  console.log(now, d);

  return now - d;
}

export {
  fetchCharacters,
  fetchCharacter,
  computeAge
}