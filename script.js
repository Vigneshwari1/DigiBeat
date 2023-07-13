let index = 0;
let playbutton = document.getElementById('playbutton');
let progressed = document.getElementById('progressed');
let progressbar = document.getElementById('progress-bar');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let repeat = document.getElementById('repeat');
let songlist;
let song;
let playingsong;
let playingid;
let repeatflag = false;
songlist = [
    { songname: "Maria", artist: "ASHWOOD", filepath: "/songs/ASHWOOD - Maria (ft. Blooom & Ghost’n’Ghost).mp3", coverpath: "/song cover/ASHWOOD - Maria (ft. Blooom & Ghost’n’Ghost).jpg" },
    { songname: "Over The Sun (Pt. 2)", artist: "Coopex", filepath: "/songs/Coopex - Over The Sun (Pt. 2).mp3", coverpath: "/song cover/Coopex - Over The Sun (Pt. 2).jpg" },
    { songname: "Fly", artist: "Kage & JaySounds", filepath: "songs/Kage & JaySounds - Fly.mp3", coverpath: "song cover/Kage & JaySounds - Fly.jpg" },
    { songname: "Lonely Hour", artist: "MAD SNAX, Poylow, New Beat Order", filepath: "songs/MAD SNAX, Poylow, New Beat Order - Lonely Hour.mp3", coverpath: "song cover/MAD SNAX, Poylow, New Beat Order - Lonely Hour.jpg" },
    { songname: "Lachrymose", artist: "Maze & Trinist", filepath: "songs/Maze & Trinist - Lachrymose.mp3", coverpath: "song cover/Maze & Trinist - Lachrymose.jpg" },
    { songname: "Overcome", artist: "Outlandr", filepath: "songs/Outlandr - Overcome.mp3", coverpath: "song cover/Outlandr - Overcome.jpg" },
    { songname: "Like That", artist: "SIIK & JJL", filepath: "songs/SIIK & JJL - Like That.mp3", coverpath: "song cover/SIIK & JJL - Like That.jpg" },
    { songname: "Falling Down", artist: "Alex Skrindo", filepath: "songs/Alex Skrindo - Falling Down.mp3", coverpath: "song cover/Alex Skrindo - Falling Down.jpg" },
    { songname: "Immortal", artist: "CITYWLKR", filepath: "songs/CITYWLKR - Immortal (feat. Josh Rubin).mp3", coverpath: "song cover/CITYWLKR - Immortal (feat. Josh Rubin).jpg" },
    { songname: "094", artist: "JOXION", filepath: "songs/JOXION - 094.mp3", coverpath: "song cover/JOXION - 094.jpg" }
    //{songname: "", artist: "", filepath: "", coverpath: ""}
]
document.getElementsByClassName("song-list")[0].innerHTML = "";
for (let i = 0; i < songlist.length; i++) {
    document.getElementsByClassName("song-list")[0].innerHTML += '<div class="song"><img src="" class="cover">  <div class="song-name">Song name</div>  <div class="artist-name">Artist name</div>  <div class="duration">Duration</div></div>'
}
song = Array.from(document.getElementsByClassName('song'));
playingsong = new Audio(songlist[0].filepath);
playingid = 0;

//nowplaying
document.getElementById("playing-song-name").innerHTML = songlist[playingid].songname;
document.getElementById("playing-artist-name").innerHTML = songlist[playingid].artist;

let royalty = document.getElementById("royalty-free");
let ncs = document.getElementById("ncs");


royalty.onclick = function () {
    songlist = [
        { songname: "Volcano", artist: "Jim Yosef", filepath: "royalty/Jim Yosef - Volcano (feat. Scarlett).mp3", coverpath: "royalty cover/Jim Yosef - Volcano (feat. Scarlett).jpg" },
        { songname: "What You Gonna Do", artist: "MADZI", filepath: "royalty/MADZI - What You Gonna Do.mp3", coverpath: "royalty cover/MADZI - What You Gonna Do.jpg" },
        { songname: "Need You", artist: "Yonexx & lunar", filepath: "royalty/Yonexx & lunar - Need You.mp3", coverpath: "royalty cover/Yonexx & lunar - Need You.jpg" }
        //{songname: "", artist: "", filepath: "", coverpath: ""}
    ]
    document.getElementById("playlist-name").innerHTML = "Royalty Free";
    playlistsetting();
}

