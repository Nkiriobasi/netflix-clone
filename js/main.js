const tabItems = document.querySelectorAll(".tab__item");
const tabContentItems = document.querySelectorAll(".tab__content__item");


// Select tab content item
function selectItem(e){
	// remove border from the previous tab
	removeBorder();

	// remove show class
    removeShow();

	// Add border to current tab
	this.classList.add('tab__border');

	// Grab content item from the DOM
	const tabContentItem = document.querySelector(`#${this.id}__content`);

	// Add show class
	tabContentItem.classList.add('show');
}


// Remove border function
const removeBorder = () =>{
	tabItems.forEach(item => item.classList.remove('tab__border'));
}

// Remove show class function
const removeShow = () =>{
	tabContentItems.forEach(item => item.classList.remove('show'));
}



// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));