export class Hotel {
  constructor(
    public name: string,
    public summary: string,
    public location: string,
    public address: string,
    public distFromCity: number,
    public distFromEntebbe: number,
    public rating: number,
    public price: number,
    public imagePath: string,
    public amenities: string[],
    public isAvailable: boolean
  ) {}
}
