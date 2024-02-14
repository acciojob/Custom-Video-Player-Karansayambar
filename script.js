/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// const prev = document.querySelector(".player__button");
// const next = document.querySelector(".player__button");

ranges.forEach(range => {
	range.addEventListener("input", () => {
		if(range.name === "volume"){
			video.volume = range.value;
		}else if(range.name === "playbackRate"){
			video.playbackRate = range.value
		}
	})
})

video.addEventListener("timeupdate", () => {
    const progressPer = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${progressPer}%`;
});

skipButtons.forEach(button => {
	button.addEventListener("click", () => {
		const skipAmount = parseFloat(button.dataset.skip);
		video.currentTime = skipAmount;
	})
})

toggle.addEventListener("click", () => {
	if(video.paused){
		video.play()
	}else{
		video.pause();
	}
});



// next.addEventListener("click", () => {
//     if (video.currentTime + 2 <= video.duration) {
//         video.currentTime += 2;
//     }
// });

// prev.addEventListener("click" ,() => {
// 	if(video.currentTime -2 >= 0){
// 		video.currentTime -= 2;
// 	}
// })