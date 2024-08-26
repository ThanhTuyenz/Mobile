const bills = [275, 40, 430];

function calculateTip(bill) {
    // Tính tiền tip sử dụng toán tử ternary
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)
}
bills.forEach(bill => calculateTip(bill));

