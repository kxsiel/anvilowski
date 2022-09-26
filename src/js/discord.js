function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    swal({
        title: "Sukces!",
        text: "Skopiowano tekst: 777Raizu#0777",
        icon: "success",
        button: "Gotowe",
        dangerMode: false,
    });
}