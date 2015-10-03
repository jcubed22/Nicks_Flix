nicksflix.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory) {
  $scope.ReviewsFactory = ReviewsFactory;
  $scope.reviews = ReviewsFactory.reviews;
});
