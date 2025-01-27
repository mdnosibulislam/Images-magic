<html><body>function previewImage() {
    const fileInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block'; // Show the preview image
        };
        reader.readAsDataURL(file);
    }
}

function convertImage() {
    const fileInput = document.getElementById('imageInput');
    const formatSelect = document.getElementById('formatSelect');
    const canvas = document.getElementById('canvas');
    const downloadLink = document.getElementById('downloadLink');
    const convertButton = document.getElementById('convertButton');
    const loadingMessage = document.getElementById('loadingMessage');
    const spinner = document.getElementById('spinner');

    // Disable download link and show loading spinner/message
    downloadLink.classList.remove('active');
    downloadLink.style.pointerEvents = 'none';
    convertButton.style.display = 'none'; // Hide the Convert Image button
    loadingMessage.style.display = 'block';
    spinner.style.display = 'inline-block';

    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            // Set canvas size to the image's dimensions
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image onto the canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Get the output format selected by the user
            const outputFormat = formatSelect.value;

            // Convert the image and generate the downloadable URL
            const convertedImageUrl = canvas.toDataURL(outputFormat);

            // Set the download link
            downloadLink.href = convertedImageUrl;
            downloadLink.download = `converted_image.${outputFormat.split('/')[1]}`;

            // Hide loading spinner and show the download button
            loadingMessage.style.display = 'none';
            spinner.style.display = 'none';
            downloadLink.style.display = 'inline'; // Show the download link
            downloadLink.classList.add('active'); // Activate the download link
            downloadLink.style.pointerEvents = 'auto'; // Enable click
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}</body></html>
