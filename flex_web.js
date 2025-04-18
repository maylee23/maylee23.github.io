// 모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article")
console.log(items);

const aside = document.querySelector("aside");
console.log(aside);
// const close = aside.querySelector("span");
// console.log(close);

// items를 반복문
for (let el of items) {
    // 현재 반복이 돌고 있는 article 요소에 mouseenter event 발생시
    el.addEventListener("mouseenter", e=>{
        // 자식인 video 요소 재생
        e.currentTarget.querySelector("video").play();
    });

    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });

    // el.addEventListener("click", e=>{
    //     // 제목과 본문 내용, video 요소 값을 변수에 저장
    //     let title = e.currentTarget.querySelector("h2").innerText;
    //     let txt = e.currentTarget.querySelector("p").innerText;
    //     let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
    //     console.log(`title: ${title}, txt: ${txt}, vidsrc:${vidSrc}`);

    //     // aside 요소 안쪽의 contents에 위의 변수 내용을 적용
    //     aside.querySelector("h1").innerText = title;
    //     aside.querySelector("p").innerText = txt;
    //     aside.querySelector("video").setAttribute("src", vidSrc);

    //     // 클릭시 aside 요소 안쪽의 동영상 재생 & aside 요소에 "on" 추가 & 팝업
    //     aside.querySelector("video").play();
    //     aside.classList.add("on");
    // });

    // // close 클릭시 aside 요소에 "on"을 제거(비활성화) & 비디오 일시 정지
    // close.addEventListener("click", ()=>{
    //     aside.classList.remove("on")
    //     aside.querySelector("video").pause();
    // })
};

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const readMoreBtn = document.querySelector('.read-more');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopup = document.querySelector('.close-popup');

    console.log('Elements:', {
        readMoreBtn,
        popupOverlay,
        closePopup
    });

    if (readMoreBtn && popupOverlay && closePopup) {
        readMoreBtn.addEventListener('click', function(e) {
            console.log('Read More clicked');
            e.preventDefault();
            popupOverlay.style.display = 'flex';
            console.log('Popup display set to flex');
        });

        closePopup.addEventListener('click', function() {
            console.log('Close button clicked');
            popupOverlay.style.display = 'none';
        });

        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                console.log('Overlay clicked');
                popupOverlay.style.display = 'none';
            }
        });
    } else {
        console.error('Some elements not found:', {
            readMoreBtn: !!readMoreBtn,
            popupOverlay: !!popupOverlay,
            closePopup: !!closePopup
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const readMoreBtn2 = document.querySelector('.read-more2');
    const popupOverlay2 = document.querySelector('.popup-overlay2');
    const closePopup2 = document.querySelector('.close-popup2');

    console.log('Elements:', {
        readMoreBtn2,
        popupOverlay2,
        closePopup2
    });

    if (readMoreBtn2 && popupOverlay2 && closePopup2) {
        readMoreBtn2.addEventListener('click', function(e) {
            console.log('Read More clicked');
            e.preventDefault();
            popupOverlay2.style.display = 'flex';
            console.log('Popup display set to flex');
        });

        closePopup2.addEventListener('click', function() {
            console.log('Close button clicked');
            popupOverlay2.style.display = 'none';
        });

        popupOverlay2.addEventListener('click', function(e) {
            if (e.target === popupOverlay2) {
                console.log('Overlay clicked');
                popupOverlay2.style.display = 'none';
            }
        });
    } else {
        console.error('Some elements not found:', {
            readMoreBtn2: !!readMoreBtn2,
            popupOverlay2: !!popupOverlay2,
            closePopup2: !!closePopup2
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const readMoreBtn3 = document.querySelector('.read-more3');
    const popupOverlay3 = document.querySelector('.popup-overlay3');
    const closePopup3 = document.querySelector('.close-popup3');

    console.log('Elements:', {
        readMoreBtn3,
        popupOverlay3,
        closePopup3
    });

    if (readMoreBtn3 && popupOverlay3 && closePopup3) {
        readMoreBtn3.addEventListener('click', function(e) {
            console.log('Read More clicked');
            e.preventDefault();
            popupOverlay3.style.display = 'flex';
            console.log('Popup display set to flex');
        });

        closePopup3.addEventListener('click', function() {
            console.log('Close button clicked');
            popupOverlay3.style.display = 'none';
        });

        popupOverlay3.addEventListener('click', function(e) {
            if (e.target === popupOverlay3) {
                console.log('Overlay clicked');
                popupOverlay3.style.display = 'none';
            }
        });
    } else {
        console.error('Some elements not found:', {
            readMoreBtn3: !!readMoreBtn3,
            popupOverlay3: !!popupOverlay3,
            closePopup3: !!closePopup3
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    const readMoreBtn4 = document.querySelector('.read-more4');
    const popupOverlay4 = document.querySelector('.popup-overlay4');
    const closePopup4 = document.querySelector('.close-popup4');

    console.log('Elements:', {
        readMoreBtn4,
        popupOverlay4,
        closePopup4
    });

    if (readMoreBtn4 && popupOverlay4 && closePopup4) {
        readMoreBtn4.addEventListener('click', function(e) {
            console.log('Read More clicked');
            e.preventDefault();
            popupOverlay4.style.display = 'flex';
            console.log('Popup display set to flex');
        });

        closePopup4.addEventListener('click', function() {
            console.log('Close button clicked');
            popupOverlay4.style.display = 'none';
        });

        popupOverlay4.addEventListener('click', function(e) {
            if (e.target === popupOverlay4) {
                console.log('Overlay clicked');
                popupOverlay4.style.display = 'none';
            }
        });
    } else {
        console.error('Some elements not found:', {
            readMoreBtn4: !!readMoreBtn4,
            popupOverlay4: !!popupOverlay4,
            closePopup4: !!closePopup4
        });
    }
});