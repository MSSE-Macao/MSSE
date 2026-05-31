var data = [
{
id: "event1",
title: "家倍愛」家庭性教育活動",
date: "2025-09",
desc: "澳門明愛泉仁樂家庭綜合服務中心將於9-10月期間舉辦「家倍愛」家庭性教育活動",
image: "images/events/event1.jpg",
link: "https://forms.gle/xxxx",
status: "past"
},
{
id: "event2",
title: "E世代的同行秘笈——網友篇",
date: "2024-12-14",
desc: "澳門性教育學會又舉辦會員培訓了！",
image: "images/events/event2.jpg",
status: "past",
gallery: [
"images/events/e2_1.jpg",
"images/events/e2_2.jpg"
]
},
{
id: "event3",
title: "「青少年親密健康關係-教材應用與AI工具教學應用」培訓",
date: "2026-6-6",
desc: `🗣️💥性教育專業培訓又來了！💥
青少年健康親密關係教什麼？如何教？又如何運用 AI 工具進行教學？🤔
🎈歡迎報名參加由澳門性教育學會舉辦的「青少年親密健康關係－教材應用與AI工具教學應用」培訓⭐️，詳情見活動海報。`,
image: "images/events/event3.jpg",
link: "https://docs.google.com/forms/d/e/1FAIpQLSfcNssDkkTZWOisrKNV0Hjn6hEIK8aGJC4VeCx_LRTGgdxqsQ/viewform"
status: "upcoming"
}
];

// 🔥 自動排序（最新在前）
data.sort(function(a,b){
return new Date(b.date) - new Date(a.date);
});

var upcomingHTML = "";
var pastHTML = "";

for(var i = 0; i < data.length; i++){

var e = data[i];
var html = "";

html += "<div class='card'>";
html += "<img class='poster' src='" + e.image + "' onclick='openLightbox(this.src)'>";
html += "<div class='content'>";
html += '<h3 onclick="goDetail(\'' + e.id + '\')">' + e.title + '</h3>';

html += "<p class='date'>📅 " + e.date + "</p>";
html += "<p>" + e.desc + "</p>";

if(e.status === "upcoming"){
if(e.link){
html += "<a href='" + e.link + "' class='button' target='_blank'>立即報名</a>";
}
html += "</div></div>";
upcomingHTML += html;

 
}

if(e.status === "past"){
if(e.gallery){
html += "<div class='gallery'>";
for(var j = 0; j < e.gallery.length; j++){
html += "<img src='" + e.gallery[j] + "' onclick='openLightbox(this.src)'>";
}
html += "</div>";
}
html += "</div></div>";
pastHTML += html;
}

}

// 顯示
document.getElementById('upcoming').innerHTML = upcomingHTML;
document.getElementById('past').innerHTML = pastHTML;

// 🔥 Tab 切換
function showTab(tab){
document.getElementById('upcoming').style.display = tab === 'upcoming' ? 'block' : 'none';
document.getElementById('past').style.display = tab === 'past' ? 'block' : 'none';
}

// 🔥 詳情頁跳轉
function goDetail(id){
window.location.href = "event-detail.html?id=" + id;
}

// 🔥 Lightbox
function openLightbox(src){
document.getElementById("lightbox-img").src = src;
document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
document.getElementById("lightbox").style.display = "none";
}
