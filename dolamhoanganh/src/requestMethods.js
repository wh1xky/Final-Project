import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjQ4NzNiMTk0YTA3OGJkMGNjMWU2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Nzk4NzY5NSwiZXhwIjoxNjcwNTc5Njk1fQ.aF9ppcu7MCFmfHFkX5iEIBKUJrY_TbuEZJLdNsuE8vo"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})

export const Loginadm = axios.create({
    baseURL: 'http://localhost:5000',
    responseType: 'json',
    withCredentials: true,
})