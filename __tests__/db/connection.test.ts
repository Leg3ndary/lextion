import { PrismaClient } from "@prisma/client";

describe("Database Connection", () => {
    let prisma: PrismaClient;

    beforeAll(() => {
        prisma = new PrismaClient();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    it("should connect to the database successfully", async () => {
        await expect(prisma.$connect()).resolves.not.toThrow();
    });

    it("should be able to create and query users", async () => {
        // Create a test user with a unique email
        const testEmail = `test${Date.now()}@example.com`;
        const createdUser = await prisma.user.create({
            data: {
                email: testEmail,
                name: "Test User",
            },
        });

        expect(createdUser).toHaveProperty("id");
        expect(createdUser.email).toBe(testEmail);
        expect(createdUser.name).toBe("Test User");

        // Query the user
        const foundUser = await prisma.user.findUnique({
            where: { email: testEmail },
        });

        expect(foundUser).toHaveProperty("id", createdUser.id);
        expect(foundUser?.email).toBe(testEmail);

        // Clean up
        await prisma.user.delete({
            where: { id: createdUser.id },
        });
    });
});
