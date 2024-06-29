export default class CartManager {
    #filename;
    #fileSystem;
    #carts;

    constructor () {
        this.#filename = "cart.json";
        this.#fileSystem = new FileSystem(this.#filename);
        this.#carts = this.readAll();
    }

    persist = async  (newCarts) => {
        this.#carts.push(cart);

        await this.#fileSystem.write(this.#carts);
    };

  readAll = async () => {
        this.#carts = await this.#fileSystem.read() ?? [];
        return this.#carts;
    };
}

