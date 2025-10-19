import prismaClient from "../prisma";

class ListCustomerServices {
  async execute() {
    const customers = await prismaClient.customer.findMany();

    return customers;
  }

  async findById(id: string) {
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    return findCustomer;
  }
}

export { ListCustomerServices };
