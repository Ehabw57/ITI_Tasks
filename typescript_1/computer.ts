export class Cpu {
  constructor(
    public cores: number,
    public freq: string,
  ) {}
  showDesc() {
    return "CPU: " + this.cores + "-" + this.freq;
  }
}
