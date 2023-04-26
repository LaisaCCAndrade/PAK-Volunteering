function clickMenu() {
  if(itens.style.display == "block") {
    itens.style.display = "none"
  }else{
    itens.style.display = "block"
  }
}

function renderHome() {
  let div = document.createElement("div");
  div.classList.add("home");

  let h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.innerText =
    "Author • Educator Speaker • Social Responsibility Entrepreneur";

  let p = document.createElement("p");
  p.classList.add("paragraph");
  p.innerHTML =
    "<strong>LYLE BENJAMIN</strong> <br /> Founder of NPOs Planned Acts of Kindness One Planet One People & The Collaboration Think Tank Network";

  let div2 = document.createElement("div");
  div2.classList.add("button-default");

  let a = document.createElement("a");
  a.href = "#contact";

  let span = document.createElement("span");
  span.innerText = "CONTACT LYLE";

  let div3 = document.createElement("div");
  div3.classList.add("button-default");
  div3.classList.add("button2");

  let a2 = document.createElement("a");
  a2.href = "https://forms.gle/Y38RKdjaqCASWQR89";

  let span2 = document.createElement("span");
  span2.innerText = "CSR CHECK-UP";

  let div4 = document.createElement("div");
  div4.classList.add("qr-code");

  let img = document.createElement("img");
  img.src = "../src/assets/PAK-APP-QR-CODE-T-150x150.jpg";

  let p2 = document.createElement("p");
  p2.innerText = "Get the PAK APP!";

  let div5 = document.createElement("div")
  div5.classList.add("global")

  let div6 = document.createElement("div")
  div6.classList.add("globals")

  div6.append(div2, div3)
  div5.append(div6, div4)
  div4.append(img, p2);
  a2.appendChild(span2);
  div3.appendChild(a2);
  a.appendChild(span);
  div2.appendChild(a);
  div.append(h1, p, div5);

  let section = document.querySelector("#home");

  section.appendChild(div);

  return section;
}

