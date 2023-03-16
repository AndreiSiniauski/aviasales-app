export default class AviaServices {
  baseURL = 'https://aviasales-test-api.kata.academy';

  async getResponce(url: string): Promise<any> {
    try {
      const result = await fetch(`${this.baseURL}/${url}`);
      if (!result.ok) {
        throw new Error(result.status.toString());
      }
      return await result.json();
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getKay(): Promise<any> {
    const res = await this.getResponce('search');
    return res;
  }

  async getTicket(id: number): Promise<any> {
    const res = await this.getResponce(`tickets?searchId=${id}`);
    return res;
  }
}
