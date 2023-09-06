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
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div> 
          <img src="${this.product.imageUrl}" alt = "${this.product.title}">
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>Rp.${this.product.price}</h3>
              <p>${this.product.descripsition}</p>
              <button>Tambah ke Keranjang</button>
          </div>
      </div>
    `;
    return prodEl;
  }
}



class ProductList {
    products = [
        new Product('bantal', 'https://contents.mediadecathlon.com/p1749048/k$f0b275c3207e208e12771a5c385d3ff8/camping-pillow-comfort.jpg?format=auto&quality=70&f=768x768', 'Bantal Ini Lembut', 10000),
        new Product('Karpet', 'https://cdn2.tstatic.net/travel/foto/bank/images/ilustrasi-karpet-terbang-aladdin.jpg', 'Karpet Terbang', 80000)
    ]

    constructor(){

    }

    render(){
        const renderHook = document.getElementById('app');
        const prodlist = document.createElement('ul')
        prodlist.className = 'product-list'
        for (const prod of this.products) {
            const productItem = new ProducItem(prod)
            const prodEl = productItem.render()
            prodlist.append(prodEl)
        }

        renderHook.append(prodlist)
    }
}





const productList = new ProductList();
productList.render()