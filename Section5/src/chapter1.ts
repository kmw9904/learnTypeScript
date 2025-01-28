// 인터페이스 확장

interface Animal {
  name: string;
  color: string
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {

}

interface Chicken extends Animal {
  isFly: boolean;
}
