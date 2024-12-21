// Визначення змінної з ім'ям message1 
// та значенням Hello без явної вказівки типу
let message1 = "Hello!";

// Визначення змінної з ім'ям message2 
// типу string та присвоєння змінної значення Hello!
let message2: string
message2 = "hello"

// Теж що і let але створене значення не можна змінити.
const message3: string = "Hello!";
// message3 = "world"; 
// Cannot assign to 'message3' because it is a constant.ts(2588)
///===========================================================================

// #region Home task

enum IceCup {
  little = 10,
  big = 25
}


enum Suplement {
  chocolate = 5,
  caramel = 6,
  berry = 10
}

function calCostOfIce (cup : IceCup, add: Suplement, marshmelo? : number) : number {

  let cost: number

  if (marshmelo) {
    cost = cup + add + 5
  }
  else{
    cost = cup + add
  }
    return cost
}

calCostOfIce(IceCup.little, Suplement.caramel)



// #endregion
