var songs = {
  name: [
    "Like OOH-AHH",
    "What is Love?",
    "YES or YES",
    "Dance The Night Away",
    "LIKEY",
    "SOLO",
    "Kill This Love",
    "DDU-DU DDU-DU",
    "LOVE SCENARIO",
    "D (Half Moon)",
    "Crashing",
  ],
  artists: [
    "TWICE",
    "TWICE",
    "TWICE",
    "TWICE",
    "TWICE",
    "JENNIE",
    "BLACKPINK",
    "BLACKPINK",
    "iKON",
    "DEAN ft. Gaeko",
    "ILLENIUM ft. Bahari",
  ],
  lengths: [
    "4:31",
    "3:43",
    "4:28",
    "4:09",
    "3:41",
    "2:56",
    "3:13",
    "3:35",
    "3:31",
    "3:51",
    "3:51",
  ],
  links: [
    "0rtV5esQT6I",
    "i0p1bmr0EmE",
    "mAKsZ26SabQ",
    "Fm5iP0S1z9w",
    "V2hlQkVJZhE",
    "b73BI9eUkjM",
    "2S24-y0Ij3Y",
    "IHNzOHi8sJs",
    "vecSVX1QYbQ",
    "eelfrHtmk68",
    "Q6jnXN_nTlY",
  ],
};

var headerName = "kenny";
var headerNoName = "my";

function displaySongInfo() {
  if (window.localStorage.getItem("songs")) {
    songs.name = JSON.parse(window.localStorage.getItem("songs"));
  }

  if (window.localStorage.getItem("artists")) {
    songs.artists = JSON.parse(window.localStorage.getItem("artists"));
  }

  if (window.localStorage.getItem("lengths")) {
    songs.lengths = JSON.parse(window.localStorage.getItem("lengths"));
  }

  if (window.localStorage.getItem("links")) {
    songs.links = JSON.parse(window.localStorage.getItem("links"));
  }

  songs.name.forEach(function (song) {
    $("#songs").append(`<li> <p> ${song} </p> </li>`);
  });

  songs.artists.forEach(function (artist) {
    $("#artists").append(`<p> ${artist} </p>`);
  });

  songs.lengths.forEach(function (length) {
    $("#lengths").append(`<p> ${length} </p>`);
  });

  songs.links.forEach(function (link) {
    $("#links").append(
      `<iframe class="iframe" src="https://www.youtube.com/embed/${link}" width="190" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    );
  });

  songs.links.forEach(function (image) {
    $("#images").append(
      `<img src="https://i.ytimg.com/vi/${image}/hqdefault.jpg">`,
    );
  });

  songs.links.forEach(function (link) {
    $("#mobileLinks").append(
      `<a style="font-size:18px !important;" href="https://www.youtube.com/watch?v=${link}">link to youtube video</a>`,
    );
  });
}
function displayAddedSong() {
  if (window.localStorage.getItem("songs")) {
    songs.name = JSON.parse(window.localStorage.getItem("songs"));
  }

  if (window.localStorage.getItem("artists")) {
    songs.artists = JSON.parse(window.localStorage.getItem("artists"));
  }

  if (window.localStorage.getItem("lengths")) {
    songs.lengths = JSON.parse(window.localStorage.getItem("lengths"));
  }

  if (window.localStorage.getItem("links")) {
    songs.links = JSON.parse(window.localStorage.getItem("links"));
  }
  var lastSong = songs.name[songs.name.length - 1];
  $("#songs").append(`<li> <p>` + lastSong + `</p> </li>`);

  var lastArtists = songs.artists[songs.artists.length - 1];
  $("#artists").append(`<p>` + lastArtists + `</p>`);

  var lastLength = songs.lengths[songs.lengths.length - 1];
  $("#lengths").append(`<p>` + lastLength + `</p>`);

  var lastLink = songs.links[songs.links.length - 1];
  $("#links").append(
    '<iframe class="iframe" src="https://www.youtube.com/embed/' +
      lastLink +
      '"' +
      `width="190" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'></iframe>`,
  );
  $("#images").append(
    '<img src="https://i.ytimg.com/vi/' + lastLink + '/hqdefault.jpg">',
  );
  $("#mobileLinks").append(
    `<a style="font-size:18px !important;" href="https://www.youtube.com/watch?v=` +
      lastLink +
      `>link to youtube video</a>`,
  );
}

function emptySongInfo() {
  $("#songs").empty();
  $("#images").empty();
  $("#artists").empty();
  $("#lengths").empty();
  $("#links").empty();
}

function addSongInfo() {
  var addSong = $("#song").val();
  songs.name.push(addSong);
  window.localStorage.setItem("songs", JSON.stringify(songs.name));

  var addArtist = $("#artist").val();
  songs.artists.push(addArtist);
  window.localStorage.setItem("artists", JSON.stringify(songs.artists));

  var addLength = $("#length").val();
  songs.lengths.push(addLength);
  window.localStorage.setItem("lengths", JSON.stringify(songs.lengths));

  var addLink = $("#link").val();
  addLink = addLink.replace("https://www.youtube.com/watch?v=", "");
  songs.links.push(addLink);
  window.localStorage.setItem("links", JSON.stringify(songs.links));
}

$("#add").click(function () {
  addSongInfo();
  displayAddedSong();
  $("#song").val("");
  $("#artist").val("");
  $("#length").val("");
  $("#link").val("");
  $("#examples").val("");
});
displaySongInfo();

$("#clearCacheButton").click(function () {
  function clearReload() {
    window.localStorage.clear();
    window.location.reload();
  }
  function time() {
    window.setTimeout(function () {
      clearReload();
    }, 3000);
  }

  swal({
    title: "Are you sure?",
    text: "Hope you did not hit this button by accident. Are you sure you want to permanently erase everything you edited into the void? You cannot undo this action.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal(
        "Poof! All your changes is now gone! Please wait 3 seconds for the page to automatically reload.",
        {
          icon: "success",
        },
      );
      time();
    } else {
      swal("Your songs are safe, do not worry!"), {};
    }
  });
});

