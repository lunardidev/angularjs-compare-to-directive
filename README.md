# angularjs-compare-to-directive

Simple directive to validate whether two fields are equal. 

## Install:
Run: bower install angularjs-compare-to-directive

## Example:

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
