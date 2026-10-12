const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}
function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  const clone = loadLedger(serializeLedger(ledger));

  // Check whether the asset tag exists
  if (!(assetTag in clone)) {
    return {
      ledger,
      message: `${assetTag} was not found`,
    };
  }

  const device = clone[assetTag];

  // Check whether the device is already checked out
  if (device.status === "CheckedOut") {
    return {
      ledger,
      message: `${assetTag} is already checked out`,
    };
  }

  // Update the cloned device
  device.borrower.name = borrower.name;
  device.borrower.email = borrower.email;
  device.status = "CheckedOut";

  return {
    ledger: clone,
    message: `${assetTag} was checked out to ${borrower.name}`,
  };
}

function checkinDevice(ledger, assetTag) {
  const clone = loadLedger(serializeLedger(ledger));

  if (!(assetTag in clone)) {
    return {
      ledger,
      message: `${assetTag} was not found`,
    };
  }

  const device = clone[assetTag];

  device.borrower.name = "";
  device.borrower.email = "";
  device.dueDate = "";
  device.status = "CheckedIn";

  return {
    ledger: clone,
    message: `${assetTag} was checked in`,
  };
}

function listOverdueDevices(ledger, today) {
  function convertDate(date) {
    const [month, day, year] = date.split("/");
    return year + month.padStart(2, "0") + day.padStart(2, "0");
  }

  return Object.values(ledger)
    .filter(
      (device) =>
        device.status === "CheckedOut" &&
        convertDate(device.dueDate) < convertDate(today),
    )
    .sort((a, b) =>
      convertDate(a.dueDate).localeCompare(convertDate(b.dueDate)),
    );
}
