function getAndSetValues() {
  console.log("get and set values function executing")
  const input0 = document.getElementsByClassName("input").value;
  const input1 = document.getElementById("fav1").value;
  const input2 = document.getElementById("fav2").value;
  const input3 = document.getElementById("fav3").value;
  let array1 = [input1, input2, input3, input0];
  return array1;
}

window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (e) {
    let array1 = getAndSetValues();
    a1(array1);
    console.log("form submit executing");
    e.preventDefault();

    function a1() {
      console.log("funtion a1 executing");
      let p1 = document.querySelector("p").append(array1);
      return p1;
    }
  }


}






// window.onload = function () {
//   let form = document.querySelector("form");
//   form.onsubmit = function (e) {
//     let input1 = document.getElementsByName("fav1").value;
//     let input2 = document.getElementByName("fav2").value;
//     let input3 = document.getElementByName("fav3").value;
//     let array1 = [input1, input2, input3];
//     a1();
//     console.log("form submit executing");
//     e.preventDefault();

//     function a1() {
//       console.log("funtion a1 executing");
//       let p1 = document.querySelector("p").append(array1[0, 1, 2]);
//       return p1;
//     }
//   }


// }