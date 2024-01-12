{
  function hasSusha() {

    if (window?.__Susha__) {
      return true;
    }

    else return false;
  }
}

// ---

(async () => {

  if (!hasSusha()) return;

  // ---

  await import('./meta.js')
  let j = await (await fetch('susha.radix.json')).json()

  const radMeta = window.sushaRadix = new Radix_META(j.location || './');

  // ---

  

})();
