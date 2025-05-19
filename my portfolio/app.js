const video1 = document.getElementById('ProjectVideo1');
const video2 = document.getElementById('ProjectVideo2');
const video3 = document.getElementById('ProjectVideo3');

const videoList = [video1, video2, video3];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout', function(){
        video.pause()
    })
})