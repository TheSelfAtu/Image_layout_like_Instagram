// 画像を含むaタグを全て取得し配列として返す
function getImages() {
     var imglist = document.querySelectorAll("a");
     var imglist = Array.from(imglist);
     return imglist;
}

// 先頭から５番目までの画像の中で一番大きな画像を探して配列の０番目に格納
function sortImages(imglist) {
     console.log((largest_img = imglist[0]));
     largest_img = imglist[0].childNodes[0];
     largest_size = 0;
     index = 0;
     for (let step = 0; step < imglist.length; step++) {
          size =
               imglist[step].childNodes[0].width * imglist[step].childNodes[0].height;

          if (step > 4) {
               break;
          }
          if (size > largest_size) {
               largest_img = imglist[step];
               largest_size = size;
               index = step;
          }
     }
     // 最大の画像を０番目の画像とスワップ
     tmp = imglist[0];
     imglist[0] = largest_img;
     imglist[index] = tmp;

     // 画像が５枚以上あるとき、５枚目の画像を加工
     if (imglist.length > 5) {
          imglist[4].childNodes[0].style.opacity = 0.4;
          remainNum(imglist, imglist[4]);
     }

     return imglist;
}

function createNumberElement(shownum) {
     createelement = document.createElement("span");
     createtext = document.createTextNode("+" + shownum);
     createelement.appendChild(createtext);
     createelement.classList.add("showNumtext");
     console.log(createelement);
     return createelement;
}

// 画像枚数が５枚以上の場合、全部の画像の枚数から５引いたした値を表示する
function remainNum(imagelist, fifthatag) {
     var showNum = imagelist.length - 5;
     if (showNum > 0) {
          fifthatag.classList.add("showNum");
          createelement = createNumberElement(showNum);

          fifthatag.appendChild(createelement);
          console.log(createelement);
     }
}


     // 画像の枚数に合わせてグリッドを決めるクラスをつける
     function img2align(imglist) {
          let imgwidth = imglist[0].childNodes[0].width;
          let imgheight = imglist[0].childNodes[0].height;

          if (imgwidth > imgheight) {
               imglist[0].classList.add("img2yoko");
               imglist[1].classList.add("img2yoko2");
          } else {
               imglist[0].classList.add("img2tate");
               imglist[1].classList.add("img2tate2");
          }
     }

     function img3align(imglist) {
          let imgwidth = imglist[0].childNodes[0].width;
          let imgheight = imglist[0].childNodes[0].height;

          if (imgwidth > imgheight) {
               imglist[0].classList.add("img3yoko");
               imglist[1].classList.add("img3yoko2");
               imglist[2].classList.add("img3yoko3");
          } else {
               imglist[0].classList.add("img3tate");
               imglist[1].classList.add("img3tate2");
               imglist[2].classList.add("img3tate3");
          }
     }

     function img4align(imglist) {
          let imgwidth = imglist[0].childNodes[0].width;
          let imgheight = imglist[0].childNodes[0].height;

          if (Math.abs(imgwidth - imgheight) < 20) {
               imglist[0].classList.add("square1");
               imglist[1].classList.add("square2");
               imglist[2].classList.add("square3");
               imglist[3].classList.add("square4");
          } else if (imgwidth > imgheight) {
               imglist[0].classList.add("img4yoko");
               imglist[1].classList.add("img4yoko2");
               imglist[2].classList.add("img4yoko3");
               imglist[3].classList.add("img4yoko4");
          } else {
               imglist[0].classList.add("img4tate");
               imglist[1].classList.add("img4tate2");
               imglist[2].classList.add("img4tate3");
               imglist[3].classList.add("img4tate4");
          }
     }

     function img5align(imglist) {
          let imgwidth = imglist[0].childNodes[0].width;
          let imgheight = imglist[0].childNodes[0].height;

          if (imgwidth > imgheight) {
               imglist[0].classList.add("img5yoko");
               imglist[1].classList.add("img5yoko2");
               imglist[2].classList.add("img5yoko3");
               imglist[3].classList.add("img5yoko4");
               imglist[4].classList.add("img5yoko5");
          } else {
               imglist[0].classList.add("img5tate");
               imglist[1].classList.add("img5tate2");
               imglist[2].classList.add("img5tate3");
               imglist[3].classList.add("img5tate4");
               imglist[4].classList.add("img5tate5");
          }
     }

     var imglist = getImages();
     var imgnum = imglist.length;
     var element = document.getElementById("images-wrapper");
     var imglist = sortImages(imglist);
     if (imgnum === 2) {
          img2align(imglist);
     } else if (imgnum === 3) {
          img3align(imglist);
     } else if (imgnum === 4) {
          img4align(imglist);
     } else if ((imgnum) => 5) {
          img5align(imglist);
     }

     for (let step = 0; step < imglist.length; step++) {
          if (step > 4) {
               break;
          }
          element.appendChild(imglist[step]);
     }