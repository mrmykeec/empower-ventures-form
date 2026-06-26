/* ============================================================
   products.js  —  EDIT THIS FILE FOR EACH EVENT
   ------------------------------------------------------------
   This is the only file you change when products or flavors
   change. The form (index.html) reads everything from here and
   re-renders itself. You never have to touch the form logic.

   - eventName : shows nowhere customer-facing; just a label for you.
   - products  : the things you sell. hasFlavor:true means the form
                 asks for a flavor when that product is picked.
   - flavors   : the XS can flavor list (also used for "samples").

   To add a product:  add a line to products[].
   To change flavors: edit the flavors[] list.
   Then commit + push (GitHub Pages updates in ~1 minute).
   ============================================================ */

const EVENT_CONFIG = {
  eventName: "Empower Ventures — June 27 Pop-Up",

  products: [
    { id: "xs_can",     label: "Individual XS Energy Drink (can)", hasFlavor: true  },
    { id: "xs_tablet",  label: "XS Energy + Focus Tablets",        hasFlavor: false },
    { id: "ultra_pack", label: "Ultra Focus Energy Pack",          hasFlavor: false },
  ],

  flavors: [
    "Blue Razzberry",
    "Classic",
    "Cranberry Grap Caffeine-Free",
    "Mango Pineapple Guava",
    "Naraja",
    "Peach - Elite",
    "Rocket Blast",
    "Root Beer",
    "Watermelon Lemonade",
  ],

  // Sample-only / take-home items that aren't XS can flavors. These show up in the
  // sample list next to the flavors, but NOT in the purchase builder. Edit per event.
  sampleExtras: [
    "Ultra Focus Energy Pack",
    "Pre-Workout",
  ],
};
