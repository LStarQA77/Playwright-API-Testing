import { test, expect } from '@playwright/test';

test('get a product by product id', async ({ request }) => {

    const response = await request.get('https://dummyjson.com/products/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect (body.id).toBe(1);
    expect (body.title).toBe('iPhone 9');
});