const linksSocialMedia = {
	github: 'Abimael-Lovera',
	youtube: 'UCCaktAVxE2wHjgYgR1PkTZg',
	facebook: 'abimaelalejandro.loveramamani',
	instagram: 'al.exandre4343',
	twitter: 'abimaellovera'
};
function changeSocialMediaLinks(userName) {
	// document.getElementById('userName').textContent = userName; //jaito longo
	// this.userName.textContent = userName; //o Js ja entende que é um Id  e faz por traz o seguinte document.getElementById('userName')
	for (let li of socialLinks.children) {
		//lembrar < .children pega os filhos >
		const social = li.getAttribute('class');
		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
		// alert(social);
	}
}
changeSocialMediaLinks('Alejandro Lovera');

function getGitHubProfiles() {
	const url = `https://api.github.com/users/${linksSocialMedia.github}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			userName.textContent = data.name;
			userBio.textContent = data.bio;
			userLinkGitHub.href = data.html_url;
			userImageProfile.src = data.avatar_url;
			userProfile.textContent = data.login;
		});
}
getGitHubProfiles();
