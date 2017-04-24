window.addEventListener("load", function(event) {

  function createHeader() {
    var frag = document.createDocumentFragment();

    var header = document.createElement("header");
    var nav = document.createElement("nav");
    var navLeft = document.createElement("div");
    navLeft.classList.add("nav");
    navLeft.classList.add("nav-left");

    var aLogo = document.createElement("a");
    aLogo.setAttribute("id", "logo");
    navLeft.appendChild(aLogo);
    var imgLogo = document.createElement("img");
    imgLogo.setAttribute("src", "assets/img/logo.png");
    imgLogo.setAttribute("alt", "logo");
    aLogo.appendChild(imgLogo);

    var lineNav = document.createElement("div");
    lineNav.classList.add("line-separador");
    navLeft.appendChild(lineNav);

    var aCoders = document.createElement("a");
    navLeft.appendChild(aCoders);
    var imgCoders = document.createElement("img");
    imgCoders.setAttribute("src", "assets/img/coders.png");
    imgCoders.setAttribute("alt", "coders");
    aCoders.appendChild(imgCoders);

    var twitterNav = document.createElement("a");
    twitterNav.classList.add("icon");
    twitterNav.classList.add("icon-twitter-with-circle");
    navLeft.appendChild(twitterNav);

    var fbNav = document.createElement("a");
    fbNav.classList.add("icon");
    fbNav.classList.add("icon-facebook-with-circle");
    navLeft.appendChild(fbNav);


    var navRight = document.createElement("div");
    navRight.classList.add("nav");
    navRight.classList.add("nav-right");
    var iconEdit = document.createElement("a");
    iconEdit.classList.add("icon");
    iconEdit.classList.add("edit");
    iconEdit.innerText = "Edit";
    navRight.appendChild(iconEdit);

    var iconSearch = document.createElement("a");
    iconSearch.classList.add("icon");
    iconSearch.classList.add("icon-search");
    navRight.appendChild(iconSearch);

    var elipse5 = document.createElement("div");
    elipse5.classList.add("elipse");
    navRight.appendChild(elipse5);
    var elipseSpan = document.createElement("span");
    var num = document.createTextNode("5");
    elipseSpan.appendChild(num);
    elipse5.appendChild(elipseSpan);

    var elipseImg = document.createElement("div");
    elipseImg.classList.add("elipse");
    navRight.appendChild(elipseImg);
    var imgTas = document.createElement("img");
    imgTas.setAttribute("src", "assets/img/meche.jpg");
    imgTas.setAttribute("alt", "mercedes");
    elipseImg.appendChild(imgTas);

    var logoLab = document.createElement("div");
    navRight.appendChild(logoLab);
    var imgLab = document.createElement("img");
    imgLab.setAttribute("src", "assets/img/laboratoria.png");
    imgLab.setAttribute("alt", "logo-laboratoria");
    logoLab.appendChild(imgLab);

    nav.appendChild(navLeft);
    nav.appendChild(navRight);
    header.appendChild(nav);
    frag.appendChild(header);
    document.body.appendChild(frag);
  }
  createHeader();

  function createBlog() {
    var fragBlog = document.createDocumentFragment();
    var blog = document.createElement("section");
    blog.classList.add("blog");
    var perfil = document.createElement("section");
    perfil.classList.add("perfil");

    var photoPerfil = document.createElement("div");
    photoPerfil.classList.add("photo-perfil");
    perfil.appendChild(photoPerfil);
    var imgPerfil = document.createElement("img");
    imgPerfil.setAttribute("src", "assets/img/meche.jpg");
    imgPerfil.setAttribute("alt", "mercedes-perfil");
    photoPerfil.appendChild(imgPerfil);

    var textPerfil = document.createElement("div");
    textPerfil.classList.add("tex-perfi");
    perfil.appendChild(textPerfil);
    var perfilH4 = document.createElement("h4");
    textPerfil.appendChild(perfilH4);
    var h4Text = document.createTextNode("Mercedes Zubieta");
    perfilH4.appendChild(h4Text);
    var p1 = document.createElement("p");
    p1.innerText = "Front End Developer. Trabajando para ver a más mujeres en el mundo de la programación.";
    textPerfil.appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerText = "Mar 21 - 6 min read";
    textPerfil.appendChild(p2);

    var article = document.createElement("article");
    var h1 = document.createElement("h1");
    h1.innerText = "Hazlo con estilo: tipografías, iconos y sprite";
    article.appendChild(h1);
    var articleP = document.createElement("p");
    var articleSpan = document.createElement("span");
    articleSpan.classList.add("italic");
    articleSpan.innerText = "¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar?";
    articleP.innerText = "Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, "
                        + articleSpan.innerText + " Tengo muchas preguntas y pocas respuestas!!";
    article.appendChild(articleP);

    blog.appendChild(perfil);
    blog.appendChild(article);
    fragBlog.appendChild(blog);
    document.body.appendChild(fragBlog);
  }
  createBlog();

  function createFooter() {
    var fragFooter = document.createDocumentFragment();
    var footer = document.createElement("footer");

    var footerLeft = document.createElement("div");
    footerLeft.classList.add("footer-left");
    var aHeart = document.createElement("a");
    aHeart.classList.add("icon-heart2");
    footerLeft.appendChild(aHeart);

    var aComment = document.createElement("a");
    aComment.classList.add("icon-comment");
    footerLeft.appendChild(aComment);

    var footerRight = document.createElement("div");
    footerRight.classList.add("footer-right");
    var aTwitt = document.createElement("a");
    aTwitt.classList.add("icon-twitter");
    footerRight.appendChild(aTwitt);

    var aFace = document.createElement("a");
    aFace.classList.add("icon-facebook");
    footerRight.appendChild(aFace);

    var aMark = document.createElement("a");
    aMark.classList.add("icon-bookmark");
    footerRight.appendChild(aMark);

    var lineFooter = document.createElement("div");
    lineFooter.classList.add("line-separador");
    footerRight.appendChild(lineFooter);

    var next = document.createElement("div");
    next.classList.add("next");
    footerRight.appendChild(next);
    var pNext = document.createElement("p");
    pNext.classList.add("green");
    pNext.innerText = "Next story";
    next.appendChild(pNext);
    var pNext2 = document.createElement("p");
    pNext2.innerText = "Describiendo el flujo de trabajo en...";
    next.appendChild(pNext2);

    footer.appendChild(footerLeft);
    footer.appendChild(footerRight);
    fragFooter.appendChild(footer);
    document.body.appendChild(fragFooter);
  }
  createFooter();
});
