import type { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerServices } from "../services/DeleteCustomerServices";

class DeleteCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const deleteCustomerServices = new DeleteCustomerServices();

    const customer = await deleteCustomerServices.execute(request.id);

    reply.send(customer);
  }
}

export { DeleteCustomerController };
