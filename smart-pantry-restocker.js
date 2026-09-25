const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  function parseString(rawStr){
    const parts = rawStr.split("|");
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
      trimmedParts.push(parts[i].trim());
    }
    const sku = trimmedParts[0];
    const name = trimmedParts[1];
    const qty = trimmedParts[2];
    const expires = trimmedParts[3];
    const zone = trimmedParts[4];

    return {
      sku: sku,
      name: name,
      qty: parseInt(qty),
      expires: expires,
      zone: zone || "general"
    }
  }
    
  const shipment = [];

  for (let i = 0; i < rawData.length; i++) {
    const item = parseString(rawData[i]);

    let duplicate = false;

    for (let j = 0; j < shipment.length; j++) {
      if (shipment[j].sku === item.sku) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      shipment.push(item);
    }
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const check = [];
  
    for (let j = 0; j < shipment.length; j++) {
      
      if (shipment[j].qty <= 0) {
      check.push({
        type: "discard",
        item: shipment[j]
      });
    } else {
      
        if (pantry.find(item => item.sku === shipment[j].sku)) {
        check.push({
          type: "restock",
          item: shipment[j]
        });  
      } else {
        check.push({
          type: "donate",
          item: shipment[j]
        });
        }
      }
    }
    
  
  return check;
}

function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].item.zone === "fridge") {
      if (!grouped["fridge"]) {
        grouped["fridge"] = [];
      }
      grouped["fridge"].push(actions[i]);
      continue;
    }

    if (actions[i].item.zone === "pantry") {
      if (!grouped["pantry"]) {
        grouped["pantry"] = [];
      }
      grouped["pantry"].push(actions[i]);
    }

    if (actions[i].item.zone === "general") {
      if (!grouped["general"]) {
        grouped["general"] = [];
      }
      grouped["general"].push(actions[i]);
    }
  }
  return grouped;
}

function clonePantry(pantry) {
  const copyPantry = structuredClone(pantry);
  return copyPantry;
}

let shipment = parseShipment(rawData);

let reStock = planRestock(pantry, shipment);

let group = groupByZone(reStock);

console.log(group);