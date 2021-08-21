//Calculate Memory Cost
document.getElementById('zero-amount').addEventListener('click', function () {
    let zeroAmount = document.getElementById('memory-cost');
    zeroAmount.innerText = parseFloat("0");
});

document.getElementById('price-amount').addEventListener('click', function () {
    let zeroAmount = document.getElementById('memory-cost');
    zeroAmount.innerText = parseFloat("180");
});

//Calculate Storage Cost
document.getElementById('storage-offer').addEventListener('click', function () {
    let zeroAmount = document.getElementById('storage-cost');
    zeroAmount.innerText = parseFloat("0");
});
document.getElementById('gb-storage').addEventListener('click', function () {
    let zeroAmount = document.getElementById('storage-cost');
    zeroAmount.innerText = parseFloat("100");
});
document.getElementById('tb-storage').addEventListener('click', function () {
    let zeroAmount = document.getElementById('storage-cost');
    zeroAmount.innerText = parseFloat("180");
});

//Calculate Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function () {
    let zeroAmount = document.getElementById('delivery-cost');
    zeroAmount.innerText = parseFloat("0");

});
document.getElementById('paid-delivery').addEventListener('click', function () {
    let zeroAmount = document.getElementById('delivery-cost');
    zeroAmount.innerText = parseFloat("20");

});