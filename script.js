document.body.innerHTML=`
<form id="loginForm">
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>

<label for="email">Email:</label>
<input type="email" id="email" name="email" required>

<label for="age">Age:</label>
<input type="text" id="age" name="age" required>

 <div id="div">
  <div id="divButton">
    <button type="button"  class="button1" onclick="addRow()">Add data</button>
  </div>
  <div id="divAlert" class="alert">
  <img src="x.webp" alt="" width="15px" style="margin-left: 160px;" onclick="ExitAlert()">
  <p style="padding-bottom: 40px;" class="text">Insert successfully!</p>
</div>
  </div>


<table id="dynamicTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
     
    </tbody>
</table>
</form>`;
let divAlert = document.getElementById('divAlert');
let table = document.getElementById('dynamicTable');
function addRow() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    if (name.trim() === '' || age.trim() === '' || email.trim() === '') {
        alert('Please enter both name, age and email .');
        return;
    }
    var tableBody = document.querySelector('#dynamicTable tbody');
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = age;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';

    divAlert.style.opacity = 1;
    table.style.opacity = 1;
}
function ExitAlert() {
    divAlert.style.opacity = 0;
}