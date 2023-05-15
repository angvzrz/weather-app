import axios from 'axios';

export async function getFetch<Response>(url: string): Promise<Response> {
  try {
    return (await axios.get(url)).data as Response;
  } catch (error) {
    console.error(error);
  }

  return {} as Response;
}
