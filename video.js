function adjustVideoOnOrientation() {
        const container = document.querySelector('.video-container');
        const iframe = container.querySelector('iframe');

        // Check if device is in landscape or portrait
        if (window.innerWidth > window.innerHeight) {
            console.log('Landscape mode detected');
            // Adjust iframe for landscape if needed
            iframe.style.width = '100vh';
            iframe.style.height = '56.25vh';
        } else {
            console.log('Portrait mode detected');
            // Adjust iframe for portrait
            iframe.style.width = '100vw';
            iframe.style.height = '56.25vw';
        }
    }

    // Attach event listener for resize and orientation change
    window.addEventListener('resize', adjustVideoOnOrientation);
    window.addEventListener('orientationchange', adjustVideoOnOrientation);

    // Initial adjustment
    adjustVideoOnOrientation();

