$('document').ready(() => {
    getTeamById(1)
});

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