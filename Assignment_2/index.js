function store() {
  var users = [];
  var name = document.getElementById("name").value;
  var pw = document.getElementById("pw").value;

  const user = { name: name, password: pw };

  users.push(JSON.stringify(user));

  localStorage.setItem("User", users);
  alert("Your account has been created");
}
