const socket = io();

const dataSend = 'Hola desde el cliente';
socket.emit('postData, dataSend');

socket.on('products', data => {
    const cartProducto = document.getElementById('Productos')

    cartProducto.innerHTML = '';
    data.array.forEach(produc => {
        let card = document.createElement('td');
        card.className = "producto-1 card-product"
        card.innerHTML = `
        <div class="fond.card1">
        <img class="img-p src="">
        <button></button>`

        cartProducto.appendChild(card)
    });
})