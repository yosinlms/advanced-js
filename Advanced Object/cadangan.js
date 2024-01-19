class player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi my name is ${this.name} and im ${this.type}`);
  }
}

class wizard extends player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`hi im a ${this.type}`);
  }
}

const wizard1 = new wizard("sely", "healer");
const wizard2 = new wizard("shawn", "dark magic");

wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();


// kasus macbook
class macbook {
  constructor(nama, tahun) {
    this.nama = nama;
    this.tahun = tahun;
  }

  perkenalan() {
    console.log(
      `halo ini adalah macbook ${this.nama} yang dibuat pada ${this.tahun}`
    );
  }
}

const newMacbook = new macbook("pro", "2022");
newMacbook.perkenalan();
