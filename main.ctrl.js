angular.module('app').controller("MainController", function ($http) {
    var vm = this;
    vm.title = 'Useful Links';
    vm.searchInput = '';
    vm.items = [{}];

    $http.get('/links.json').then(function (data) {
        vm.items = data;
        console.log('Data sent: ' + JSON.stringify(vm.items));
    });

    vm.new = {};
    vm.addItem = function () {
        vm.items.push(vm.new);
        vm.new = {};
    };

    vm.save = function () {
        $http.post('links.json', vm.items).then(function (data) {
            console.log('Data sent: ' + JSON.stringify(vm.items));
        });
    };

});