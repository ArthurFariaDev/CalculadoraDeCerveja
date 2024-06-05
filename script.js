function calculateBestDeal() {
    const sizes = [210, 269, 300, 330, 350, 473, 550, 600, 1000];
    const prices = sizes.map(size => parseFloat(document.getElementById(`price${size}`).value) || Infinity);
    const customSize = parseFloat(document.getElementById('customSize').value);
    const customPrice = parseFloat(document.getElementById('customPrice').value);

    if (customSize && customPrice) {
        sizes.push(customSize);
        prices.push(customPrice);
    }

    let bestDeal = { size: 0, price: Infinity, pricePerMl: Infinity };
    for (let i = 0; i < sizes.length; i++) {
        const pricePerMl = prices[i] / sizes[i];
        if (pricePerMl < bestDeal.pricePerMl) {
            bestDeal = { size: sizes[i], price: prices[i], pricePerMl: pricePerMl };
        }
    }

    document.getElementById('result').textContent = `A melhor opção é a cerveja de ${bestDeal.size}ml que custa R$${bestDeal.price.toFixed(2)}, com um preço por ml de R$${bestDeal.pricePerMl.toFixed(4)}.`;
}
