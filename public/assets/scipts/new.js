var modal = document.getElementById('modal-main');
var mask = document.getElementById('modal-mask');
// Get the <span> element that closes the modal
// var fort = document.getElementById('close-modal');
var close_button = document.getElementById('close-photo-modal');
var photo_btn = document.getElementById('photo-button');
// When the user clicks on <span> (x), close the modal
photo_btn.onclick = function () {
	modal_mask.style.display = 'block';
	photo_modal.style.display = 'block';
};

// fort.onclick = function () {
// 	modal.style.display = 'none';
// 	mask.style.display = 'none';
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == mask) {
		modal.style.display = 'none';
		mask.style.display = 'none';
	}
};

function uploadModal() {
	modal.style.display = 'flex';
	mask.style.display = 'flex';
}
