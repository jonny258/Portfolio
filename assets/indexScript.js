
//scroll and stop function
const wrapper = document.querySelector("#headerWrapper")
window.addEventListener("scroll", function() {
  console.log(window.pageYOffset, window.innerHeight)
  if (window.pageYOffset > window.innerHeight/3) {
    wrapper.classList.add("scroll");
    wrapper.style.marginTop = window.innerHeight/3 + "px"
    //wrapper.style.top = window.pageYOffset + "px";
  } else {
    wrapper.style.marginTop = "0px"
    wrapper.classList.remove("scroll");
  }
});

//Welcome to my portfolio function
function typeWriterFunction(){
  if(window.pageYOffset > window.innerHeight/3){
    window.removeEventListener("scroll", typeWriterFunction)
  var dataText = [ "Web development.", "Full Stack.", "Example Skill.", "Welcome to my portfolio."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("#skillsHeader").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
  }
}
window.addEventListener("scroll", typeWriterFunction);






const inputImage = ['https://koa.com/blog/images/needles-highway-view-south-dakota.jpg?preset=heroimagecropped', 'https://imagebee.org/photography/scenic/scenic-10-1920x1200.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGauQVyNdi6fia5DxSJMsqklSktIfd4PRvNw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ctdgUu33BFRjgNV57Gh1fxgc5xsUFv_r4Q&usqp=CAU', 'https://redfishlake.com/wp-content/uploads/2018/01/sawtooth-scenic-byway-Edited.jpg', 'https://littleleapling.com/wp-content/uploads/sites/17281/2021/08/manhattan-ks-scenic-overlook.jpg']
const inputContent = ["test1", "test2", "test3", "test4", "test5", "test6"]

const modalHeader = $('#modalHeader')
const modalContent = $('#modalContent')
const modalImage = $('#modalImage')
function showModal(data){
  console.log(data)
  console.log(modalImage)
  console.log(inputImage[Number(data[0].id)])
  modalHeader.text(data[0].children[1].innerText)
  modalContent.text(inputContent[Number(data[0].id)])
  //modalImage.attr('src', 'https://koa.com/blog/images/needles-highway-view-south-dakota.jpg?preset=heroimagecropped')
  modalImage.attr('src', inputImage[Number(data[0].id)])

  $('#my-modal').modal('show')
}


const projectX = $('.projectX')
console.log(projectX)
for(let i=0; i<projectX.length; i++){
  $(projectX[i]).click(function(){
    showModal($(projectX[i]))
  })
}


  $('#my-button').click(function() {
    $('#my-modal').modal('show')
  });

