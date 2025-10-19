import type { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerServices } from "../services/ListCustomerServices";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomerServices();

    const customers = await listCustomerService.execute();

    return customers;
  }
}

export { ListCustomerController };
