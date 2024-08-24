    document.getElementById('downloadForm').addEventListener('submit', function (event) {
      event.preventDefault(); 

      const urlInput = document.getElementById('urlInput');
      const urlValue = urlInput.value.trim();

      if (urlValue) {
        const encodedUrl = encodeURIComponent(urlValue);
        // console.log(`Redirecting to: /api/down/media?url=${encodedUrl}`);
        window.location.href = `/api/down/media?url=${encodedUrl}`; 
      } else {
        alert('Please enter a valid URL.');
      }
    });
