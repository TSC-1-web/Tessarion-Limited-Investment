function calculateROI() {
  const investment = Number(document.getElementById('investment').value);
  let resultText = '';

  if (!investment || investment < 500) {
    resultText = 'Minimum investment is $500.';
  } else {
    let roi = 0;
    if (investment < 2000) {
      roi = investment * 0.05;
    } else if (investment < 10000) {
      roi = investment * 0.07;
    } else {
      roi = investment * 0.10;
    }
    resultText = `Expected Weekly ROI: $${roi.toFixed(2)}`;
  }

  document.getElementById('result').innerText = resultText;
}
