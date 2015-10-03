nicksflix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [
    { title: "Holy Lord, Shawshank Redemption is Such a Good Movie", body: "I mean, the title is totally true, but it's also the name of a song by this really kick-ass band called 'Murder by Death'.  You should seriously check them out, partciularly their two albums 'Who Will Survive, and What Will Be Left of Them?' and 'Like the Exorcist, but More Breakdancing'.", id: 1 },
    { title: "Another Review Title For Some Movie or Other", body: "Let's just imagine that I was really witty and wrote a super hilarious fake review.  Normally I'd totally spend a bunch of time trying to do just that, but unfortunately I'm not feeling super creative today.  Sorry.", id: 2 },
    { title: "5 Centimeters Per Second: DEM FEELS", body: "This is an absolutely gorgeous movie by acclaimed director Makoto Shinkai.  Easily one of the top 5 most beautifully animated things I've ever seen.  But as the name suggests, prepare for some feels.  Maybe not quite 'Grave of the Fireflies' level, but it definitely hits you in the chest.", id: 3 },
    { title: "Nice tuxedo.  Nice tuxedo to DIE IN!", body: "If you haven't watched 'Six-String Samurai', you owe it to yourself to do so.  It's a really good low-budget cult favorite, perfect for being shared with a group of friends.  Campy and ridiculous?  Absolutely.  But damn if it isn't entertaining, and chock full of quotes that are absolute gems.", id: 4 }
  ];

  return factory;
});
