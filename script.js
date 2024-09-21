document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    let amount = parseFloat(document.getElementById('amount').value);
    let discount = parseFloat(document.getElementById('discount').value);
    
    let discountAmount = (amount * discount) / 100;
    let finalAmount = amount - discountAmount;

    let resultHtml = `

        <h1>Result</h1>
        <p>Original Amount:₹${amount.toFixed(2)}</p>
        <p>Discount: ₹${discountAmount.toFixed(2)}</p>
        <p>Amount to Pay: ₹${finalAmount.toFixed(2)}</p>
        <a href="final.html"><button>Calculate again</button></a>
    `;
    
    document.body.innerHTML = resultHtml;
});