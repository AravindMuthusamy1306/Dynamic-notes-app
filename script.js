function addNote() {
    let note = $("#content-area").val().trim();
    let now = new Date();
    let timeStamp = now.toLocaleString();
    if (note === "") {
        alert("Please enter something!");
        return;
    } 
    else {
        const note = $('<div class="note-card" style="display:none;"><p>' + $("#content-area").val() + '</p><span class = "timestamp"> Created on '+ timeStamp +' </span><button class="btn-delete-note">Delete Note</button><button class="btn-edit-note">Edit Note</button></div>');
        $("#notes-container").append(note);
        note.fadeIn(250);
        $("#content-area").val("");        
    }
    $("#content-area").focus();
}

$("#btn-add-note").click(addNote);
$("#content-area").keydown(function (e) { 
    if(e.key === "Enter"){
        addNote();
    }
});

$("#notes-container").on("click",".btn-edit-note", function () {
    let paragraph = $(this).closest(".note-card").find("p");
    let text = paragraph.text();
    let input = $('<input type="text" class="edit-area" value="' + text + '">');
    paragraph.before(input);
    paragraph.hide();
    input.after('<button class="btn-save-note">Save Note</button>');
    
});

$("#notes-container").on("click", ".btn-save-note", function(){
        let timestampSpan = $(this).closest(".note-card").find(".timestamp");
        timestampSpan.text("Last edited on " + new Date().toLocaleString());
        let editArea = $(this).closest(".note-card").find(".edit-area");
        let updatedText = editArea.val();
        let paragraph = $(this).closest(".note-card").find("p");
        paragraph.text(updatedText);
        paragraph.fadeIn(200, function(){
            paragraph.show();
        });
        editArea.fadeOut(200, function(){
            $(this).remove();
        });
        $(this).fadeOut(200, function(){
            $(this).remove();
        });
});

$("#notes-container").on("click", ".btn-delete-note", function () {
    $(this).closest(".note-card").fadeOut(250, function(){
        $(this).remove();
    });
});