$("#addButton").click(function () {
  $("#addSettings").toggle();
  $("#deleteSettings").hide();
});

$("#deleteButton").click(function () {
  $("#addSettings").hide();
  $("#deleteSettings").toggle();
});

$("#delete").click(function () {
  var songNum = $("#deleteSong").val();
  songNum = songNum - 1;

  songs.name.splice(songNum, 1);
  window.localStorage.setItem("songs", JSON.stringify(songs.name));

  songs.artists.splice(songNum, 1);
  window.localStorage.setItem("artists", JSON.stringify(songs.artists));

  songs.lengths.splice(songNum, 1);
  window.localStorage.setItem("lengths", JSON.stringify(songs.lengths));

  songs.links.splice(songNum, 1);
  window.localStorage.setItem("links", JSON.stringify(songs.links));

  emptySongInfo();
  displaySongInfo();
  $("#deleteSong").val("");
});

$("#deleteAll").click(function () {
  songs.name = [];
  window.localStorage.setItem("songs", JSON.stringify(songs.name));
  songs.artists = [];
  window.localStorage.setItem("artists", JSON.stringify(songs.artists));
  songs.lengths = [];
  window.localStorage.setItem("lengths", JSON.stringify(songs.lengths));
  songs.links = [];
  window.localStorage.setItem("links", JSON.stringify(songs.links));

  emptySongInfo();
  displaySongInfo();
});

const instance = new TypeIt("#greetings", {
  strings: [headerName + "'s playlist", "welcome to kenny's playlist website!"],
  speed: 50,
  waitUntilVisible: true,
}).go();

document.getElementById("song").addEventListener("mouseover", function () {
  document.getElementById("examples").innerHTML =
    "<strong>example:</strong> 'And July'";
});
document.getElementById("artist").addEventListener("mouseover", function () {
  document.getElementById("examples").innerHTML =
    "<strong>example:</strong> 'Heize'";
});
document.getElementById("length").addEventListener("mouseover", function () {
  document.getElementById("examples").innerHTML =
    "<strong>example:</strong> '3:48'";
});
document.getElementById("link").addEventListener("mouseover", function () {
  document.getElementById("examples").innerHTML =
    "<strong>example:</strong> 'https://www.youtube.com/watch?v=rCeM57e2BfU'";
});

$(document).ready(function () {
  $("#song").focus(function () {
    $("#examples").html("<strong>example:</strong> 'And July'");
  });
  $("#artist").focus(function () {
    $("#examples").html("<strong>example:</strong> 'Heize'");
  });
  $("#length").focus(function () {
    $("#examples").html("<strong>example:</strong> '3:48'");
  });
  $("#link").focus(function () {
    $("#examples").html(
      "<strong>example:</strong> 'https://www.youtube.com/watch?v=rCeM57e2BfU'",
    );
  });
});
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $("iframe").show();

  $("#showIframes").click(function () {
    $("iframe").show();
  });

  $("#hideIframes").click(function () {
    $("iframe").hide();
  });
});

$("#iframeButton").hide();
$("#mobileButton, #iframeButton").click(function () {
  $("#mobileButton, #iframeButton").toggle();
});

$("#mobileButton").click(function () {
  $("#links").hide();
  $("#mobileLinks").show();
  $("#showIframes, #hideIframes").hide();
  $(".iframe").each(function (index) {
    $(this).attr("src", $(this).attr("src"));
    return false;
  });
});

$("#iframeButton").click(function () {
  $("#links").show();
  $("#mobileLinks").hide();
  $("#showIframes, #hideIframes").show();
});

$("#mobileLinks").hide();

var number = document.getElementById("deleteSong");
number.onkeydown = function (e) {
  if (
    !(
      (e.keyCode > 96 && e.keyCode < 106) ||
      (e.keyCode > 48 && e.keyCode < 58) ||
      e.keyCode == 8
    )
  ) {
    return false;
  }
};

$(document).ready(function () {
  swal({
    title: "Disclaimer",
    text: "This website uses a lot of browser memory due to the excess amounts of iframes on the page. If you do not have enough browser memory, iframes will load slower than usual or not load at all. If you still wish to scroll through my website, I would suggest to turn on the mobile site.",
    icon: "warning",
    button: "I understand.",
  });
});
