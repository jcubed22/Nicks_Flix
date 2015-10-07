nicksflix.controller('ReviewFindCtrl', function ReviewFindCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);

});
