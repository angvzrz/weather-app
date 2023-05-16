import axios from 'axios';

export async function getFetch<Response>(url: string): Promise<Response> {
  try {
    const response = await axios.get<Response>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
