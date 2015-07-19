var canvasPass = $('#canvas-pass');
var imagePass = $('#image-pass');
var canvasFail = $('#canvas-fail');
var imageFail = $('#image-fail');

canvasPass.sketch({
    defaultColor: '#00FF00',
    defaultSize: 15
});

canvasFail.sketch({
    defaultColor: '#FF0000',
    defaultSize: 15
});

function updateImages() {
	console.log('Copying images...');
	copyCanvas(canvasPass, imagePass);
	copyCanvas(canvasFail, imageFail);
}

function copyCanvas(source, destination) {
	var destCtx = destination[0].getContext("2d");
	var sourceCtx = source[0].getContext('2d');
	destCtx.drawImage(sourceCtx.canvas, 0, 0, destination.height(), destination.height());
}