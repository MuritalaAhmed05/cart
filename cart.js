let s = 1;
let g = 1;
let x = 1;
let s7 = 1;

let product1 = { count: 1, price: 399.99 };
let product2 = { count: 1, price: 499.99 };
let product3 = { count: 1, price: 699.99 };
let product4 = { count: 1, price: 599.99 };

const inc = (productId) => {
  switch (productId) {
    case "product1":
      s++;
      document.getElementById("num_1").innerHTML = s;
      break;
    case "product2":
      g++;
      document.getElementById("num_2").innerHTML = g;
      break;
    case "product3":
      x++;
      document.getElementById("num_3").innerHTML = x;
      break;
    case "product4":
      s7++;
      document.getElementById("num_4").innerHTML = s7;
      break;
  }

  update();
  updateTotal();
};

const dnc = (productId) => {
  switch (productId) {
    case "product1":
      s--;
      document.getElementById("num_1").innerHTML = s;
      break;
    case "product2":
      g--;
      document.getElementById("num_2").innerHTML = g;
      break;
    case "product3":
      x--;
      document.getElementById("num_3").innerHTML = x;
      break;
    case "product4":
      s7--;
      document.getElementById("num_4").innerHTML = s7;
      break;
  }

  if (s === 0) {
    document.getElementById("sam").style.display = "none";
  }
  if (g === 0) {
    document.getElementById("google").style.display = "none";
  }
  if (x === 0) {
    document.getElementById("xiaomi").style.display = "none";
  }
  if (s7 === 0) {
    document.getElementById("sam7").style.display = "none";
  }

  update();
  updateTotal();
};

const removeItem = (productId) => {
  const productElement = document.getElementById(productId);
  if (productElement) {
    productElement.style.display = "none";

    switch (productId) {
      case "sam":
        s = 0;
        break;
      case "google":
        g = 0;
        break;
      case "xiaomi":
        x = 0;
        break;
      case "sam7":
        s7 = 0;
        break;
    }

    update();
    updateTotal();
  }
};

const update = () => {
  total = s + g + x + s7;
  document.querySelector(".total").textContent = total;

  const main1Div = document.querySelector(".main_1");
  const emptyMessage = document.querySelector(".empty");

  if (total === 0) {
    main1Div.style.display = "none";
    emptyMessage.style.display = "block";
  } else {
    main1Div.style.display = "block";
    emptyMessage.style.display = "none";
  }
};

const updateTotal = () => {
  const sum_of_all =
    s * product1.price +
    g * product2.price +
    x * product3.price +
    s7 * product4.price;

  const approximate = "$" + sum_of_all.toFixed(2);
  document.getElementById("last_total").innerHTML = approximate;
};

const clearCart = () => {
  document.querySelectorAll(".main_1 > div").forEach((product) => {
    product.style.display = "none";
  });
   s = 0;
   x = 0;
  s7 = 0;
  g = 0;
  update();
  updateTotal();
  document.querySelector(".empty").style.display = "block";
};

document.querySelector(".clear").addEventListener("click", clearCart);
