var app = angular.module('myApp', ['ui.router','ngAnimate','ngFileUpload','ngDialog','angularUtils.directives.dirPagination','mgo-angular-wizard']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login'); 
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'src/views/loginPage.html',
            controller: 'LoginPageController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'src/views/homePage.html',
			controller: 'HomePageController'
        })
		.state('home.datavalidation', {
            url: '/datavalidation',
            templateUrl: 'src/views/datavalidation/datavalidation.html',
			controller:'DataValidationController'
        })
        .state('adminpage', {
            url: '/adminpage',
            templateUrl: 'src/views/admin/adminpage-main.html'
        })
        .state('adminpage.subpage', {
            url: '/subpage',
            templateUrl: 'src/views/admin/adminpage.html',
            controller:'AdminPageController'
        })
        .state('adminpage.adduser', {
            url: '/adduser',
            templateUrl: 'src/views/admin/addUser.html',
            controller:'addUserController'
        })
       .state('adminpage.edituser', {
            url: '/edituser',
            templateUrl: 'src/views/admin/editUser.html',
            controller:'editUserController'
        })         
		.state('home.processauto', {
            url: '/processauto',
            templateUrl: 'src/views/process_auto/processauto.html'
        })
        .state('home.workbktoxml', {
            url: '/workbktoxml',
            templateUrl: 'src/views/workbk_to_xml/workbktoxml.html',
            controller:'WorkbookXMLController'
        })
        .state("home.workbktoxml.uploadtemplate", {
            url:"/uploadtemplate?templateName",
            templateUrl: "src/views/workbk_to_xml/modalContentXml.html",
			controller:"modalControllerXml"
        })
		.state("home.datavalidation.uploadtemplate", {
            url:"/uploadtemplate?templateName&blnCompareFiles",
            templateUrl: "src/views/datavalidation/modalContent.html",
            controller:"modalControler"
        })
        .state("home.datavalidation.editPageTemplate", {
            url:"/editPageTemplate?EditTemplateName",
            templateUrl: "src/views/datavalidation/editPage.html",
			controller:"EditPageController"
        })
		.state("home.processauto.emailprocess", {
            url:"/emailprocess",
            templateUrl: "src/views/process_auto/emailprocess.html",
			controller:"EmailProcessController"
        })
		.state("home.processauto.managePermission", {
            url:"/managePermission",
            templateUrl: "src/views/process_auto/managePermission.html",
			controller:"PermissionProcessController"
        })
        .state("home.processauto.manageRoles", {
            url:"/manageRoles",
            templateUrl: "src/views/process_auto/manageRoles.html",
			controller:"RolesProcessController"
        })
        .state("home.processauto.importEmployeeData", {
            url:"/importEmployeeData",
            templateUrl: "src/views/process_auto/importEmployeeData/importEmpData-main.html",
			controller:"ImportEmpDataController"
        })
})