export default function BuildRegisterRequestPayload(data) {
  // store the register data for testing purposes
  console.log(data);
  let payload = {
    name: {
      first: data.first, // required
      middle: data.middle, // not required
      last: data.last, // required
    },
    phone: data.phone || "044999999", // required
    email: data.email, // required
    password: data.password, // required

    image: {
      // not required
      url: data.url,
      alt: data.alt,
    },
    address: {
      state: data.state || "notBusness", // Set to 'notBusness' if data.state is empty
      country: data.country || "notBusness", // Set to 'notBusness' if data.country is empty
      city: data.city || "notBusness", // Set to 'notBusness' if data.city is empty
      street: data.street || "notBusness", // Set to 'notBusness' if data.street is empty
      houseNumber: data.houseNumber || 0, // Set to '0' if data.houseNumber is empty
      zip: data.zip || 0, // Set to '0' if data.zip is empty
    },
  };

  // Add isBusiness property only if it exists in data
  if (data.hasOwnProperty("isBusiness")) {
    payload.isBusiness = data.isBusiness || false;
  }
  console.log(payload);

  return payload;
}
