 function append(char) {
        document.getElementById("display").value += char;
      }
      function clearDisplay() {
        document.getElementById("display").value = "";
      }
      function backSpace() {
        let currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue.slice(0, -1);
      }
      function equl(e) {
        let expression = document.getElementById("display").value;
        if (expression) {
          let result = eval(expression);
          document.getElementById("display").value = result;
        } else {
          document.getElementById("display").innerText =
            "Something Right Here!";
        }
      }
