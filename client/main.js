$(document).ready(function () {

    //click untuk buka page selanjutnya
    $('body').on('click', '.indexing-card', function(el) {
        $('#premierData').hide()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').hide()
        // nama(this.id)
        console.log(this.id);
        el.preventDefault()
    })

    $('#premier').on('click', function(el) {
        $('#premierData').show()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').hide()
        el.preventDefault()
    })
    
    $('#bundes').on('click', function(el) {
        $('#premierData').hide()
        $('#bundesData').show()
        $('#laligaData').hide()
        $('#serieaData').hide()
        el.preventDefault()
    })
    
    $('#laliga').on('click', function(el) {
        $('#premierData').hide()
        $('#bundesData').hide()
        $('#laligaData').show()
        $('#serieaData').hide()
        el.preventDefault()
    })
    
    $('#seriea').on('click', function(el) {
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
            <div class="col mb-4" >
                <div class="card indexing-card" id=${element.id}>
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
            <div class="col mb-4" >
                <div class="card indexing-card" id=${element.id}>
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
            <div class="col mb-4" >
                <div class="card indexing-card" id=${element.id} >
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
            <div class="col mb-4" id=${element.id} >
                <div class="card indexing-card" id=${element.id} >
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