(() => {
  "use strict";
  var e, t;
  !(function (e) {
    (e.ADMIN = "ADMIN"), (e.READ_ONLY = "READ_ONLY");
  })(e || (e = {})),
    (function (e) {
      (e.GOLD_USER = "GOLD_USER"),
        (e.SILVER_USER = "SILVER_USER"),
        (e.BRONZE_USER = "BRONZE_USER");
    })(t || (t = {}));
  var a = document.querySelector("#reviews"),
    i = document.querySelector("#returning-user"),
    n = document.querySelector("#user");
  function r(e, t, a) {
    if (e) {
      var i = document.createElement("div");
      (i.innerHTML = a.toString() + "/night"), t.appendChild(i);
    }
  }
  const o = function (e, t, a) {
    (this.src = e), (this.title = t), (this.reviews = a);
  };
  var c,
    l,
    s,
    m,
    d = document.querySelector(".properties"),
    u = document.querySelector(".reviews"),
    y = document.querySelector(".container"),
    g = document.querySelector("button"),
    p = document.querySelector(".footer"),
    v = [
      {
        name: "Sheila",
        stars: 5,
        loyaltyUser: t.GOLD_USER,
        date: "01-04-2021",
      },
      {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: t.BRONZE_USER,
        date: "28-03-2021",
      },
      {
        name: "Omar",
        stars: 4,
        loyaltyUser: t.SILVER_USER,
        date: "27-03-2021",
      },
    ],
    S = {
      firstName: "Bobby",
      lastName: "Brown",
      permissions: e.ADMIN,
      isReturning: !0,
      age: 35,
      stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
    },
    L = [
      {
        image: "images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
          firstLine: "shack 37",
          city: "Bogota",
          code: 45632,
          country: "Colombia",
        },
        contact: [0x662d15b891a9, "marywinkle@gmail.com"],
        isAvailable: !0,
      },
      {
        image: "images/poland-property.jpg",
        title: "Polish Cottage",
        price: 30,
        location: {
          firstLine: "no 23",
          city: "Gdansk",
          code: 343903,
          country: "Poland",
        },
        contact: [0x49cbdd420724e, "garydavis@hotmail.com"],
        isAvailable: !1,
      },
      {
        image: "images/london-property.jpg",
        title: "London Flat",
        price: 25,
        location: {
          firstLine: "flat 15",
          city: "London",
          code: "SW4 5XW",
          country: "United Kingdom",
        },
        contact: [34829374892553, "andyluger@aol.com"],
        isAvailable: !0,
      },
      {
        image: "images/malaysian-hotel.jpeg",
        title: "Malia Hotel",
        price: 35,
        location: {
          firstLine: "Room 4",
          city: "Malia",
          code: 45334,
          country: "Malaysia",
        },
        contact: [60349822083, "lee34@gmail.com"],
        isAvailable: !1,
      },
    ];
  (c = v.length),
    (l = v[0].name),
    v[0].loyaltyUser,
    (s = t.GOLD_USER ? "⭐" : ""),
    (a.innerHTML =
      c.toString() +
      " review" +
      (function (e) {
        return e > 1 || 0 == e ? "s" : "";
      })(c) +
      " | last reviewed by " +
      l +
      " " +
      s),
    (m = S.firstName),
    S.isReturning && (i.innerHTML = "back"),
    (n.innerHTML = m);
  for (var E = 0; E < L.length; E++) {
    var f = document.createElement("div");
    f.classList.add("card"), (f.innerHTML = L[E].title);
    var R = document.createElement("img");
    R.setAttribute("src", L[E].image),
      f.appendChild(R),
      r(S.permissions, f, L[E].price),
      d.appendChild(f);
  }
  var h = 0;
  g.addEventListener("click", function () {
    return (function (e) {
      if (!h) {
        h++;
        for (
          var t = (function (e) {
              return e
                .sort(function (e, t) {
                  return t.stars - e.stars;
                })
                .slice(0, 2);
            })(e),
            a = 0;
          a < t.length;
          a++
        ) {
          var i = document.createElement("div");
          i.classList.add("review-card"),
            (i.innerHTML = t[a].stars + " stars from " + t[a].name),
            u.appendChild(i);
        }
        y.removeChild(g);
      }
    })(v);
  });
  var b = ["London", "11.03", 17];
  p.innerHTML = b[0] + " " + b[1] + " " + b[2] + "°";
  var U = new o("images/italian-property.jpg", "Italian House", [
      { name: "Olive", stars: 5, loyaltyUser: t.GOLD_USER, date: "12-04-2021" },
    ]),
    A = document.querySelector(".main-image"),
    M = document.createElement("img");
  M.setAttribute("src", U.src), A.appendChild(M);
})();
