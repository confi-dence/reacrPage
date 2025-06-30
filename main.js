const openModal = document.querySelectorAll('.openModal'),
ModalParent = document.getElementById('ModalParent'),
closeds = document.getElementById('closes'),
 input = document.getElementById("searchInput"),
 resultsDiv = document.getElementById("results"),
 CloseModal = document.getElementById("CloseModal"),
 OpenMenu = document.getElementById("OpenMenu"),
 menu = document.getElementById("menu"),
 LightOrDark = document.getElementById("LightOrDark")
 

 image1  = "url('./images/menuB.png')"
 image2 = "url('./images/cross.png')"
 image3 = "url('./images/menu.png')"
 image4 = "url('./images/crossWhite.png')"
 image5 = "url('./images/reactB.png')"
 image6 = "url('./images/searchB.png')"
 image7 = "url('./images/githubw.png')"
 image8 = "url('./images/moon.png')"
 image9 = "url('./images/sun.png')"
//  image4 = "url('./images/crossWhite.png')"
 

// openModal.addEventListener('click', function () {
//         ModalParent.style.display = 'flex'
//     })
CloseModal.addEventListener('click' , function name(params) {
  ModalParent.style.display = 'none'
  
})
    openModal.forEach(search => {
      search.addEventListener('click', function (params) {
        ModalParent.style.display = 'flex'
        // menu.style.display = 'none'
      })
    })
    // OpenMenu.addEventListener('click', function () {
    //   menu.style.display = 'none'
    // })
    function menuCloseOpen() {
      let ChangeMenuImages = OpenMenu.style.backgroundImage;
      const isLight = document.body.classList.contains('LightMode');
    
      if (ChangeMenuImages.includes('menuB.png') || ChangeMenuImages.includes('menu.png')) {
        menu.style.display = 'flex';
        // OpenMenu.style.backgroundImage = image1;
      } else {
        menu.style.display = 'none';
        OpenMenu.style.backgroundImage = isLight ? image3 : image1;
      }
      if (ChangeMenuImages.includes('crossWhite.png') || ChangeMenuImages.includes('cross.png') ) {
        // OpenMenu.style.backgroundImage = image1;
        menu.style.display = 'none'
      }else{
        menu.style.display = 'flex'
        OpenMenu.style.backgroundImage = isLight ? image2 : image4;
      }
     
    }
    
    OpenMenu.addEventListener('click', menuCloseOpen)
    window.addEventListener('click', function (event) {
        if (event.target === ModalParent) {
            ModalParent.style.display = 'none'
        }
    })

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key.toLowerCase() === 'k') {
          event.preventDefault(); 
     
          ModalParent.style.display = 'flex';
        }
      });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          event.preventDefault(); // Prevent browser default (like search)
          ModalParent.style.display = 'none';
        }
      });



const links = [
  { word: "Learn", url: "" },
  { word: "Reference", url: "" },
  { word: "Community", url: "" },
  { word: "Blog", url: "" },

];


input.addEventListener("input", () => {
  const query = input.value.toUpperCase( ).toLowerCase().trim()
  resultsDiv.innerHTML = ""; // Clear previous results

  if (query.length === 0) return;

  const matches = links.filter(item => item.word.includes(query));

  matches.forEach(match => {
    const container = document.createElement("div");
    container.className = " flex w-5/6 justify-center items-center hover:bg-gray-800 bg-opacity-10 p-3  rounded-xl mb-2";

    const a = document.createElement("a");
    
    a.href = match.url;
    a.target = "_blank";
    a.textContent = match.word;
    a.className = "text-white font-semibold hover:underline";

    container.appendChild(a);
    resultsDiv.appendChild(container);
  });
});
    

// light nd darkMode


function LightDark(params) {
  document.body.classList.toggle('LightMode')
  OpenMenu.style.backgroundImage = document.body.classList.contains('LightMode')
  if(document.body.classList.contains('LightMode')){
    OpenMenu.style.backgroundImage = image3
    LightOrDark.style.backgroundImage = image8

  }else{
    OpenMenu.style.backgroundImage = image1
    LightOrDark.style.backgroundImage = image9

  }
}
LightOrDark.addEventListener('click' , LightDark)