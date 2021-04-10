let counter =0; //счетчик песен
let gif_number =0;
    let mp3 = document.getElementById("mp3");
    let picture =document.getElementById("picture");
    let playlist = document.getElementById("playlist");//это ul

    let prev_btn = document.getElementById("prev");
    let pause_btn = document.getElementById("pause");
    let play_btn = document.getElementById("play");
    let next_btn = document.getElementById("next");
    let gif_btn = document.getElementById("gif");



    document.getElementById("play").onclick =play;

    let songs = ["Boris Brejcha - Take My Space (320  kbps)",
     "Boris_Brejcha_Deniz_Bul_-_Out_Of_Brain_PRAVILA_ZVUKA_(Dydki.info)",
      "BORIS-BREJCHA-Sad-But-True","Mr. Phoenix - Karma",
      "Smilla - Play (Worakls Remix)"];//просто назания песен
    let gifs =["1", "2","3","4","5"]//названия картинок


    for (let i=0; i<songs.length; i++){
       let li = document.createElement("li");
       li.innerHTML =songs[i];
       playlist.appendChild(li);
    }

    

      play_btn.onclick =play;//ссылка на функцию
      prev_btn.onclick = prev;
      next_btn.onclick =next;
      pause_btn.onclick =pause;
      gif_btn.onclick =change_gif;

function play(){
    
    mp3.src="music\\"+songs[counter]+".mp3";
    currentSong();
}
function prev(){
    currentSong();
    if (counter>0){
        counter--; 
        play();
        //mp3.src ="music\\"+songs[counter]+".mp3";
    
    }
    else {
        counter=songs.length-1;
        play();
        //mp3.src ="music\\"+songs[counter]+".mp3";
    }
}
function next(){
    currentSong();
    if(counter<songs.length-1){
       counter++;
        //mp3.src ="music\\"+songs[counter]+".mp3";
        play();      
    }

    else if (counter=songs.length-1){
        counter=0;
        play();
        //mp3.src ="music\\"+songs[counter]+".mp3"; 
    }
  
}

function pause(){
    mp3.pause();
}

function change_gif(){

    if (gif_number!=gifs.length-1){gif_number++;}
    else if(gif_number==gifs.length-1){ gif_number=0;}

    picture.src="img\\"+gifs[gif_number]+".gif";
}

function currentSong(){

    let list = document.getElementsByTagName("li");//это массив элементов li

    for (let i=0; i<songs.length; i++){
        if(i==counter){
            list[i].classList.add("active");
        }
        else {list[i].classList.remove("active");}
     }
}