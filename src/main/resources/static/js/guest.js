// define a global variable
var guest_id;
var guestDataTable;
$(document).ready(function() {
  guestDataTable = $('#guestContainer').DataTable({
    ajax: {
      url: 'api/guests',
      dataSrc: ''
    },
    columns: [
      { data: 'id' },
      { data: 'firstName' },
      { data: 'lastName' },
      { data: 'telNumber' },
      {
        data: null,
        render: function(data, type, row) {
          return '<td><a href="#"><button class="btn btn-danger" guestid="' + data.id + '">Delete</button></a></td>';
        }
      },
      {
        data: null,
        render: function(data, type, row) {
          return '<td><a href="#"> <button class="btn btn-info" guestid="' + data.id + '">Update</button></a></td>';
        }
      }
    ]
  });

  getGuests();

  $('#addGuest').click(function() {
    var firstname = $('#guestFirstName').val();
    var lastName = $('#guestLastName').val();
    var telephone = $('#telephone').val();
    if (firstname === '' || lastName === '' || telephone === '') {
      showAlert('Please fill in the data.', 'error');
    } else {
      addGuest();
    }
  });

  // add event when you click on delete icon
  $('#guestContainer').on('click', '.btn.btn-danger', function() {
    guest_id = $(this).attr('guestid');
    console.log(guest_id);
    $('#confirm').show();
  });

  // add event when you click on edit icon
  $('#guestContainer').on('click', '.btn.btn-info', function() {
    guest_id = $(this).attr('guestid');
    console.log(guest_id);
    var firstName = event.target.parentNode.parentElement.parentNode.children[1].innerHTML;
    var lastName = event.target.parentNode.parentElement.parentNode.children[2].innerHTML;
    var telephone = event.target.parentNode.parentElement.parentNode.children[3].innerHTML;
    $('#editFirstName').val(firstName);
    $('#editLastName').val(lastName);
    $('#edittelephone').val(telephone);
    $('#updateModal').show();
  });

  $('#closeOK').click(function() {
    $('#error').hide();
  });

  $('#updateClose').click(function() {
    $('#updateModal').hide();
  });

  $('#closeSmallbtn').click(function() {
    $('#updateModal').hide();
  });

  $('#yesBtn').click(function() {
    deleteGuest();
    $('#confirm').hide();
  });

  $('#save').click(function() {
    updateGuest();
    $('#updateModal').hide();
  });

  $('#closeError').click(function() {
    $('#error').hide();
  });

  $('#closeConfirm').click(function() {
    $('#confirm').hide();
  });
  $('.closeBtn').click(function() {
    $('#confirm').hide();
  });
});

// Adding guest function

function addGuest() {
  var guest = {
    firstName: $('#guestFirstName').val(),
    lastName: $('#guestLastName').val(),
    telNumber: $('#telephone').val()
  };

  var jsonObject = JSON.stringify(guest);

  $.ajax({
    url: 'api/guests',
    type: 'POST',
    contentType: 'application/json',
    data: jsonObject,
    success: function() {
      showAlert('A Guest has been added', 'success');
      // call a function to clear fields
      clearFields();
      getGuests();
    },
    error: function() {
      showAlert('Invalid input!', 'Error');
    }
  });
}

// get all guests from database function
function getGuests() {
  guestDataTable.ajax.reload();
}

// update guest data function
function updateGuest() {
  var guest = {
    id: guest_id,
    firstName: $('#editFirstName').val(),
    lastName: $('#editLastName').val(),
    telNumber: $('#edittelephone').val()
  };

  var jsonObject = JSON.stringify(guest);

  $.ajax({
    url: 'api/guests/' + guest_id,
    type: 'PUT',
    data: jsonObject,
    contentType: 'application/json',
    success: function() {
      showAlert('A record has been updated', 'success');
      clearFields();
      getGuests();
    },
    error: function() {
      showAlert('Sorry, something went wrong!', 'error');
    }
  });
}
// clear field function
function clearFields() {
  // form fields
  $('#guestFirstName').val('');
  $('#guestLastName').val('');
  $('#telephone').val('');

  // modal fields
  $('#editFirstName').val('');
  $('#editLastName').val('');
  $('#edittelephone').val('');
}

// delete guest function
function deleteGuest() {
  $.ajax({
    url: 'api/guests/' + guest_id,
    type: 'DELETE',
    success: function() {
      showAlert('A guest is deleted!', 'Success');
      getGuests();
    },
    error: function() {
      showAlert('Sorry, Something wrong went on!', 'error');
    }
  });
}

// show alert function

function showAlert(msg, myclass) {
  if (myclass === 'error') {
    $('.modal-title').html('');
    $('.modal-title').html('Error');
    $('#error').show();
    $('#message').text('');
    $('#message').append(msg);
  } else {
    $('.modal-title').html('');
    $('.modal-title').html('Success');
    $('#message').text('');
    $('#message').append(msg);
    $('#error').show();
  }
}

function myAlert(msg, className) {
  if (className === 'error') {
    $('.modal-title').html('');
    $('.modal-title').html('Error');
    $('.modal-header').css('background-color', 'red');
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    $('#message').text('');
    $('#message').append(div);
    $('#error').show();
  } else {
    $('.modal-title').html('');
    $('.modal-title').html('Success');
    $('.modal-header').css('background-color', 'green');
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    $('#message').text('');
    $('#message').append(div);
    $('#error').show();
  }
}
