function clickMenu() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
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

  let span3 = document.createElement("span");
  span3.classList.add("material-icons");
  span3.classList.add("vector");
  span3.innerText = "keyboard_arrow_down";

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
  img.src = "./src/assets/PAK-APP-QR-CODE-T-150x150.jpg";

  let p2 = document.createElement("p");
  p2.innerText = "Get the PAK APP!";

  let div5 = document.createElement("div");
  div5.classList.add("global");

  let div6 = document.createElement("div");
  div6.classList.add("globals");

  div6.append(div2, div3);
  div5.append(div6, div4);
  div4.append(img, p2);
  a2.appendChild(span2);
  div3.appendChild(a2);
  a.appendChild(span3);
  span3.append(span);
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

  let div3 = document.createElement("div");
  div3.classList.add("gallery--organization");

  let img4 = document.createElement("img");
  img4.classList.add("things");
  img4.src = "./src/assets/16THINGS-LOGO-200x200.jpg";
  img4.alt = "16THINGS LOGO";

  div3.append(div2, img4);
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
  h2.classList.add("gallery--h2");
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
  button.classList.add("arrow-left");
  button.classList.add("control");
  button.ariaLabel = "Previous image";
  button.innerText = "<";

  let button2 = document.createElement("button");
  button2.classList.add("arrow-right");
  button2.classList.add("control");
  button2.ariaLabel = "Next image";
  button2.innerText = ">";

  let ul = document.createElement("div");
  ul.classList.add("carousel--ul");
  ul.classList.add("carousel-wrapper");
  ul.setAttribute("id", "img");

  let img = document.createElement("img");
  img.classList.add("item");
  img.classList.add("current-item");
  img.setAttribute("id", "slide1");
  img.src = "./src/assets/20190426_155243_HDR-800x600-1-200x150.jpg";

  let img2 = document.createElement("img");
  img2.classList.add("item");
  img2.classList.add("current-item");
  img2.setAttribute("id", "slide2");
  img2.src = "./src/assets/IMG_9153-800x600-1-200x150.jpg";

  let img3 = document.createElement("img");
  img3.classList.add("item");
  img3.classList.add("current-item");
  img3.setAttribute("id", "slide3");
  img3.src = "./src/assets/20190427_155516_HDR-800x600-1-200x150.jpg";

  let img4 = document.createElement("img");
  img4.classList.add("item");
  img4.classList.add("current-item");
  img4.setAttribute("id", "slide4");
  img4.src = "./src/assets/IMG_1116-800x600-1-200x150.jpg";

  let img5 = document.createElement("img");
  img5.classList.add("item");
  img5.classList.add("current-item");
  img5.setAttribute("id", "slide5");
  img5.src = "./src/assets/IMG_1122-800x600-1-200x150.jpg";

  let img6 = document.createElement("img");
  img6.classList.add("item");
  img6.classList.add("current-item");
  img6.setAttribute("id", "slide6");
  img6.src = "./src/assets/IMG_9149-800x600-1-200x150.jpg";

  let img7 = document.createElement("img");
  img7.classList.add("item");
  img7.classList.add("current-item");
  img7.setAttribute("id", "slide7");
  img7.src = "./src/assets/IMG_1181-800x600-1-200x150.jpg";

  ul.append(img, img2, img3, img4, img5, img6, img7);
  div2.append(button, ul, button2);
  div.append(h2, h3, p, div2);
  section.append(div);

  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const item = document.querySelectorAll(".item");
  const maxItems = item.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");

      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }

      if (currentItem >= maxItems) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }

      item.forEach((item) => item.classList.remove("current-item"));
      item[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
      item[currentItem].classList.add("current-item");
    });
  });

  const imagens = document.querySelectorAll(".carousel-wrapper img");
  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      const modal = `
        <div class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
            <button class="btn-close" data-bs-dismiss="modal" arial-label="Fechar">X</button>
            <div class="modal-body">
                <img src="./src/assets/20190426_155243_HDR-800x600-1-200x150.jpg" class="img-fluid">

                <img src="./src/assets/IMG_9153-800x600-1-200x150.jpg">

                <img src="./src/assets/20190427_155516_HDR-800x600-1-200x150.jpg">

                <img src="./src/assets/IMG_1116-800x600-1-200x150.jpg">

                <img src="./src/assets/IMG_1122-800x600-1-200x150.jpg">

                <img src="./src/assets/IMG_9149-800x600-1-200x150.jpg">

                <img src="./src/assets/IMG_1181-800x600-1-200x150.jpg">
              </div>
            </div>
          </div>
        </div>
      `;
      const modalElement = document.createElement("div");
      modalElement.innerHTML = modal;
      document.body.appendChild(modalElement);

      const modalInstance = new bootstrap.Modal(
        modalElement.querySelector(".modal")
      );
      modalInstance.show();

      modalElement
        .querySelector(".modal")
        .addEventListener("hidden.bs.modal", () => {
          document.body.removeChild(modalElement);
        });
    });
  });

  return section;
}

