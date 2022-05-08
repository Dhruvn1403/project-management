import DOMInterface from './DOMInterface.js';
import gitImage from './images/git-logo.png';

document.addEventListener('DOMContentLoaded', DOMInterface);

function ui_ux() {
	
	//git logo img
	let gitLogo = document.createElement('img');
	gitLogo.src = gitImage;
	gitLogo.classList.add('gitLogo');
	gitLogoDiv.appendChild(gitLogo);

	// DOM click events
	inputMenu.addEventListener('click', addMargin);
	addTaskButton.addEventListener('click', addTask);
	addProjectButton.addEventListener('click', openForm);
	// projectSubmitButton.addEventListener('click', closeForm);
	taskSubmitButton.addEventListener('click', closeTaskForm);



	//Functions for buttons and adding margin
	function openForm() {
		document.getElementById("myForm").style.display = "block";
		addProjectButton.style.display = "none";
	}

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
	}

	function addMargin() {
		taskList.classList.toggle('addmarginAfterClick');
		console.log("it works");
	}

	function addTask() {
		document.getElementById("myTasks").style.display = "block";
		addTaskButton.style.display = "none";
	}

	function closeTaskForm() {
		document.getElementById("myTasks").style.display = "none";
	}

}

export default ui_ux;