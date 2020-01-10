
$(document).ready(function () {

    //click untuk buka page selanjutnya
    $('body').on('click', '.indexing-card', function(el) {
        $('#premierData').hide()
        $('#bundesData').hide()
        $('#laligaData').hide()
        $('#serieaData').hide()
        
        getTeamById(this.id)
        $('.club-info').show()
        // console.log(this.id);
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

function getTeamById(id)
{
    $.ajax({
        url: `http://localhost:3000/teams/${id}`,
        type: "GET",
        success: function(data) {
            $('#club-name').html(`${data.name}`);
            $('#club-crest').html(`<img src=${data.crestUrl}>`);
            $('#club-data > ul').append(`<li>${data.address}</li>`);
            $('#club-data > ul').append(`<li>${data.phone}</li>`);
            $('#club-data > ul').append(`<li>${data.website}</li>`);
            $('#club-data > ul').append(`<li>${data.email}</li>`);
            $('#club-data > ul').append(`<li>${data.founded}</li>`);

            for(let i=0;i<data.squad.length;i++)
            {
                $('#club-squad > ul').append(`<li id=${data.squad[i].id}>${data.squad[i].name} (${data.squad[i].position || data.squad[i].role})</li>`);
            }

            $.ajax({
                url: `http://localhost:3000/youtube/relevant/${data.name}`,
                type: "GET",
                success: function({items}) {
                    for(let i=0;i<3;i++)
                    {
                        $('#club-youtube > ul').append(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${items[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                    }
                }
            });
        }
    }); 
}