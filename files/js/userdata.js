"use strict";

async function getUserData() {
  const req = await fetch("/__replauthuser");
  const data = await req.json();
  return data;
}
async function initializeData() {
  const data = await getUserData();
  Object.freeze(data);
  Object.defineProperties(window, {
    userData: {
      value: data,
      writable: false,
      configurable: false
    }
  })
}

//initializeData();