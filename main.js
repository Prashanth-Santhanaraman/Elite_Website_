document.querySelector(".hamburger_icon").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.add("active");
  });

  document.querySelector(".closebutton").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.remove("active");
  });  