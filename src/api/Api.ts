import axios from 'axios';
import React from 'react'

const api = axios.create({
    baseURL: 'https://calm-dawn-87258.herokuapp.com',
    timeout: 1000,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
});

export const getData = async () => {
    const request = api.get('/api/notes');
    return request.then(response => response.data);
}

export const postData = async (data: any) => {
    const request = api.post('/api/note', data);
    return request.then(response => response.data);
}