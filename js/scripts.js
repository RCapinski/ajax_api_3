$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');
	
	$('#search').click(searchCountries);
	
	function searchCountries () {
		var countryName = $('#country-name').val();
		if (!countryName.length) countryName = 'Poland';
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList,
      error: errorFunction
		});
	};
  
  function errorFunction () {
    alert('No country found!');
  };
	
	function showCountriesList (resp) {
    if (!resp) {
      alert('Countries info could not be loaded!');
      return;
    };
		countriesList.empty();
		resp.forEach(function(item) {
			$('<li>').text(item.name + ' - capital: ' + item.capital).appendTo(countriesList);
		});
	};
})