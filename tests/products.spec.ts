import { test, expect } from '@playwright/test';

test('get a product by product id', async ({ request }) => {

    const response = await request.get('https://dummyjson.com/products/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect (body.id).toBe(1), 'expected product id to be 1';
    expect (body.title).toBe('Essence Mascara Lash Princess'), 'expected product title to be Essence Mascara Lash Princess';
});

test('get all products', async ({ request }) => {

    const response = await request.get('/products');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect (body.products.length).toBeGreaterThan(0), 'Expected at least one product in the response';
});

test('search products', async ({ request }) => {

    const response = await request.get('/products/search?q=phone');
    expect(response.status(), 'Expected status code 200').toBe(200);
    const body = await response.json();
    expect (body.products.length, 'Expected at least one product in the response').toBeGreaterThan(0);
});

test('create new product', async ({ request }) => {

    const response = await request.post('/products/add', 
    {
        data: {
            title: 'LStar New Test Product',
            description: 'This is a new product from LStar',
        }
    });
    const body = await response.json();
    expect(body.title, 'confirms the title of the newly created product').toBe('LStar New Test Product');
    expect(body.id, 'confirms the id of the newly created product').toBe(195);
});