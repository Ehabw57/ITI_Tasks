interface PhotoshopDesign {
  pixel: string;
  makePixelDesign(): void;
}
interface UillstlatorDesign {
  makeVectorDesign(): void;
}


class Pixel implements PhotoshopDesign{
  pixel: string;
    makePixelDesign() {
        console.log("Designing Pixel");
    }
}
class Vector implements UillstlatorDesign{
    makeVectorDesign() {
        console.log("Designing Vector");
    }
}
console.log('hello')

