// 画像を含むaタグを全て取得し配列として返す
function getImages() {
     var imglist = document.querySelectorAll("a");
     var imglist = Array.from(imglist);
     return imglist;
}

// 画像の中で一番大きな画像を探して配列の０番目に格納
function sortImages(imglist) {
     console.log(largest_img = imglist[0].childNodes[0])
     largest_img = imglist[0].childNodes[0]
     largest_size = 0
     index = 0
     for (let step = 0; step < imglist.length; step++) {
          size = imglist[step].childNodes[0].width * imglist[step].childNodes[0].height
          if (step > 4) {
               break
          }
          if (size > largest_size) {
               largest_img = imglist[step]
               largest_size = size
               index = step
          }
     };
     tmp = imglist[0]
     imglist[0] = largest_img
     imglist[index] = tmp
     return imglist
}

// 全部の画像の枚数からマイナス５した数を表示する
function remainNum(imagelist) {
     var element = document.getElementById("shownum");
     var showNum = imagelist.length - 5
     if (showNum > 0) {
          element.classList.add('showNum');
          element.innerHTML = '+' + showNum

     }
}

// 画像の枚数に合わせてグリッドを決めるクラスをつける
function img2align(imglist) {
     let imgwidth = imglist[0].childNodes[0].width
     let imgheight = imglist[0].childNodes[0].height

     if (imgwidth > imgheight) {
          imglist[0].classList.add('img2yoko');
          imglist[1].classList.add('img2yoko2')
     } else {
          imglist[0].classList.add('img2tate');
          imglist[1].classList.add('img2tate2');
     }
}

function img3align(imglist) {
     let imgwidth = imglist[0].childNodes[0].width
     let imgheight = imglist[0].childNodes[0].height

     if (imgwidth > imgheight) {
          imglist[0].classList.add('img3yoko');
          imglist[1].classList.add('img3yoko2')
          imglist[2].classList.add('img3yoko3')

     } else {
          imglist[0].classList.add('img3tate');
          imglist[1].classList.add('img3tate2');
          imglist[2].classList.add('img3tate3')

     }
}

function img4align(imglist) {
     let imgwidth = imglist[0].childNodes[0].width
     let imgheight = imglist[0].childNodes[0].height

     if (Math.abs(imgwidth - imgheight) < 20) {
          imglist[0].classList.add('square1');
          imglist[1].classList.add('square2')
          imglist[2].classList.add('square3')
          imglist[3].classList.add('square4')

     } else if (imgwidth > imgheight) {
          imglist[0].classList.add('img4yoko');
          imglist[1].classList.add('img4yoko2')
          imglist[2].classList.add('img4yoko3')
          imglist[3].classList.add('img4yoko4')

     } else {
          imglist[0].classList.add('img4tate');
          imglist[1].classList.add('img4tate2');
          imglist[2].classList.add('img4tate3')
          imglist[3].classList.add('img4tate4')

     }
}

function img5align(imglist) {
     let imgwidth = imglist[0].childNodes[0].width
     let imgheight = imglist[0].childNodes[0].height

     if (imgwidth > imgheight) {
          imglist[0].classList.add('img5yoko');
          imglist[1].classList.add('img5yoko2')
          imglist[2].classList.add('img5yoko3')
          imglist[3].classList.add('img5yoko4')
          imglist[4].classList.add('img5yoko5')
     } else {
          imglist[0].classList.add('img5tate');
          imglist[1].classList.add('img5tate2');
          imglist[2].classList.add('img5tate3')
          imglist[3].classList.add('img5tate4')
          imglist[4].classList.add('img5tate5')

     }
}



var imglist = getImages();
var imgnum = imglist.length
var element = document.getElementById("images-wrapper");
var imglist = sortImages(imglist)
remainNum(imglist)

if (imgnum === 2) {
     img2align(imglist)
} else if (imgnum === 3) {
     img3align(imglist)
} else if (imgnum === 4) {
     img4align(imglist)
} else if (imgnum => 5) {
     img5align(imglist)
}


for (let step = 0; step < imglist.length; step++) {
     if (step > 4) {
          break
     }
     element.appendChild(imglist[step])
};

