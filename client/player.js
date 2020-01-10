function showPlayerData(id) {
    // $('#player-data').append(`<span>${id}</span>`)
    $('.player-modal').modal()
    $('#player-data').empty()
    $('#player-data').append(`
    <div style="display: flex; justify-content: center;">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    `)
    $.ajax({
        url: 'http://localhost:3000/players/' + id,
        method: 'get'
    })
        .then((playerData) => {
            $('#player-data').empty()
            $('#player-data').css('background', 'white')
            $('#player-data').append(`
        <div id="sandbox">
                <img src="${playerData.image}" alt="wait up...">
                <div>
                    <span>name: </span><span>${playerData.name}</span> <br>
                    <span>date of birth: </span><span>${playerData.dateOfBirth}</span> <br>
                    <span>country of birth: </span><span>${playerData.countryOfBirth}</span>
                    <hr>
                    <span>nationality: </span><span>${playerData.nationality}</span> <br>
                    <span>shirt number: </span><span>${playerData.shirtNumber}</span> <br>
                    <span>position: </span><span>${playerData.position}</span>
                </div>
                <span style="position: fixed; top: 50vh; left: 100px;user-select: none;" class="text-disable">Click anywhere outside the box to close</span>
            </div>
        `)
            $('.player-modal').modal()
        }).catch((err) => {
            console.log(err);
        })
}