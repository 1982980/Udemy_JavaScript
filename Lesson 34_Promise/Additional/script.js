const family = [
  {
    member: "mother",
    id: 111,
    coffee: "Latte",
  },
  {
    member: "father",
    id: 222,
    coffee: "Espresso",
  },
  {
    member: "son",
    id: 111,
    coffee: "Cappucino",
  },
];

const getCoffee = (member) => {
  const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
  return coffeePromise
    .then(data => data.json())
    .then(list => {
      const coffee = list.find(res=> res.title === member.coffee)
      console.log(coffee);
    })
}

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((res) => res.id === id);
      // console.log(member);
      if (member) {
        resolve(member);
      } else {
        reject(Error("Don't find member"));
      }
    }, 2000);
  });
};

getFamilyMember(111).then((data) => {
  console.log(data);
  getCoffee(data);
});
