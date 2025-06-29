const openModal = document.querySelectorAll('.openModal'),
ModalParent = document.getElementById('ModalParent'),
closeds = document.getElementById('closes'),
 input = document.getElementById("searchInput"),
 resultsDiv = document.getElementById("results"),
 CloseModal = document.getElementById("CloseModal"),
 OpenMenu = document.getElementById("OpenMenu"),
 menu = document.getElementById("menu")
 

 image1  = "url('./images/menuB.png')"
 image2 = "url('./images/cross.png')"

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
      let ChangeMenuImages = OpenMenu.style.backgroundImage
      if (ChangeMenuImages.includes('menuB.png')) {
        menu.style.display = 'flex'
        OpenMenu.style.backgroundImage = image2
        // menu.src = image2
      }else{
        menu.style.display = 'none'
        // menu.src = image1
        OpenMenu.style.backgroundImage = image1

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
    