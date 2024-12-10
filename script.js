function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.addEventListener('DOMContentLoaded', function() {
    const challengeButton = document.querySelector('button');
    const dailyChallenge = document.getElementById('dailyChallenge');

    challengeButton.addEventListener('click', function() {
        dailyChallenge.textContent = 'You have completed today\'s challenge!';
        alert("Congratulations! You've completed today's challenge!");
    });
});