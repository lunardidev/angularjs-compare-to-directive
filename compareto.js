'use strict';

/**
 * @ngdoc       directive
 * @name        compareField.directive:compareto
 * @description This is a directive to validate whether two fields are equal. 
 */
angular.module('compareField', [])
    .directive('compareTo', function() {
        return {
            scope: {
                targetModel: '=compareTo'
            },
            require: 'ngModel',
            link: function postLink(scope, element, attrs, ctrl) {

                var compare = function() {

                    var e1 = element.val();
                    var e2 = scope.targetModel;

                    if (e2 !== null) {
                        return e1 === e2;
                    }
                    
                    return false;
                };

                scope.$watch(compare, function(newValue) {
                    ctrl.$setValidity('errorCompareTo', newValue);
                });

            }
        };
    });
