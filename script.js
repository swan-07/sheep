document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');


  const originalheart = document.querySelector('.heart');
  originalheart.addEventListener('click', () => {
    setInterval(showNextText(), 1000); 
  });

});


const popupTexts = [
    'baa',
    'ba',
    'b'
];
let textIndex = 0;
let popup;

function showNextText() {
  popup = window.open('', Math.random(), 'width=300,height=200');
  popup.document.write(`
                <html>
                    <head>
                        <title>Popup</title>
                    </head>
                    <body>
                        <p id="popupText">${popupTexts[textIndex]}</p>
                        <script>
                            document.body.onmouseover = function() {
                                window.opener.alert("baa");
                                movePopup();
                            };
                        </script>
                    </body>
                </html>
            `);

  textIndex = (textIndex + 1) % popupTexts.length;

  setInterval(movePopup, 1000); 

}

function movePopup() {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const randomX = Math.floor(Math.random() * (screenWidth - 300)); // Subtracting popup width
    const randomY = Math.floor(Math.random() * (screenHeight - 200)); // Subtracting popup height
    popup.moveTo(randomX, randomY);
}
