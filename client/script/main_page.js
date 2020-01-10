$(document).ready(function () {

    // premiere menu click
    $('#premier').on('click', function(el) {
        $('#page-content-wrapper').show()
        $('.club-info').hide()
        $('#premierData').show()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').hide()
        el.preventDefault()
    })
    //bundesliga menu click
    $('#bundes').on('click', function(el) {
        $('#page-content-wrapper').show()
        $('.club-info').hide()
        $('#premierData').hide()
        $('#bundesData').show()
        $('#laligaData').hide()
        $('#serieaData').hide()
        el.preventDefault()
    })
    //laliga menu click
    $('#laliga').on('click', function(el) {
        $('#page-content-wrapper').show()
        $('.club-info').hide()
        $('#premierData').hide()
        $('#bundesData').hide()
        $('#laligaData').show()
        $('#serieaData').hide()
        el.preventDefault()
    })
    //serie a menu click
    $('#seriea').on('click', function(el) {
        $('#page-content-wrapper').show()
        $('.club-info').hide()
        $('#premierData').hide()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').show()
        el.preventDefault()
    })
    firstShow()
})

// get laliga teams data
$.ajax({
    url: 'http://localhost:3000/clubs/laliga',
    method: 'GET'
})
.done(data=>{
    data.forEach(element => {
        $('#laligaData').append(`
            <div class="col mb-4">
                <div class="card indexing-card"  onclick="getTeamById(${element.id})">
                    <img src=${element.crestUrl} class="card-img-top ml-auto mr-auto d-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title justify-content-center">${element.shortName}</h>
                    </div>
                </div>
            </div>
        `)
    });
})
.fail()
.always()

// get serie a teams data
$.ajax({
    url: 'http://localhost:3000/clubs/seriea',
    method: 'GET'
})
.done(data=>{
    data.forEach(element => {
        $('#serieaData').append(`
            <div class="col mb-4" onclick="getTeamById('${element.id}')">
                <div class="card indexing-card">
                    <img src=${element.crestUrl} class="card-img-top ml-auto mr-auto d-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title justify-content-center">${element.shortName}</h>
                    </div>
                </div>
            </div>
        `)
    });
})
.fail()
.always()

// get premiere teams data
$.ajax({
    url: 'http://localhost:3000/clubs/premier',
    method: 'GET'
})
.done(data=>{
    data.forEach(element => {
        $('#premierData').append(`
            <div class="col mb-4" onclick="getTeamById('${element.id}')">
                <div class="card indexing-card">
                    <img src=${element.crestUrl} class="card-img-top ml-auto mr-auto d-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title justify-content-center">${element.shortName}</h>
                    </div>
                </div>
            </div>
        `)
    });
})
.fail()
.always()

//get bundesliga teams data
$.ajax({
        url: 'http://localhost:3000/clubs/bundesliga',
        method: 'GET'
    })
    .done(data=>{
        data.forEach(element => {
            $('#bundesData').append(`
            <div class="card indexing-card">
                    <img src=${element.crestUrl} class="card-img-top ml-auto mr-auto d-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title justify-content-center">${element.shortName}</h>
                    </div>
                </div>
            </div>
            `)
        });
    })
    .fail()
    .always()

function firstShow() {
    $('#premierData').show()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').hide()
}