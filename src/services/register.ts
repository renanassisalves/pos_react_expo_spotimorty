import api from ".";

export const register = (registerData: any) => api.post("/user/register", registerData);