function renderAbout() {
  let h2 = document.createElement("h2");
  h2.classList.add("title2");
  h2.innerText = "ABOUT";

  let h3 = document.createElement("h3");
  h3.classList.add("subtitle");
  h3.innerText =
    "INSPIRED BY KINDNESS, KIDS & THE QUEST FOR QUALITY OF LIFE FOR ALL.";

  let div = document.createElement("div");
  div.classList.add("about-div");

  let p = document.createElement("p");
  p.classList.add("about-p");
  p.innerText =
    "Hi, my name is Lyle Benjamin. I’m the founder of three nonprofit organizations, 16 Things Kids Can Do, Planned Acts of Kindness, and One Planet One People.";

  let p2 = document.createElement("p");
  p2.classList.add("about-p");
  p2.innerHTML =
    "<strong >I didn’t start out wanting to change the world, I just wanted to repay a debt.</strong> When I was a child, I had a difficult family life and I started working when I was 11 years old in New York City just to get out of the house.";

  let p3 = document.createElement("p");
  p3.classList.add("about-div--p");
  p3.innerText =
    "During the course of my work, I met people who worked in owned other stores on the block and some of these people took an interest in me and would stop by the florist where I work and invite me to lunch where we sit and talk.";

  let p4 = document.createElement("p");
  p4.classList.add("about-div--p");
  p4.innerText =
    "And there I was thinking why are they doing this, I’m an 11–year-old snot nose kid who knows nothing about anything and they’re taking time out of their day to be nice to me. Definitely not the same treatment I was getting at home.";

  let p5 = document.createElement("p");
  p5.classList.add("about-div--p");
  p5.innerText =
    "And this continued with parents of friends, teachers at school, and places where I worked and I grew to realize that these people were really a lifesaver for me. I appreciated their acts of kindness so much that I wanted to become an attorney and devote my life to helping others because of the kindness that I was shown.";

  let p6 = document.createElement("p");
  p6.classList.add("about-div--p");
  p6.innerText =
    "So after going to law school and being offered a job with the Attorney General’s Office in Albany, New York, I decided the profession wasn’t compatible for my goals of helping people.";

  let p7 = document.createElement("p");
  p7.classList.add("about-div--p");
  p7.innerText =
    "I then turned a college sideline business into a full-service design, marketing, and printing company where I created a prototype for a national self-help magazine. I sold my printing business and moved to New York City and pitched it to Time Warner and Kable News. Both companies offered me contracts, and six months later I published “Relationships Today” the first national newsstand magazine exclusively devoted to helping people with all types of relationships: intimate, family, friendship, and work.";

  let p8 = document.createElement("p");
  p8.classList.add("about-div--p");
  p8.innerText =
    "Over the years I’ve done many successful entrepreneurial businesses but then about 12 years ago I realize that I strayed from my original path of helping people. I was making companies look good through my event planning business but that wasn’t what I was supposed to be doing to repay my debt.";

  let p9 = document.createElement("p");
  p9.classList.add("about-div--p");
  p9.innerHTML =
    "So, I gave it all up and started my first nonprofit, <strong>16 Things Kids Can Do</strong>, and then in November 2016 after the election, I realized that the country was going to go down a path that was going to get more and more divisive and people would end up dying because of it.";

  let p10 = document.createElement("p");
  p10.classList.add("about-div--p");
  p10.innerHTML =
    "So I created a program called <strong>Planned Acts of Kindness</strong>, where I gamified Karma, and the more you do the greater your rewards. Over the next couple of years, I added more and more programs based on kindness, and in 2019 Planned Acts became its own nonprofit.";

  let p11 = document.createElement("p");
  p11.classList.add("about-div--p");
  p11.innerHTML =
    "And in that same year, I was asked by Simon property group to create a program for Earth Week, and I created <strong>One Planet One People</strong> and over the next couple years I created more and more programs under <strong>One Planet One People</strong> so that in 2021 it became its own nonprofit also.";

  let p12 = document.createElement("p");
  p12.classList.add("about-div--p");
  p12.innerText =
    "The problems of the world — climate change, pollution, pandemics, war, and social, economic, and health inequities — are not going to be solved by governments and companies alone, they’re going be solved by ordinary people like you and I working together on common causes with a common focus.";

  let p13 = document.createElement("p");
  p13.classList.add("about-div--p");
  p13.innerText =
    "This decade is going to determine Quality of Life for billions of people on the planet. And like it or not we’re all in this together. We must stop the fractional approach institutions and governments use to solve these issues because — as the pandemic has shown — it simply doesn’t work.";

  let p14 = document.createElement("p");
  p14.classList.add("about-div--p");
  p14.innerHTML =
    "We must cooperate to succeed. <br/> We must cooperate to survive.";

  let p15 = document.createElement("p");
  p15.classList.add("about-div--p");
  p15.innerHTML =
    "So, I’ve written a book entitled <strong>ONE: The Fight for Survival of the Human Race</strong> which goes into the 40+ collaborative programs and initiatives that individuals and institutions can use to push back on these global issues and provide quality of life for kids, people, and the planet.";

  let div2 = document.createElement("div");
  div2.classList.add("about--a");

  let a = document.createElement("a");
  a.href = "https://www.lylebenjamin.com/programs/";
  a.innerText = "PROGRAMS";

  let a2 = document.createElement("a");
  a2.href = "https://www.lylebenjamin.com/expertise-page/";
  a2.innerText = "EXPERTISE";

  let a3 = document.createElement("a");
  a3.href = "https://www.lylebenjamin.com/testimonials/";
  a3.innerText = "TESTIMONIALS";

  div2.append(a, a2, a3);
  div.append(p, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);

  let section = document.querySelector(".about");

  section.append(h2, h3, div, div2);

  return section;
}

