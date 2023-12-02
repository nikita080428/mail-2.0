let newsNode = document.querySelector (`#news`);
let specNode = document.querySelector (`#spec`);
let sportNode = document.querySelector (`#sport`);
let girlNode = document.querySelector (`#girl`);
let carNode = document.querySelector (`#car`);
let kinoNode = document.querySelector (`#kino`);
let techNode = document.querySelector (`#tech`);
let gameNode = document.querySelector (`#game`);
let focusNode = document.querySelector (`#focus`);
let healNode = document.querySelector (`#heal`);
let petNode = document.querySelector (`#pet`);

let news_contentNode = document.querySelector(`#news_content`)

specNode.addEventListener (`click`, function(){
specNode.classList.add(`news_button_active`)
news_contentNode.innerHTML  =   `
<li>Путин заявил о сражении России в СВО за свободу всего мира</li>
<li>Объяснено скопление крупной группировки ВСУ под Горловкой</li>
<li>ВСУ применяли химоружие для заражения еды, сообщили в Минобороны</li>
<li>ВСУ сбросили боеприпас с беспилотника на Ясиноватую</li>
<li>Экипажи Ми-28Н ВКС России уничтожили опорные пункты ВСУ на донецком направлении</li>
<li>Российское подразделение за два дня сбило восемь украинских FPV-дронов</li>
<li>ВС России отбили на Купянском направлении контратаки ВСУ</li>
<li>МО РФ сообщило об уничтожении опорных пунктов ВСУ из «Тюльпана» на купянском направлении</li>
<li>СМИ: Киев изменит правила призыва, чтобы привлечь тех, кто боится передовой</li>
<li>Ракеты РСЗО ударили по зданию химчистки и магазину в Донецке</li>
<li>Минобороны сообщило о предотвращении атаки беспилотника над Рязанской областью</li>
<li>Американский эксперт заявил о праве России сбивать спутники Starlink</li>
<li>ВСУ впервые за 19 часов обстреляли ДНР</li>
<li>Столтенберг назвал предотвращение военной эскалации с РФ основной задачей НАТО</li>`
})