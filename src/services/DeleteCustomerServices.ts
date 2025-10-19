import { STATUS_CODES } from "http";
import prismaClient from "../prisma";

class DeleteCustomerServices {
  async execute(id: string) {
    if (!id) throw Error("Envie um Id");

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) throw Error("CLiente nao existe!");

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { STATUS_CODES: 200, message: "Deletado com sucesso" };
  }
}

export { DeleteCustomerServices };
