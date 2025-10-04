var Cpu = /** @class */ (function () {
    function Cpu(cores, freq) {
        this.cores = cores;
        this.freq = freq;
    }
    Cpu.prototype.showDesc = function () {
        return "CPU: " + this.cores + "-" + this.freq;
    };
    return Cpu;
}());
export { Cpu };
