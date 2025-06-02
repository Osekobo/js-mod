document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // 15  Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. To find the Kenya NHIF Rate using THIS LINK:
  let basic_salary = Number(document.getElementById("basic").value);
  let benefits = Number(document.getElementById("benefits").value);
  let grossSalary = basic_salary + benefits;

  function calculate_gross(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700; // for salary above 100,000
  }
  let gross = calculate_gross(grossSalary);
  document.getElementById("gross").innerHTML = gross;

  // 16 Continue with the program above, then use  the gross salary to find the NSSF. To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF.
  let b = 0.66 * grossSalary;
  function NSSF() {
    if (grossSalary >= 18000) return 0.06 * grossSalary;
    else return "Gross salary is below the minimum required!";
  }
  let y = NSSF(b);
  document.getElementById("x").innerHTML = y;

  // 17 Continue with the same program and calculate an individual’s NHDF using: i.e NHDF = gross_salary *  0.015
  let NHDF = grossSalary * 0.015;
  document.getElementById("nhdf").innerHTML = NHDF;
  // 18 Calculate the taxable income. i.e taxable_income = gross salary - (NSSF + NHDF + NHIF)
  let tax = grossSalary - (NHDF + NHDF); // NO NHIF YET
  document.getElementById("taxable_income").innerHTML = tax;

  // 19 Continue with the same program and find the person's PAYEE using the taxable income above. Find the Kenya PAYEE Tax Rate using THIS LINK
  function PAYEE(tax) {
    if (tax > 0 && tax < 2400) return "10%";
    else if (tax > 2400 && tax < 32333) return "25%";
    else if (tax > 32333 && tax < 500000) return "30%";
    else if (tax > 500000 && tax < 800000) return "32.5%";
    else return "35%";
  }
  let r = PAYEE(tax);
  document.getElementById("payee").innerHTML = r;

  // 20 Continue with the same program and calculate an individual’s Net Salary using: net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
  let net = grossSalary - (NHDF); // payee and nhif
  document.getElementById("Net").innerHTML = net;
});
