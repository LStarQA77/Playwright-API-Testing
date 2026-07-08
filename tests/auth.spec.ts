import { test, expect } from '@playwright/test';

test('User Login', async ({ request }) => {
    const response = await request.post('/auth/login', {
        data: {
            username: 'emilys',
            password: 'emilyspass'
        }
    });
    const body = await response.json();
    expect(body.token, 'confirms the authentication token is returned').toBeTruthy();
});

test('User Login Error', async ({ request }) => {
    const response = await request.post('/auth/login', {
        data: {
            username: 'emilys',
            password: 'emilyspass1'
        }
    });
    const body = await response.json();
    expect(body.token, 'confirms the authentication token is returned').toBeTruthy();
});