ncs.onclick = function () {
    songlist = [
        { songname: "Maria", artist: "ASHWOOD", filepath: "/songs/ASHWOOD - Maria (ft. Blooom & Ghost’n’Ghost).mp3", coverpath: "/song cover/ASHWOOD - Maria (ft. Blooom & Ghost’n’Ghost).jpg" },
        { songname: "Over The Sun (Pt. 2)", artist: "Coopex", filepath: "/songs/Coopex - Over The Sun (Pt. 2).mp3", coverpath: "/song cover/Coopex - Over The Sun (Pt. 2).jpg" },
        { songname: "Fly", artist: "Kage & JaySounds", filepath: "songs/Kage & JaySounds - Fly.mp3", coverpath: "song cover/Kage & JaySounds - Fly.jpg" },
        { songname: "Lonely Hour", artist: "MAD SNAX, Poylow, New Beat Order", filepath: "songs/MAD SNAX, Poylow, New Beat Order - Lonely Hour.mp3", coverpath: "song cover/MAD SNAX, Poylow, New Beat Order - Lonely Hour.jpg" },
        { songname: "Lachrymose", artist: "Maze & Trinist", filepath: "songs/Maze & Trinist - Lachrymose.mp3", coverpath: "song cover/Maze & Trinist - Lachrymose.jpg" },
        { songname: "Overcome", artist: "Outlandr", filepath: "songs/Outlandr - Overcome.mp3", coverpath: "song cover/Outlandr - Overcome.jpg" },
        { songname: "Like That", artist: "SIIK & JJL", filepath: "songs/SIIK & JJL - Like That.mp3", coverpath: "song cover/SIIK & JJL - Like That.jpg" },
        { songname: "Falling Down", artist: "Alex Skrindo", filepath: "songs/Alex Skrindo - Falling Down.mp3", coverpath: "song cover/Alex Skrindo - Falling Down.jpg" },
        { songname: "Immortal", artist: "CITYWLKR", filepath: "songs/CITYWLKR - Immortal (feat. Josh Rubin).mp3", coverpath: "song cover/CITYWLKR - Immortal (feat. Josh Rubin).jpg" },
        { songname: "094", artist: "JOXION", filepath: "songs/JOXION - 094.mp3", coverpath: "song cover/JOXION - 094.jpg" }
        //{songname: "", artist: "", filepath: "", coverpath: ""}
    ]
    document.getElementById("playlist-name").innerHTML = "NCS";
    playlistsetting();
}

//while clicking on any playlist updates
function playlistsetting() {
    playingsong.pause();
    //update HTML
    document.getElementsByClassName("song-list")[0].innerHTML = "";
    for (let i = 0; i < songlist.length; i++) {
        document.getElementsByClassName("song-list")[0].innerHTML += '<div class="song"><img src="" class="cover">  <div class="song-name">Song name</div>  <div class="artist-name">Artist name</div>  <div class="duration">Duration</div></div>'
    }
    song = Array.from(document.getElementsByClassName('song'));
    playingsong = new Audio(songlist[0].filepath);
    playingid = 0;
    document.getElementById("playing-song-name").innerHTML = songlist[playingid].songname;
    document.getElementById("playing-artist-name").innerHTML = songlist[playingid].artist;
    setsong();
    clickonsong();
    nowplaying();
    updateontime();
}


//duration of playing song
function nowplaying() {
    playingsong.addEventListener('loadedmetadata', function () {
        document.getElementById("playing-song-name").innerHTML = songlist[playingid].songname;
        document.getElementById("playing-artist-name").innerHTML = songlist[playingid].artist;
        let zero = "";
        if (playingsong.duration % 60 < 10) {
            zero = 0;
        }
        document.getElementById("playing-duration").innerHTML = Math.floor(playingsong.duration / 60) + ":" + zero + Math.floor(playingsong.duration % 60);
    })
}

