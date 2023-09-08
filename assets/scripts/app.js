class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl
    this.price = price

  }

}

class ProducItem {
  constructor(product) {
    this.product = product;
  }

  addTocart() {
    App.addProductTocart(this.product)
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div> 
          <img src="${this.product.imageUrl}" alt = "${this.product.title}">
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>Rp.${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Tambah ke Keranjang</button>
          </div>
      </div>
    `;

    const addToCartButton = prodEl.querySelector('button');
    addToCartButton.addEventListener('click', this.addTocart.bind(this))
    return prodEl;
  }
}

class ShoppingCart {
  items = []

  set cartIems(value){
    this.items = value
    this.totalouput.innerHTML = `<h2>Total: ${this.totalAmount}<h2>`
  }

  get totalAmount(){
    const sum = this.items.reduce((prevValue, curItem)=>{
      return prevValue + curItem.price
    },0)
    return sum
  }

  addProduct(product) {
    const update = [...this.items]
    update.push(product)
    this.cartIems = update
  }

  render() {
    const cartElement = document.createElement('section')
    cartElement.innerHTML = `
    <h2>Total: Rp.${0}<h2>
    <button>Pesan sekarang</button>
    `;
    cartElement.className = 'cart';
    this.totalouput = cartElement.querySelector('h2')
    return cartElement
  }
}


class ProductList {
  products = [
    new Product('bantal', 'https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/camping-pillow-comfort.jpg?format=auto&quality=70&f=768x768', 'Bantal Ini Lembut', 10000),
    new Product('Karpet', 'https://cdn2.tstatic.net/travel/foto/bank/images/ilustrasi-karpet-terbang-aladdin.jpg', 'Karpet Terbang', 80000)
  ]

  constructor() {

  }

  render() {

    const prodlist = document.createElement('ul')
    prodlist.className = 'product-list'
    for (const prod of this.products) {
      const productItem = new ProducItem(prod)
      const prodEl = productItem.render()
      prodlist.append(prodEl)
    }

    return prodlist
  }
}



class Fsw2Shop {
  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart()
    const cartEl = this.cart.render()

    const productList = new ProductList();
    const prodlist = productList.render()

    renderHook.append(cartEl)
    renderHook.append(prodlist)
  }
}

class App {
  static init() {
    const shop = new Fsw2Shop()
    shop.render()
    this.cart = shop.cart

  }

  static addProductTocart(product){
    this.cart.addProduct(product)
  }
}

App.init()
