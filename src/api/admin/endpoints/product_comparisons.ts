import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductComparisonsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: ProductComparisonCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ProductComparisonCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/product_comparisons";

interface ProductComparisonCreateOrUpdateParams {
  name: string;
}
