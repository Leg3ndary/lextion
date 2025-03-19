// Increase timeout for database operations
jest.setTimeout(10000);

// Clean up database connections after all tests
afterAll(async () => {
  // Add any global cleanup here if needed
}); 