import { prisma } from "./prisma";
async function main() {
    const user = await prisma.user.create({
        data: {
            email: "test@test.com",
            name: "Test User",
            posts: {
                create: [
                    {
                        title: "First Random Post",
                        content: "This is some random content for the first post.",
                        published: true,
                    },
                    {
                        title: "Second Random Post",
                        content: "This is another random post.",
                        published: false,
                    },
                ],
            },
        },
    });
    console.log(user);
}
main()
    .catch(console.error)
    .finally(async () => {
    await prisma.$disconnect();
});
