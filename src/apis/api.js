import axios from "axios";

// Pré-configurando a URL padrão do nosso backend em uma instância do Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

// Configura a instância do Axios para injetar o cabeçalho de autenticação antes de cada requisição
api.interceptors.request.use((config) => {
  // Verifica se já temos as informações do usuário logado no localStorage
  const storedUser = localStorage.getItem("loggedInUser");

  const loggedInUser = JSON.parse(storedUser || '""');

  if (loggedInUser.token) {
    config.headers = {
      Authorization: `Bearer ${loggedInUser.token}`,
    };
  }

  return config;
});

export default api;
