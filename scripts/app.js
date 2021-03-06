var app = angular.module('truckApp', []);

function InputDataCtrl($scope, $http) {
	$scope.loadData = function() {
		$http
				.jsonp(
						'http://mtoserver.dyndns.org/mto/sql.php?callback=JSON_CALLBACK')
				.then(function(response) {
					$scope.inputDatas = response.data;
					getData();
				});
	};

	$scope.loadData();
}

function showAlert (message, title){
	if (navigator.notification) {
		navigator.notification.alert(message, null, title, 'OK');
	} else {
		alert(title ? (title + ": " + message) : message);
	}
}

function sendData(formId) {
	// validation Code
	$.ajax({
		type : 'POST',
		url : 'http://mtoserver.dyndns.org/mto/formToMail.php',
		data : $("#" + formId).serialize(),
		success : function(data) {
				alert ("success");
		}
	});
	window.history.go(-1);
	showAlert("Die Mitarbeiter von MTO melden sich in Kürze", "Info");
}

function saveUserInfos(){
	var name = document.getElementById("name_input").value;
	var telephone = document.getElementById("telephone_input").value;
	
	window.localStorage.setItem("name", name);
	window.localStorage.setItem("telephone", telephone);
	
	alert (window.localStorage.getItem("name"));
	/*window.localStorage.getItem*/

}

