const items = [
    // ЗАВТРАКИ
    { name: "Блины с мясом", dsk: 490, img: "/zavtraki/1_blini7.jpg", price: 444, category: "zavtrak", subcategory: "blini" },
    { name: "Запеканка творожная", dsk: 250, img: "/zavtraki/2_zapekanka.jpg", price: 182, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    { name: "Блины с Крем чиз и вишней", dsk: 140, img: "/zavtraki/3_blini.jpg", price: 182, category: "zavtrak", subcategory: "blini" },
    { name: "Сырники без добавления сахара", dsk: 214, img: "/zavtraki/4_sirniki.jpg", price: 204, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    { name: "Чебуреки с мясом", dsk: 120, img: "/zavtraki/5_cheburek.jpg", price: 193, category: "zavtrak", subcategory: "vipechka" },
    { name: "Запеканка творожная с черникой", dsk: 250, img: "/zavtraki/6_zapekanka.jpg", price: 213, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    { name: "Блин сырный по-голландски", dsk: 140, img: "/zavtraki/7_blin.jpg", price: 194, category: "zavtrak", subcategory: "blini" },
    { name: "Мини сырники фигурные", dsk: 125, img: "/zavtraki/8_minisirniki.jpg", price: 160, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    { name: "Запеканка творожная с мягким сыром Рикотта", dsk: 200, img: "/zavtraki/9_zapekanka.jpg", price: 192, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    { name: "Запеканка классическая", dsk: 360, img: "/zavtraki/10_zapekanka.jpg", price: 222, category: "zavtrak", subcategory: "sirnikiizapekanki" },
    // САЛАТЫ
    { name: "Салат оливье", dsk: 300, img: "/salati/1_salat.jpg", price: 282, category: "salats", subcategory: "salats" },
    { name: "Салат 'Кальмаровый'", dsk: 180, img: "/salati/2_salat.jpg", price: 266, category: "salats", subcategory: "salats" },
    { name: "Салат Норвежский с лососем", dsk: 180, img: "/salati/3_salat.jpg", price: 277, category: "salats", subcategory: "salats" },
    { name: "Салат с курицей и ананасами", dsk: 180, img: "/salati/4_salat.jpg", price: 202, category: "salats", subcategory: "salats" },
    { name: "Салат с курицей и черносливом", dsk: 170, img: "/salati/5_salat.jpg", price: 194, category: "salats", subcategory: "salats" },
    { name: "Салат с курицей и жареными шампиньонами", dsk: 180, img: "/salati/6_salat.jpg", price: 192, category: "salats", subcategory: "salats" },
    //СУПЫ
    { name: "Суп щавелевый с курицей", dsk: 300, img: "/soups/1_soup.jpg", price: 176, category: "soup", subcategory: "soup" },
    { name: "Суп-пюре с грибами", dsk: 270, img: "/soups/2_soup.jpg", price: 194, category: "soup", subcategory: "soup" },
    { name: "Солянка из семги и форели", dsk: 300, img: "/soups/3_soup.jpg", price: 235, category: "soup", subcategory: "soup" },
    { name: "Суп Куриный с домашней лапшой", dsk: 1000, img: "/soups/4_soup.jpg", price: 423, category: "soup", subcategory: "soup" },
    { name: "Борщ Украинский с курицей", dsk: 1000, img: "/soups/5_soup.jpg", price: 433, category: "soup", subcategory: "soup" },
    { name: "Суп солянка с каперсами", dsk: 270, img: "/soups/6_soup.jpg", price: 194, category: "soup", subcategory: "soup" },
    { name: "Суп Рамен с индейкой", dsk: 400, img: "/soups/7_soup.jpg", price: 268, category: "soup", subcategory: "soup" },
    //ПАСТЫ
    { name: "Паста с лососем в сливочном соусе", dsk: 210, img: "/pasti/1.jpg", price: 277, category: "pasta", subcategory: "pasta" },
    { name: "Паста Карбонара", dsk: 240, img: "/pasti/2.jpg", price: 281, category: "pasta", subcategory: "pasta" },
    { name: "Макароны с курицей и грибами", dsk: 200, img: "/pasti/3.jpg", price: 215, category: "pasta", subcategory: "pasta" },
    { name: "Лазанья мясная", dsk: 230, img: "/pasti/4.jpg", price: 353, category: "pasta", subcategory: "pasta" },
    { name: "Вок фунчоза с креветками", dsk: 200, img: "/pasti/5.jpg", price: 297, category: "pasta", subcategory: "pasta" },
    { name: "Гречневая лапша с индейкой", dsk: 200, img: "/pasti/6.jpg", price: 301, category: "pasta", subcategory: "pasta" },
    { name: "Спагетти Болоньезе", dsk: 260, img: "/pasti/7.jpg", price: 204, category: "pasta", subcategory: "pasta" },
    { name: "Лапша удон Овощи и курица", dsk: 200, img: "/pasti/8.jpg", price: 237, category: "pasta", subcategory: "pasta" },
    //Сэндвичи и шаурма
    { name: "Шаурма грузинская", dsk: 240, img: "/sandwitch/1.jpg", price: 293, category: "shaurmandsand", subcategory: "shaurma" },
    { name: "Паровая булочка с курицей", dsk: 160, img: "/sandwitch/2.jpg", price: 227, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Клаб-сэндвич с ветчиной и сыром", dsk: 180, img: "/sandwitch/3.jpg", price: 182, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Сэндвич ролл Гавайский с курицей", dsk: 190, img: "/sandwitch/4.jpg", price: 215, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Сэндвич прованский с индейкой и пикантным соусом", dsk: 200, img: "/sandwitch/5.jpg", price: 235, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Сэндвич ролл с горбушей и яйцом", dsk: 155, img: "/sandwitch/6.jpg", price: 215, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Сэндвич ролл с омлетом, ветчиной и сыром", dsk: 170, img: "/sandwitch/7.jpg", price: 202, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Сэндвич ролл с курицей, кабачком и соусом песто", dsk: 185, img: "/sandwitch/8.jpg", price: 217, category: "shaurmandsand", subcategory: "sendwitch" },
    { name: "Шаурма с курицей", dsk: 230, img: "/sandwitch/9.jpg", price: 215, category: "shaurmandsand", subcategory: "shaurma" },
    //

    //
];

// CATEGORIES - zavtrak
//SUBCATEGORIES - blini sirnikiizapekanki vipechka

// { name: "", dsk: , img: "/sandwitch/.jpg", price: , category: "shaurmandsand", subcategory: "sendwitch" },

function selectRandom(itemrand) { return itemrand[Math.floor(Math.random() * itemrand.length)]; }

function createItems(divwindow, category, subcategory) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].category == category) {
            if (items[i].subcategory == subcategory) {
                var newdiv = document.createElement('div');
                newdiv.classList.add('tovar');
                newdiv.innerHTML = '<div class="tovar_image" style="background-image: url(./data/images/food/' + items[i].img + ');"></div>' +
                    '<div class="tovar_name" id="name">' + items[i].name + '</div>' +
                    '<div class="tovar_discription" id="dsc">' + items[i].dsk + " г" + '</div>' +
                    '<div class="tovar_forbtnpanel">' +
                    '<button class="tovar_buy_button" onclick="addItemToCart(' + "'" + items[i].name + "'" + ');">В корзину</button>' +
                    '<div class="tovar_price" id="price">' + items[i].price + "₽" + '</div></div>';
                document.getElementById(divwindow).appendChild(newdiv);
            }
        }
    }
}

function removeItems(category) {

}

function sort(category) {
    items.sort(function (a, b) {
        return a.price - b.price;
    });
}

createItems("tovar_zavtraki_blini", "zavtrak", "blini")
createItems("tovar_zavtraki_sirniki", "zavtrak", "sirnikiizapekanki")
createItems("tovar_zavtraki_vipechka", "zavtrak", "vipechka")

createItems("tovar_salats_f", "salats", "salats")

createItems("tovar_soups_f", "soup", "soup")

createItems("tovar_pasta_f", "pasta", "pasta")

createItems("tovar_shaurma_sh", "shaurmandsand", "shaurma")
createItems("tovar_shaurma_se", "shaurmandsand", "sendwitch")


let cart = new Array();
var summ = 0;

function addItemToCart(itemname) {
    cart.push(itemname);
    var item = items.find(({ name }) => name === itemname);
    summ = summ + Number(item.price);
    document.getElementById("cartval").innerHTML = cart.length;
}

function cartfunc() {
    alert(cart + "    summa: " + summ);
}

function hidepanel(elemid) {
    el = document.getElementById(elemid)

    //if (el.style.transform == 'scaleY(0)') {
    if (el.style.display == 'none') {
        el.style.display = 'contents';
        //document.getElementById(elemid).style.transform = "scaleY(1)";
        //document.getElementById(elemid).style.height = "auto";
    } else {
        el.style.display = 'none';
        //document.getElementById(elemid).style.transform = "scaleY(0)";
        //document.getElementById(elemid).style.height = "0%";
    }
}

function openAccount(fff) {
    el = document.getElementById(fff);

    if (el.style.display == 'none')
        el.style.display = 'flex';
    else
        el.style.display = 'none';

}
openAccount('account');
openAccount('bron');