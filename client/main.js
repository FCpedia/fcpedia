$(document).ready(function () {
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
    function onSignIn(googleUser) {
        const id_token = googleUser.getAuthResponse().id_token;
        $.ajax({
            type: "post",
            url: "//localhost:3000/",
            data: "data",
            dataType: "dataType",
            success: function (response) {

            }
        });
    }
});
