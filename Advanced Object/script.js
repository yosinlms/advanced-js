//refrence type
// const nilai1 = { key: "mantap" };
// const nilai2 = nilai1;
// nilai1.key = "sip";
// console.log(nilai2);

const nilai1 = { key: "halo" };
const nilai2 = nilai1;
nilai1.key = "new value";
console.log(nilai2);

// object vs scope
const obj4 = {
  a: function () {
    console.log(this);
  },
};
obj4.a();

//instantiation
// class mobil {
//   constructor(nama, tipe) {
//     console.log(this);
//     this.nama = nama;
//     this.tipe = tipe;
//   }
//   introduce() {
//     console.log(
//       `halo ini adalah mobil bernama ${this.nama} dan memiliki tipe ${this.tipe}`
//     );
//   }
// }

// class toyota extends mobil {
//   constructor(nama, tipe) {
//     super(nama, tipe);
//   }
//   play() {
//     console.log(`halo saya adalah ${this.tipe}`);
//   }
// }

// const toyota1 = new toyota("alphard", "mahal");
// const toyota2 = new toyota("avanza", "murah");

// toyota1.introduce();
// toyota2.introduce();

class league {
  constructor(club, city) {
    console.log(this);
    this.club = club;
    this.city = city;
  }
  introduce() {
    console.log(`hello im ${this.club} from ${this.city}`);
  }
}

class team extends league {
  constructor(club, city) {
    super(club, city);
  }
  play() {
    console.log(`hii im play for ${this.city}`);
  }
}

const team1 = new team("manchester united", "manchester");
const team2 = new team("liverpool", "mersyside");

// team1.introduce();
// team2.introduce();
