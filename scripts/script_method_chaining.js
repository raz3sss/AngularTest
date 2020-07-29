var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: 'Mark',
        lastName: 'Hastings',
        gender: 'Male'
    };
    $scope.employee = employee;
});

// var myApp = angular
//     .module("myModule", [])
//     .controller("myController", function ($scope) {
//         var employee = {
//             firstName: 'Mark',
//             lastName: 'Hastings',
//             gender: 'Male'
//         };
//         $scope.employee = employee;
//     });


myApp.controller("myFlagController", function ($scope) {
        var country = {
            name: "USA",
            capital: "Washington, D.C.",
            flag: "Images/flag-usa.jpg"
        };
        $scope.country = country;
    });

myApp.controller("twoWayDataBinding", function ($scope) {
    $scope.message = "Hello Angular!"
});

myApp.controller("ngRepeatExample", function ($scope) {
    var employees = [
        {firstName: "first1", lastName: "last1", gender: "Male", salary:5000},
        {firstName: "first2", lastName: "last2", gender: "FeMale", salary:5100},
        {firstName: "first3", lastName: "last3", gender: "Male", salary:5200},
        {firstName: "first4", lastName: "last4", gender: "Male", salary:5300},
    ];
    $scope.employees = employees;
});

myApp.controller("ngRepeatNestedArray", function ($scope) {
    var countries = [
        {
            name: "UK",
            cities: [
                {name: "Londor"},
                {name: "Manchester"},
                {name: "Birmingham"}
            ]
        },
        {
            name: "USA",
            cities: [
                {name: "Washington"},
                {name: "California"},
                {name: "Texas"}
            ]
        },
        {
            name: "Nepal",
            cities: [
                {name: "Kathmandu"},
                {name: "Pokhara"},
                {name: "Dolakha"}
            ]
        }
    ];
    $scope.countries = countries;
});

myApp.controller("EventHandling", function ($scope) {
    var technologies = [
        {name: "Java", likes:0, dislikes:0},
        {name: "C#", likes:0, dislikes:0},
        {name: "PHP", likes:0, dislikes:0},
        {name: "Laravel", likes:0, dislikes:0}
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    }
});

myApp.controller("Filter", function ($scope) {
    var employees = [
        {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 57000},
        {name: "Mark", dateOfBirth: new Date("June 23, 1973"), gender: "Male", salary: 55325},
        {name: "Pam", dateOfBirth: new Date("August 23, 1985"), gender: "Female", salary: 523654},
        {name: "Todd", dateOfBirth: new Date("July 7, 1988"), gender: "Male", salary: 4965246}
    ];
    $scope.employees = employees;
    $scope.rowLimit = 3;
});