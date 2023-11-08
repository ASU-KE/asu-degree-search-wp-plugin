import DefaultRfiImage from '../../resources/asu-unity-stack/packages/app-rfi/src/assets/img/WS2-DefaultImagev01-Final.png'

const replaceImageSrc = () => {
	const images = document.querySelectorAll('.container.rfi-container-inner .uds-image-text-block-image-container img');
	images.forEach((image) => {
		image.src = DefaultRfiImage;
	});
}

replaceImageSrc();

