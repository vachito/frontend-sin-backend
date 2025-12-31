import clienteAxios from "@/config/axios";

export function getUsers(){
   return clienteAxios.get('/users')
}