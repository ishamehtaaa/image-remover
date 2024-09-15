(function() {
  const removeImages = (node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName.toLowerCase() === 'img') {
        node.remove();
      } else {
        node.querySelectorAll('img').forEach(img => img.remove());
      }
    }
  };

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(removeImages);
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Remove any existing images
  document.querySelectorAll('img').forEach(img => img.remove());
})();

