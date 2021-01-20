
         $('#open-popup').magnificPopup({
    items: [
      {
        src: 'https://github.com/GooseFabr/GooseFabr.github.io/blob/main/img/hJ-n9Z7aazg.jpg?raw=true',
        title: 'Валя круглишь '
      },
      {
        src: 'https://www.youtube.com/watch?v=YQ4Y6anIbw4',
        type: 'iframe' // this overrides default type
      },
      {
        src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
        type: 'inline'
      },
      {
        src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
        type: 'inline'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});
