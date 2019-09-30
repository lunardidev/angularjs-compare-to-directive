# angularjs-compare-to-directive for Angular 1.3


Simple directive to validate whether two fields are equal. 


## Install:

### bower
Run: bower install angularjs-compare-to-directive

### node
Run: npm install angularjs-compare-to-directive

## Example

Include the module as a dependency in your Angular application.

```javascript
angular.module('myApp', ['compareField']);
```

Use the directive in your form.

```html
<form name="signUpForm">
    <div class="input-block">
        <label>
            Password
            <input ng-model="$ctrl.password" type="text" name="password" required>
        </label>
    </div>
    <div class="input-block">
        <label>
            Confirm password
            <input compare-to="$ctrl.password" ng-model="$ctrl.confirmPassword" type="text" name="confirmPassword" required>
        </label>
        <p class="error-inline" ng-show="signUpForm.confirmPassword.$dirty && signUpForm.confirmPassword.$error.errorCompareTo">
            <span class="glyphicon glyphicon-exclamation-sign"></span>
            Must match the previous entry.
        </p> 
    </div>
</form>
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
