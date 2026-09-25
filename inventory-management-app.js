const inventory = [];

function findProductIndex (pName) {
  let searchKey = pName.toLowerCase();
  
  for (let i = 0; i < inventory.length; i++) {
    
      if (inventory[i].name.toLowerCase() === searchKey) {
        return i;
      }
    
  }
  return -1;
}

function addProduct(prObj) {
  let index = findProductIndex(prObj.name);

  if (index !== -1) {
    inventory[index].quantity += prObj.quantity;
    console.log(`${prObj.name.toLowerCase()} quantity updated`);
  } else {
    prObj.name = prObj.name.toLowerCase();
    inventory.push(prObj);
    console.log(`${prObj.name} added to inventory`);
  }
}

function removeProduct (pName, pQuantity) {
  let index = findProductIndex(pName);

  if (index === -1) {
    console.log(`${pName.toLowerCase()} not found`);
    return;
  }

  if (inventory[index].quantity < pQuantity) {
    console.log(`Not enough ${pName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  }

  inventory[index].quantity -= pQuantity;

  console.log(`Remaining ${pName.toLowerCase()} pieces: ${inventory[index].quantity}`);

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
  
}
