function handleBuy(productName) {
  alert(`View more details for ${productName}`);
}

function handleSubscribe() {
  const email = document.querySelector('input[type="email"]').value;
  if (email) {
    alert(`Thanks for subscribing, ${email}!`);
  } else {
    alert('Please enter valid Email!');
  }
}
