# angularjs-compare-to-directive

Simple directive to validate whether two fields are equal. 

## Example
## [Demo Online](http://dev.fetmobile.net/angular-login/#/signUp)

## Install:
Run: bower install angularjs-compare-to-directive

## Example

```html
<!-- PASSWORD -->
<div>
    <label class="col-sm-4 control-label no-padding-right" for="password">Password</label>
    <div class="col-sm-8">
        <span class="block input-icon input-icon-right">  
            <input ng-model="signUp.password" type="text" name="password" class="form-control" required>
            </p>     
        </span>
    </div>
</div>

<!-- CONFIRM YOUR PASSWORD -->
<div class="form-group" ng-class="{ 'has-error' : signUpForm.confirmPassword.$invalid && !signUpForm.confirmPassword.$pristine && signUpForm.confirmPassword.$error.errorCompareTo}">
    <label class="col-sm-4 control-label no-padding-right" for="password">Confirm Password</label>
    <div class="col-sm-8">
        <span class="block input-icon input-icon-right">  
            <input compare-to="signUp.password" ng-model="signUp.confirmPassword" placeholder="Confirm Password" type="text" name="confirmPassword" class="form-control" required> 
            <p class="error-inline" ng-show="signUpForm.confirmPassword.$dirty && signUpForm.confirmPassword.$error.errorCompareTo">
                <span class="glyphicon glyphicon-exclamation-sign"></span>
                Must match the previous entry.
            </p>  
        </span>
    </div>
</div>
```

## Test (jasmine)

```javascript
'use strict';

describe('Directive: compareto', function () {

  // load the directive's module
  beforeEach(module('compareField'));

  var scope;

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope.$new();
    var element = angular.element(
      '<form name="form">' +
      '<input ng-model="model.password" type="text" name="password" id="password">' +
      '<input compare-to="model.password" ng-model="model.confirmPassword" type="text" name="confirmPassword" id="confirmPassword">' +
      '</form>'
    );

    scope.model = { password: '', confirmPassword: 'Fd565$dD' };
    $compile(element)(scope);

  }));

  describe('Compare To', function() {

    it('Should contain two elements with the same value', function() {

      // element target
      scope.form.password.$setViewValue('Fd565$dD');
      scope.$digest();
      expect(scope.form.confirmPassword.$error.errorCompareTo).toEqual(false);
    });

  });
});

```
