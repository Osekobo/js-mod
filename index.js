document.getElementById('my_form').addEventListener('submit',function(event){event.preventDefault()

  let bs = Number(document.getElementById("basic").value)
  let be = Number(document.getElementById("basic").value)

  function calculate_gross(basic, benefits){
    return basic + benefits
  }
  let gross = calculate_gross(bs,be)
  document.getElementById("gross").innerHTML = gross
})