//replacing placeholder with actual song details
function setsong() {
    song.forEach((element, i) => {
        element.getElementsByTagName("img")[0].src = songlist[i].coverpath;
        element.getElementsByClassName("song-name")[0].innerText = songlist[i].songname;
        element.getElementsByClassName("artist-name")[0].innerText = songlist[i].artist;
        element.id = i;
        let e = new Audio(songlist[i].filepath);
        e.addEventListener('loadedmetadata', function () {
            let zero = "";
            if (e.duration % 60 < 10) {
                zero = 0;
            }
            element.getElementsByClassName("duration")[0].innerText = Math.floor(e.duration / 60) + ":" + zero + Math.floor(e.duration % 60);
        })
    })
}
setsong();
//clicking on playlist2


//stop rotating the album cover
const stoprotate = () => {
    Array.from(document.getElementsByClassName('cover')).forEach((element) => {
        element.style.animation = "none";
        element.style.borderRadius = "0%";
    })
}

//clicking on the song
function clickonsong() {
    Array.from(document.getElementsByClassName('song')).forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log("clicked on the element");
            stoprotate();
            let i = e.target.id;
            playingsong.src = songlist[i].filepath;
            playingid = i;
            playingsong.play();
            e.target.getElementsByClassName('cover')[0].style.animation = "mymove 2s infinite linear";
            e.target.getElementsByClassName('cover')[0].style.borderRadius = "50%";
            playbutton.classList.remove('fa-circle-play');
            playbutton.classList.add('fa-circle-pause');
        })
    })
}
clickonsong();

//clicking on play
playbutton.addEventListener('click', () => {
    if (playingsong.paused || playingsong <= 0) {
        playingsong.play();
        document.getElementById(playingid).getElementsByClassName('cover')[0].style.animation = "mymove 2s infinite linear";
        document.getElementById(playingid).getElementsByClassName('cover')[0].style.borderRadius = "50%";
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
    }
    else {
        playingsong.pause();
        stoprotate();
        playbutton.classList.remove('fa-circle-pause');
        playbutton.classList.add('fa-circle-play');
    }
})

//timeupdate & progressbar
function updateontime() {
    playingsong.ontimeupdate = function (e) {
        let percent = (playingsong.currentTime / playingsong.duration) * 100;
        progressed.style.width = percent + "%";
        let zero = "";
        if (playingsong.currentTime % 60 < 10) {
            zero = 0;
        }
        document.getElementById("playing-time").innerText = Math.floor(playingsong.currentTime / 60) + ":" + zero + Math.floor(playingsong.currentTime % 60);
        if (playingsong.currentTime == playingsong.duration) {
            if (repeatflag == false) {
                setTimeout(() => {
                    next.click();
                }, 1000);
            }
            else {
                playingsong.currentTime = 0;
                playingsong.play();
            }
        }
    }
}
updateontime();

progressbar.onclick = function (e) {
    let percent = (e.offsetX / progressbar.offsetWidth);
    playingsong.currentTime = percent * playingsong.duration;
}

//next
next.onclick = function (e) {
    playingid++;
    if (playingid >= songlist.length) {
        playingid = 0;
    }
    playingsong.src = songlist[playingid].filepath;
    stoprotate();
    document.getElementById(playingid).getElementsByClassName('cover')[0].style.animation = "mymove 2s infinite linear";
    document.getElementById(playingid).getElementsByClassName('cover')[0].style.borderRadius = "50%";
    playingsong.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
    nowplaying();
}

//previous
previous.onclick = function (e) {
    playingid--;
    if (playingid < 0) {
        playingid = songlist.length - 1;
    }
    playingsong.src = songlist[playingid].filepath;
    stoprotate();
    document.getElementById(playingid).getElementsByClassName('cover')[0].style.animation = "mymove 2s infinite linear";
    document.getElementById(playingid).getElementsByClassName('cover')[0].style.borderRadius = "50%";
    playingsong.play();
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
    nowplaying();
}

repeat.onclick = function (e) {
    if (repeatflag == false) {
        repeatflag = true;
        repeat.style.color = "#db77ff";
    }
    else {
        repeatflag = false;
        repeat.style.color = "white";
    }
    console.log(repeatflag);
}
