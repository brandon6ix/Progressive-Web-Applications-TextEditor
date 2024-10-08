const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Handle the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();

  // Store the event so it can be triggered later
  deferredPrompt = event;

  // Remove the 'hidden' class from the install button, making it visible
  butInstall.style.display = 'block';

  console.log('👍', 'beforeinstallprompt', event);
});

// Implement the click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('👍', 'butInstall-clicked');

  if (!deferredPrompt) {
    return;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  console.log('👍', 'userChoice', outcome);

  // Reset the deferredPrompt variable, as it can only be used once
  deferredPrompt = null;

  // Hide the install button after installation
  butInstall.style.display = 'none';
});

// Handle the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  
  // Clear the install prompt
  deferredPrompt = null;
});

