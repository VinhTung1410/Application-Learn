document.addEventListener('DOMContentLoaded', () => {
    const e1k = document.getElementById("1k");
    const e2k = document.getElementById("2k");
    const e5k = document.getElementById("5k");
    const e10k = document.getElementById("10k");
    const e20k = document.getElementById("20k");
    const e50k = document.getElementById("50k");
    const e100k = document.getElementById("100k");
    const e200k = document.getElementById("200k");
    const e500k = document.getElementById("500k");

    const txt1k = document.getElementById("txt1k");
    const txt2k = document.getElementById("txt2k");
    const txt5k = document.getElementById("txt5k");
    const txt10k = document.getElementById("txt10k");
    const txt20k = document.getElementById("txt20k");
    const txt50k = document.getElementById("txt50k");
    const txt100k = document.getElementById("txt100k");
    const txt200k = document.getElementById("txt200k");
    const txt500k = document.getElementById("txt500k");
    
    const txtFinalCash = document.getElementById("txtFinalCash");
    const txtFinalCashInWords = document.getElementById("txtFinalCashInWords");
    const btnReset = document.getElementById("btnReset");

    const cashInputs = [e1k,e2k,e5k,e10k,e20k,e50k,e100k,e200k,e500k];
    const cashTexts = [txt1k,txt2k,txt5k,txt10k,txt20k,txt50k,txt100k,txt200k,txt500k];
  
    cashInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        cashCalculate(index);
      });
    });
  
    btnReset.addEventListener('click', clearData);
  
    function cashCalculate(index) {
      const denominations = [1000,2000,5000,10000,20000,50000,100000,200000,500000];
      const rowValue = cashInputs[index].value * denominations[index];
      cashTexts[index].textContent = rowValue.toFixed(0);
      // Perform calculations for other denominations
      // Update respective result elements
  

      totalCash();
    }
  
    function totalCash() {
      let totalCashValue = 0;
      cashTexts.forEach((text) => {
        totalCashValue += parseInt(text.textContent);
      });
      txtFinalCash.textContent = 'Total Cash: ' + totalCashValue + ' VND';

      txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;
    }
  
    function clearData() {
      cashInputs.forEach((input) => {
        input.value = '';
      });
      cashTexts.forEach((text) => {
        text.textContent = '0';
      });
      totalCash();
    }
  
   function convertToWords(number) {
      const units = ['', 'Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín'];
  
      if (number === 0) {
        return 'Zero';
      }
  
      let words = '';

      if (Math.floor(number / 100000000000) > 0) {
        words += convertToWords(Math.floor(number / 100000000000)) + ' Trăm Tỷ ';
        number %= 100000000000;
      }

      if (Math.floor(number / 1000000000) > 0) {
        words += convertToWords(Math.floor(number / 1000000000)) + ' Tỷ ';
        number %= 1000000000;
      }

      if (Math.floor(number / 100000000) > 0) {
        words += convertToWords(Math.floor(number / 100000000)) + ' Trăm Triệu ';
        number %= 100000000;
      }
  
      if (Math.floor(number / 1000000) > 0) {
        words += convertToWords(Math.floor(number / 1000000)) + ' Triệu ';
        number %= 1000000;
      }
  
      if (Math.floor(number / 100000) > 0) {
        words += convertToWords(Math.floor(number / 100000)) + ' Trăm Ngàn ';
        number %= 100000;
      }
  
      if (Math.floor(number / 1000) > 0) {
        words += convertToWords(Math.floor(number / 1000)) + ' Ngàn ';
        number %= 1000;
      }
  
      if (Math.floor(number / 100) > 0) {
        words += convertToWords(Math.floor(number / 100)) + ' Trăm ';
        number %= 100;
        
      }
  
      if (number > 0) {

          if (number < 10) {

              words += units[number]; // units[4]

              console.log(number);
          }

          else {
              words += units[Math.floor(number / 10)] + " Mươi ";  //  40 / 10 = 4

              if (number % 10 > 0) {
                words += ' ' + units[number % 10]; // units[5]
              }
          }

      }
       
  
      return words.trim();
    }
 




    cashInputs.forEach(input => {
        input.addEventListener('input', () => {
          const value = parseInt(input.value, 10);
          if (isNaN(value) || value < 0) {
            input.value = '';
          }
        });
      });
    

      // cashTexts.forEach(text => {
      //   text.addEventListener('input', () => {
      //     const value = parseInt(text.textContent, 10);
      //     if (isNaN(value) || value < 0) {
      //       text.textContent = '0';
      //     }
      //   });
      // });


  });
  