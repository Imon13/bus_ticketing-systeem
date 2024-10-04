document.getElementById('buy-btn').addEventListener('click', function () {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

let count = 0;
const allBtn = document.getElementsByClassName('allbtn');
let newTotalprice = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count++;
        console.log(count);

        const seatLeftElement = document.getElementById('seat-left');
        const seatLeft = parseInt(seatLeftElement.innerText);

        if (seatLeft > 0) {
            const newleftSeat = seatLeft - 1;
            seatLeftElement.innerText = newleftSeat;

            const selectedSeatString = document.getElementById('selected-seat').innerText;
            const selectedSeat = parseFloat(selectedSeatString);
            const newSelectedSeat = selectedSeat + 1;
            document.getElementById('selected-seat').innerText = newSelectedSeat;


            newTotalprice = newSelectedSeat * 550;
            document.getElementById('total-price').innerText = newTotalprice;
        } else {
            alert("No seats left!");
        }
    });
}

document.getElementById('apply').addEventListener('click', function () {
    const input = document.getElementById('input').value;
    let grandTotal = newTotalprice; // Start with the current total price

    if (input === 'NEW15') {
        const discount = (15 / 100) * grandTotal;
        grandTotal -= discount;

    } else if (input === 'COUPLE20') {
        const discount = (20 / 100) * grandTotal;
        grandTotal -= discount;

    }

    document.getElementById('grand-total').innerText = grandTotal;
});
