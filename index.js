document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let basic_salary = Number(document.getElementById("basic").value);
  let benefits = Number(document.getElementById("benefits").value);

  function calculate_gross(basic, benefits) {
    return basic + benefits;
  }
  let gross = calculate_gross(basic_salary, benefits);
  document.getElementById("gross").innerHTML = gross;
});
