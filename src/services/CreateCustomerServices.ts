import { PrismaClient } from "@prisma/client";

interface CustomerProps {
  name: String;
  email: String;
}

const prismaClient = new PrismaClient();
class CreateCustomerServices {
  async execute({ name, email }: CustomerProps) {
    if (!name || !email) throw new Error("Preencha todos os campos");

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerServices };
