const sideBarButton = document.querySelector("#sideBarButton")
const aboutMeModal = document.querySelector("#aboutMeModal")

sideBarButton.addEventListener("click", function(){
    console.log("yoyo")
    $('.ui.sidebar')
  .sidebar('toggle')
;
})

aboutMeModal.addEventListener("click", function(){
    console.log("yody")
    $.modal({
        title: 'Important Notice',
        class: 'mini',
        closeIcon: true,
        content: 'You will be logged out in 5 Minutes',
        actions: [{
          text: 'Alright, got it',
          class: 'green'
        }]
    }).modal('show');
;
})
