$(document).ready(function() {
  //  loadCategoryDiv();

  $.get('api/categories/', function(category) {
    for (var i = 0; i < category.length; i++) {
      const newCategory = document.createElement('a');
      const catId = category[i].id;
      const catName = category[i].name;
      newCategory.setAttribute('class', 'button');
      newCategory.setAttribute('data-filter', category[i].name.toLowerCase());
      newCategory.setAttribute('data-value', category[i].id);
      newCategory.innerText = category[i].name.toUpperCase();
      $('.navigation').append(newCategory);
      fetchCategoryPhotos(catId, catName);
    }
  });

  // doing the data filter by category name
  $(document).on('click', '.navigation .button', function() {
    var name = $(this).attr('data-filter');
    if (name == 'all') {
      $('.filter').show(2000);
    } else {
      $('.filter')
        .not('.' + name)
        .hide(2000);
      $('.filter')
        .filter('.' + name)
        .show(2000);
    }
  });
});

// fetching all the items images from database
function fetchCategoryPhotos(catId, catName) {
  $.get('api/categories/' + catId + '/dishes', function(items) {
    if (items) {
      var imageContainer = document.getElementsByClassName('ImageContainer');
      for (var i = 0; i < items.length; i++) {
        if (items[i].avaliability) {
          const divBox = document.createElement('div');
          const divFilter = document.createElement('div');
          const img = document.createElement('IMG');
          const divContent = document.createElement('div');
          const divDetails = document.createElement('div');
          const priceHeader = document.createElement('h5');
          const desPar = document.createElement('p');
          const nameHeader = document.createElement('h2');
          divDetails.setAttribute('class', 'details');
          divContent.setAttribute('class', 'content');
          priceHeader.innerHTML = '€ ' + items[i].price;
          desPar.innerHTML = items[i].description;
          nameHeader.innerHTML = items[i].name + ',  ' + items[i].size;
          divContent.append(nameHeader);
          divContent.append(desPar);
          divContent.append(priceHeader);

          divBox.setAttribute('class', 'box');
          divFilter.setAttribute('class', 'filter ' + catName.toLowerCase());
          divFilter.style.display = 'none';
          img.setAttribute('src', 'img/' + catName.toLowerCase() + '/' + items[i].photo);
          divFilter.append(img);
          divDetails.append(divContent);
          divFilter.append(divDetails);
          divBox.append(divFilter);
          $('.ImageContainer').append(divBox);
        }
      }
    }
  });
}
