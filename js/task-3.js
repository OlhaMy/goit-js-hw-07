const inputNameRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', () => {
    const valueName = inputNameRef.value.trim();
    nameOutputRef.textContent = valueName ? valueName : 'Anonymous';
})