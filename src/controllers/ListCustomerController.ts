import type { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerServices } from "../services/ListCustomerServices";

class ListCustomerController {
  private listCustomerService: ListCustomerServices;

  constructor() {
    this.listCustomerService = new ListCustomerServices();
  }
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customers = await this.listCustomerService.execute();

    return reply.status(200).send(customers);
  }

  async handleId(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const customer = await this.listCustomerService.findById(id);

    if (!customer) {
      return reply.status(404).send({ error: "Cliente não encontrado" });
    }

    return reply.status(200).send(customer);
  }
}

export { ListCustomerController };
