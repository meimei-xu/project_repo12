$(document).ready(function(){
    $('.addTree').on('click', function(e){

        let doComplete = confirm("Are you sure you want to complete goals?");
        
        if (doComplete == true) {

            $target = $(e.target);

            let id = $target.attr('user-id');
    
            let newTree = 1;
    
            $.ajax({
                type:'PUT',
                url: '/homepage/'+id,
                data: {tree: newTree},
                success: function(response){
                    window.location.href='/homepage';
                    console.log('Success');
                },
                error: function(err){
                    console.log(err);
                }
            });

            // Deletes note 
            e.target.parentElement.remove(); // removing from DOM
            let divID = e.target.parentElement.dataset.id;
            let notes = getDataFromStorage();
            let newNotesList = notes.filter((item) => {
                return item.id !== parseInt(divID);
            });
            localStorage.setItem("notes", JSON.stringify(newNotesList));

        }
    });
});



