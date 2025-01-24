// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "김명원",
  nickname: "하파하채",
  birth: "2002.04.15",
  bio: "하이루",
  location: "할렘시",
};

let user2: User = {
  id: 1,
  name: "김명원",
  nickname: "하파하채",
  birth: "2002.04.15",
  bio: "하이루",
  location: "할렘시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