function renderRestAbout() {
  let div = document.querySelector(".family");

  let img = document.createElement("img");
  img.classList.add("family--photo");
  img.src = "./src/assets/MATT-FAMILY-CROP.jpg";
  img.alt = "Family";

  let p = document.createElement("p");
  p.innerText = "Lyle with his nephew, Matt, and his family";

  let div2 = document.createElement("div");
  div2.classList.add("organizations");

  let img2 = document.createElement("img");
  img2.src = "./src/assets/PAK-LOGO-FINAL-200x200.png";
  img2.alt = "PAK LOGO";

  let img3 = document.createElement("img");
  img3.src = "./src/assets/1POP-ONE-PEOPLE-ONE-PLANET-SEAL-4.5-1-200x200.png";
  img3.alt = "POP ONE PEOPLE ONE PLANET SEAL";

  let div3 =document.createElement("div")
  div3.classList.add("gallery--organization")

  let img4 = document.createElement("img");
  img4.classList.add("things")
  img4.src = "./src/assets/16THINGS-LOGO-200x200.jpg";
  img4.alt = "16THINGS LOGO";

  div3.append(div2, img4)
  div2.append(img2, img3);
  div.append(img, p, div3);

  return div;
}

function renderGallery() {
  let section = document.querySelector("#gallery");

  let div = document.createElement("div");
  div.classList.add("gallery--div");

  let h2 = document.createElement("h2");
  h2.classList.add("title2");
  h2.classList.add("gallery--h2")
  h2.innerText = "GALLERY";

  let h3 = document.createElement("h3");
  h3.classList.add("subtitle");
  h3.innerText =
    "WE DO WHAT WE DO — ALL OVER THE WORLD — FOR PEOPLE JUST LIKE THESE.";

  let p = document.createElement("p");
  p.classList.add("gallery-p");
  p.innerText =
    "Providing Quality of Life Programs that Work for the Betterment of Kids, People & The Planet regardless of Race, Nationality, Religion, Age, Gender, Education or Income.";

  let div2 = document.createElement("div");
  div2.classList.add("carousel");

  let button = document.createElement("button");
  button.classList.add("carousel--button");
  button.innerText = "<";

  let ul = document.createElement("ul");
  ul.classList.add("carousel--ul");
  ul.id = "img";

  let li = document.createElement("li");

  let img = document.createElement("img");
  img.classList.add("transition")
  img.src = "./src/assets/20190426_155243_HDR-800x600-1-200x150.jpg";

  let li2 = document.createElement("li");

  let img2 = document.createElement("img");
  img2.classList.add("transition")
  img2.src = "./src/assets/IMG_9153-800x600-1-200x150.jpg";

  let li3 = document.createElement("li");

  let img3 = document.createElement("img");
  img3.classList.add("transition")
  img3.src = "./src/assets/20190427_155516_HDR-800x600-1-200x150.jpg";

  let li4 = document.createElement("li");

  let img4 = document.createElement("img");
  img4.classList.add("transition")
  img4.src = "./src/assets/IMG_1116-800x600-1-200x150.jpg";

  let li5 = document.createElement("li");

  let img5 = document.createElement("img");
  img5.classList.add("transition")
  img5.src = "./src/assets/IMG_1122-800x600-1-200x150.jpg";

  let li6 = document.createElement("li");

  let img6 = document.createElement("img");
  img6.classList.add("transition")
  img6.src = "./src/assets/IMG_9149-800x600-1-200x150.jpg";

  let li7 = document.createElement("li");

  let img7 = document.createElement("img");
  img7.classList.add("transition")
  img7.src = "./src/assets/IMG_1181-800x600-1-200x150.jpg";

  let button2 = document.createElement("button");
  button2.classList.add("carousel--button-left");
  button2.innerText = ">";

  li7.append(img7);
  li6.append(img6);
  li5.append(img5);
  li4.append(img4);
  li3.append(img3);
  li2.append(img2);
  li.append(img);
  ul.append(li, li2, li3, li4, li5, li6, li7);
  div2.append(button, ul, button2);
  div.append(h2, h3, p, div2);
  section.append(div);

  return section;
}

window.addEventListener("load", function () {
  renderHome();
  renderAbout();
  renderRestAbout();
  renderGallery();
});

// const imgs = document.getElementById("img");
// const img = document.querySelectorAll("#img img");

// let idx = 0;

// function carousel() {
//   idx++;

//   if (idx > img.length - 1) {
//     idx = 0;
//   }

//   imgs.style.transform = `translateX(${-idx * 95}%)`;
// }

// setInterval(carousel, 1800);
