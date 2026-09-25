const cargoManifest = {
  containerId: 2,
  destination: "Accra, Ghana",
  weight: 20,
  unit: "kg",
  hazmat:false
}

function normalizeUnits(manifest) {
  const cloneManifest = { ...manifest };

  if (cloneManifest.unit === "lb") {
    cloneManifest.weight *= 0.45;
    cloneManifest.unit = "kg";
  }

  return cloneManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
  errors.weight = "Missing";
} else if (
  typeof manifest.weight !== "number" ||
  Number.isNaN(manifest.weight) ||
  manifest.weight <= 0
) {
  errors.weight = "Invalid";
}

  // unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}