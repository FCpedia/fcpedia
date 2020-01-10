$('document').ready(() => {
    // getTeamById(1)
    $('.club-info').hide()
});

// alert(id)

function getTeamById(id) {
    $('#page-content-wrapper').hide()
    $.ajax({
        url: `http://localhost:3000/teams/${id}`,
        type: "GET",
        success: function (data) {
            $('#club-name').html(`<h1 class="mt-0">${data.name}</h1>`);
            //$('#club-crest').html(`<img src=${data.crestUrl}>`);
            $('#club-crest').attr('src', data.crestUrl);
            $('#club-data > table').append(`<tr><th>Address</th><td>${data.address}</td></tr>`);
            $('#club-data > table').append(`<tr><th>Phone</th><td>${data.phone}</td></tr>`);
            $('#club-data > table').append(`<tr><th>Website</th><td>${data.website}</td></tr>`);
            $('#club-data > table').append(`<tr><th>Email</th><td>${data.email}</td></tr>`);
            $('#club-data > table').append(`<tr><th>Founded in</th><td>${data.founded}</td></tr>`);

            
            for (let i = 0; i < data.squad.length; i++) {
                // let bePlayer = getPlayerHere(data.squad[i].id)
                let playercard = `<div class="col mb-4" onclick="showPlayerData(${data.squad[i].id})" style="cursor: pointer">
                <div class="card">
                  <img src="" class="card-img-top" alt="${data.squad[i].name} image">
                  <div class="card-body">
                    <h5 class="card-title">${data.squad[i].name}</h5>
                    <p class="card-text">${data.squad[i].position || data.squad[i].role}</p>
                  </div>
                </div>
              </div>`;
                $('#club-squad').append(playercard);
            }
            $.ajax({
                url: `http://localhost:3000/youtube/relevant/${data.name}`,
                type: "GET",
                success: function ({ items }) {
                    for (let i = 0; i < 3; i++) {
                        $('#club-youtube > ul').append(`<iframe width="400" height="315" src="https://www.youtube.com/embed/${items[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    }
                }
            });
        }
    });

    $('.club-info').show()
}

async function getPlayerHere(id) {
    // $('#player-data').append(`<span>${id}</span>`)
    return await $.ajax({
        url: 'http://localhost:3000/players/' + id,
        method: 'get'
    })
}