function renderTopics() {
  let section = document.querySelector(".topics");

  let div = document.createElement("div");
  div.setAttribute("id", "topics");
  div.classList.add("topics--div");

  let h2 = document.createElement("h2");
  h2.classList.add("title2");
  h2.innerText = "LYLE’S TOPICS";

  let h3 = document.createElement("h3");
  h3.classList.add("subtitle");
  h3.innerText = "MY MESSAGE TO THE MEDIA.";

  let p = document.createElement("p");
  p.classList.add("topics--p");
  p.innerHTML =
    "Whether <strong>the purpose of your journalism</strong> is to inform, report, influence, persuade or entertain, I propose that there is a critical need for the people and institutions with the power to reach the masses add-in a crucial element of Social Responsibility into their media.";

  let p2 = document.createElement("p");
  p2.classList.add("topics--p");
  p2.innerHTML =
    "<strong>The simple reason is this:</strong> The world is in crisis and this decade will determine quality of life for billions of people on the planet. Whatever new disaster that is unfolding in front of you, you have several choices: 1) report on it and move on; 2) ignore it because it doesn’t fall in your sphere; and 3) report, update and share more content involving this subject.";

  let p3 = document.createElement("p");
  p3.classList.add("topics--p");
  p3.innerText =
    "The limitation with these approaches is that we are at a time when we can no longer afford any delays in pushing back the tipping point issues — climate change, pollution, pandemics, war, and social, economic and health issues — the people and institutions with the power to do something about it are doing nothing at worst, or at best a fraction of what they could and should be doing.";

  let p4 = document.createElement("p");
  p4.classList.add("topics--p");
  p4.innerHTML = "<strong>The Time for Global Citizenship is Now</strong>";

  let p5 = document.createElement("p");
  p5.classList.add("topics--p");
  p5.innerText =
    "Whatever the method, objective or audience of your communication and media I propose a fourth choice: A “One Planet One People” tie-in where you can:";

  let ul = document.createElement("ul");
  ul.classList.add("topics--ul");

  let li = document.createElement("li");
  li.innerText =
    "add the “One Planet One People” seal in the bottom corner of your broadcasts";

  let li2 = document.createElement("li");
  li2.innerText =
    "automatically “Host & Post” the daily Planned Acts of Kindness on your website, newspaper, magazine, bulletin, etc.";

  let li3 = document.createElement("li");
  li3.innerText =
    "add a program logo and link at the end of your media messages";

  let li4 = document.createElement("li");
  li4.innerText = "add a call-to-action campaign";

  let li5 = document.createElement("li");
  li5.innerText =
    "talk with me about developing a custom approach specific for your objectives";

  let p6 = document.createElement("p");
  p6.classList.add("topics--p");
  p6.innerText =
    "In addition to your audience, the benefits to you and your organization are enormous. By your association and support of our NPO’s Quality of Life Mission, your voice and reach will be amplified through positive CRS, HR, PR, Branding and Revenue.";

  let p7 = document.createElement("p");
  p7.classList.add("topics--p");
  p7.innerText =
    "When the survival of the human race depends on it, it is imperative that we give <u>all</u> audiences the opportunity to make choices as well. For its only by working together can we succeed.";

  let p8 = document.createElement("p");
  p8.classList.add("topics--p");
  p8.innerText =
    "So, please ask yourself these questions: Would this be worth doing if it adds to people’s Quality of Life on a local, national, or global scale? Would it be worth doing if it extends the time you have to do what you love for the people you care about?";

  let p9 = document.createElement("p");
  p9.classList.add("topics--p");
  p9.innerHTML = "<strong>The Time to Step-Up & “Be The Hero” is Now</strong>";

  let p10 = document.createElement("p");
  p10.classList.add("topics--p");
  p10.innerText =
    "Please give me the opportunity to connect with your humanity and your audience, and I will give you a show that brings out the passion in your people. With that connection, we may certainly find others that can join the cause and make a planetary difference in the lives of others.";

  let p11 = document.createElement("p");
  p11.classList.add("topics--p");
  p11.innerText =
    "It will only happen because you stepped outside your comfort zone. So, I thank you in advance and I look forward to our collaboration. Thank you.";

  let p12 = document.createElement("p");
  p12.classList.add("topics--p");
  p12.innerHTML = "<strong>Lyle Benjamin</strong>";

  let div2 = document.createElement("div");
  div2.classList.add("button-default-a");

  let a = document.createElement("a");
  a.href = "https://www.lylebenjamin.com/headlines/";
  a.innerText = "RELEVANT HEADLINES IN THE NEWS";

  let span = document.createElement("span");
  span.classList.add("title--grafic");
  span.innerText = "KINDNESS, CIVILITY & QUALITY OF LIFE 100%";

  let div3 = document.createElement("div");
  div3.classList.add("grafics--porcentage");

  let div4 = document.createElement("div");
  div4.classList.add("grafic--porcentage");
  div4.classList.add("skillset");

  let span2 = document.createElement("span");
  span2.classList.add("title--grafic");
  span2.innerText = "SOCIAL, ECONOMIC & HEALTH INEQUALITY REFORMS 92%";

  let div5 = document.createElement("div");
  div5.classList.add("grafics--porcentage");

  let div6 = document.createElement("div");
  div6.classList.add("grafic--porcentage2");
  div6.classList.add("skillset");

  let span3 = document.createElement("span");
  span3.classList.add("title--grafic");
  span3.innerText = "SOLUTIONS TO THE TIPPING POINT ISSUES 96%";

  let div7 = document.createElement("div");
  div7.classList.add("grafics--porcentage");

  let div8 = document.createElement("div");
  div8.classList.add("grafic--porcentage3");
  div8.classList.add("skillset");

  let span4 = document.createElement("span");
  span4.classList.add("title--grafic");
  span4.innerText = "SOLVING SUSTAINABILITY & THE UN 17 SDGs 94%";

  let div9 = document.createElement("div");
  div9.classList.add("grafics--porcentage");

  let div10 = document.createElement("div");
  div10.classList.add("grafic--porcentage4");
  div10.classList.add("skillset");

  let span5 = document.createElement("span");
  span5.classList.add("title--grafic");
  span5.innerText =
    "SOURCING GAME-CHANGING SUSTAINABLE & GREEN PRODUCTS, SERVICES & GOODS 88%";

  let div11 = document.createElement("div");
  div11.classList.add("grafics--porcentage");

  let div12 = document.createElement("div");
  div12.classList.add("grafic--porcentage5");
  div12.classList.add("skillset");

  let span6 = document.createElement("span");
  span6.classList.add("title--grafic");
  span6.innerText = "CREATING WORK/LIFE BALANCE 96%";

  let div13 = document.createElement("div");
  div13.classList.add("grafics--porcentage");

  let div14 = document.createElement("div");
  div14.classList.add("grafic--porcentage6");
  div14.classList.add("skillset");

  let span7 = document.createElement("span");
  span7.classList.add("title--grafic");
  span7.innerText = "GROUNDBREAKING MENTORSHIP & LEADERSHIP TRAINING 92%";

  let div15 = document.createElement("div");
  div15.classList.add("grafics--porcentage");

  let div16 = document.createElement("div");
  div16.classList.add("grafic--porcentage7");
  div16.classList.add("skillset");

  let span8 = document.createElement("span");
  span8.classList.add("title--grafic");
  span8.innerText = "BOOSTING CSR, HR, PR, BRANDING, REVENUE & ROI 98%";

  let div17 = document.createElement("div");
  div17.classList.add("grafics--porcentage");

  let div18 = document.createElement("div");
  div18.classList.add("grafic--porcentage8");
  div18.classList.add("skillset");

  let p13 = document.createElement("p");
  p13.classList.add("topics--p");
  p13.classList.add("strong");
  p13.innerHTML = "<strong>QUALITY OF LIFE FOR ALL.</strong>";

  let div19 = document.createElement("div");
  div19.classList.add("about--a");

  let a4 = document.createElement("a");
  a4.href = "https://www.lylebenjamin.com/programs/";
  a4.innerText = "PROGRAMS";

  let a2 = document.createElement("a");
  a2.href = "https://www.lylebenjamin.com/expertise-page/";
  a2.innerText = "EXPERTISE";

  let a3 = document.createElement("a");
  a3.href = "https://www.lylebenjamin.com/testimonials/";
  a3.innerText = "TESTIMONIALS";

  let div20 = document.createElement("div");
  div20.classList.add("importance");

  let h5 = document.createElement("h5");
  h5.innerText = "The Importance of Embracing Change Culture & Collaboration";

  let p14 = document.createElement("p");
  p14.classList.add("topics--p2");
  p14.innerHTML = "<strong>Open Letter: </strong>";

  let p15 = document.createElement("p");
  p15.classList.add("topics--p2");
  p15.innerText =
    "This letter took me ten years to write, but nothing worthwhile is ever really easy. It takes effort. Reading this will only take about 2-minutes of your time, but it still won’t be easy.";

  let p16 = document.createElement("p");
  p16.classList.add("topics--p2");
  p16.innerText =
    "Understanding the systems created to solve pressing social problems on a large scale isn’t easy. And going from understanding to action to help solve these issues is even harder.";

  let p17 = document.createElement("p");
  p17.classList.add("topics--p2");
  p17.innerText =
    "The biggest obstacle to us ever being really successful is that we use a fractional approach to solving global social issues. It hasn’t worked in the past, it’s not working today, and it won’t work in the future.";

  let p18 = document.createElement("p");
  p18.classList.add("topics--p2");
  p18.innerText =
    "Look no further than our response to the pandemic, and you’ll see what I mean. And that’s how we’re trying to solve the other tipping point issues of climate change, pollution, overpopulation, war, and terrorism.";

  let p19 = document.createElement("p");
  p19.classList.add("topics--p2");
  p19.innerText =
    "The fractional approach won’t work with these issues as well. The world will be exposed to the same deadly consequences as it has from COVID-19 … loss of quality of life for billions of people that results in poverty, starvation, sickness, and death.";

  let p20 = document.createElement("p");
  p20.classList.add("topics--p2");
  p20.innerText =
    "My name is Lyle Benjamin, and I’ve spent the last ten years developing social responsibility systems that are designed to work from the grassroots up by engaging individuals on a collective basis to the top-down by working with institutions.";

  let p21 = document.createElement("p");
  p21.classList.add("topics--p2");
  p21.innerText =
    "Planned Acts of Kindness and One Planet One People are built on the principles of collaboration, and our programs and initiatives are fully aligned with the United Nations’ 17 SDGs (Sustainable Development Goals) of 2030.";

  let p22 = document.createElement("p");
  p22.classList.add("topics--p2");
  p22.innerText =
    "Only by working together will we have a chance of pushing back against the tipping points that will end the quality of life on this planet.";

  let p23 = document.createElement("p");
  p23.classList.add("topics--p2");
  p23.innerText =
    "Do you have an open mind where we can work together on solving these problems?";

  let p24 = document.createElement("p");
  p24.classList.add("topics--p2");
  p24.innerText =
    "Do you have “The Right Stuff?” There are five qualities and characteristics — desire, determination, willingness to learn, willingness to take action, and commitment to put in both time & effort — you need to develop to move from being an ordinary individual into someone who really wants to be an influencer/hero and make things happen in a big way.";

  let p25 = document.createElement("p");
  p25.classList.add("topics--p2");
  p25.innerText =
    "Are you frustrated enough, are you upset enough, are you scared enough about our future, that you’re ready to go down a different path?";

  let p26 = document.createElement("p");
  p26.classList.add("topics--p2");
  p26.innerText =
    "Are you ready to make a difference? Are you ready to “Be The Hero”? If you are, then all you have to do is take that first step: Decide to collaborate and contact me.";

  let p27 = document.createElement("p");
  p27.classList.add("topics--p2");
  p27.innerText =
    "We’re all in this together. One Planet One People. Let’s make it happen.";

  let p28 = document.createElement("p");
  p28.classList.add("topics--p2");
  p28.innerText = "Stay safe. Stay well.";

  let p29 = document.createElement("p");
  p29.classList.add("topics--p2");
  p29.innerText =
    "Lyle Benjamin Planned Acts of Kindness One Planet One People 212 213-0257";

  let a5 = document.createElement("a");
  a5.classList.add("suport");
  a5.href = "mailto:Support@PlannedActs.Org";
  a5.innerText = "Support@PlannedActs.Org";

  div20.append(
    h5,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p29,
    a5
  );
  div19.append(a4, a2, a3);
  div17.append(div18);
  div15.append(div16);
  div13.append(div14);
  div11.append(div12);
  div9.append(div10);
  div7.append(div8);
  div5.append(div6);
  div3.append(div4);
  div2.append(a);
  ul.append(li, li2, li3, li4, li5);
  div.append(
    h2,
    h3,
    p,
    p2,
    p3,
    p4,
    p5,
    ul,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    div2,
    span,
    div3,
    span2,
    div5,
    span3,
    div7,
    span4,
    div9,
    span5,
    div11,
    span6,
    div13,
    span7,
    div15,
    span8,
    div17,
    p13,
    div19
  );
  section.append(div, div20);

  return section;
}

window.addEventListener("load", function () {
  renderHome();
  renderAbout();
  renderRestAbout();
  renderGallery();
  renderTopics();
});
