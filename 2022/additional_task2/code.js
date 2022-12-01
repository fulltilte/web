const relaxvideo = document.querySelector('.relax-video');

let videos = [
	{
		src: 'earth.mp4'
	},
	{
		src: 'sea.mp4'
	},
	{
		src: 'sunrise.mp4'
	}
];

function printVideos(){
	for (let i = 0; i < videos.length; i++){
		relaxvideo.innerHTML += videoItem(videos[i], i);
	}
}

function videoItem(array, index) {
	return `<div class="relax-video-item">
		<video onclick="openVideo(${index})" src="videos/${array.src}" autoplay loop muted width="350"></video>
   </div>`;
}

printVideos();

function openVideo(index) {
	open('file:///Users/d4zzy/Downloads/web/2022/additional_task2/videos/'+videos[index].src, '_blank');
}