// 모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article")
console.log(items);

const aside = document.querySelector("aside");
console.log(aside);
const close = aside.querySelector("span");
console.log(close);

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

    el.addEventListener("click", e=>{
        // 제목과 본문 내용, video 요소 값을 변수에 저장
        let title = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
        console.log(`title: ${title}, txt: ${txt}, vidsrc:${vidSrc}`);

        // aside 요소 안쪽의 contents에 위의 변수 내용을 적용
        aside.querySelector("h1").innerText = title;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        // 클릭시 aside 요소 안쪽의 동영상 재생 & aside 요소에 "on" 추가 & 팝업
        aside.querySelector("video").play();
        aside.classList.add("on");
    })

    // close 클릭시 aside 요소에 "on"을 제거(비활성화) & 비디오 일시 정지
    close.addEventListener("click", ()=>{
        aside.classList.remove("on")
        aside.querySelector("video").pause();
    })
};