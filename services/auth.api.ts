import api from "@/configs/api.config";

export const login = async (data: { username: string; email: string; password: string }) => {
  const res = await api.post("/auth/authenticate", data);

  return res;
};