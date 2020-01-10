$(document).ready(function () {
    $('.prof-username').hide();
    $('.after-login').hide()
});
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("picture")
        $('.login-page').show()
        $('.prof-username').hide();

    });
}
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    axios.post('http://localhost:3000/login', {
        data: {
            id_token
        }
    })
        .then(payload => {
            let data = payload.data
            if (payload.status == 200) {
                localStorage.setItem("token", data.token)
                $('.login-page').hide()
                $('.prof-username').show();
                $('.prof-username').text(data.name);
                $('.prof-username').prepend(` <img src="${data.picture}" class="rounded - circle prof - pict" style="width: 30px; "> `);
                // $(".prof-pict").attr("src", data.picture);
                $('.after-login').show()
            }
        })
        .catch(err => {
            console.log(err)
        })
}


