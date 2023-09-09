const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
celsiusInput.addEventListener('input', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitInput.value = fahrenheit;
});
fahrenheitInput.addEventListener('input', () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5 / 9 ;
  celsiusInput.value = celsius;
});




